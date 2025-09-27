import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Groq from 'groq-sdk';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env file from the project root (one level up from server directory)
const envPath = path.join(__dirname, '..', '.env');
console.log('Looking for .env file at:', envPath);
console.log('Current working directory:', process.cwd());

// Try to load .env file
const result = dotenv.config({ path: envPath });
if (result.error) {
  console.error('Error loading .env file:', result.error);
} else {
  console.log('.env file loaded successfully');
}

const app = express();
app.use(cors());
app.use(express.json({ limit: '1mb' }));

const groqApiKey = process.env.GROQ_API_KEY;
const groqModel = process.env.GROQ_MODEL || 'openai/gpt-oss-20b';

// Debug: Log environment variables (remove in production)
console.log('Environment variables loaded:');
console.log('GROQ_API_KEY:', groqApiKey ? 'Set (length: ' + groqApiKey.length + ')' : 'Not set');
console.log('GROQ_MODEL:', groqModel);
console.log('PORT:', process.env.PORT || 'Not set (using default 8787)');
const DEFAULT_SYSTEM_PROMPT = `You are a Business Economics tutor for B.Com students. 

CRITICAL RULE: You MUST ONLY answer questions related to Business Economics for B.Com students. 

STRICT ENFORCEMENT:
- If asked about programming, coding, computer science, technology, history, geography, politics, science, mathematics, literature, or ANY topic outside Business Economics, you MUST respond with EXACTLY this message:
  "I can only help with Business Economics topics for B.Com students. Please ask me something related to that."

- Do NOT try to connect unrelated topics to economics
- Do NOT provide any information about non-Business Economics subjects
- Do NOT attempt to bridge unrelated topics to economic concepts

ALLOWED TOPICS (B.Com Business Economics only):
- Introduction to Business Economics: scope, nature, and importance  
- Demand and Supply analysis, Elasticity of demand and supply  
- Consumer behavior: utility analysis, indifference curve analysis  
- Production and Costs: law of variable proportion, returns to scale, cost concepts  
- Market structures: perfect competition, monopoly, monopolistic competition, oligopoly  
- Pricing and output decisions under different markets  
- National Income: concepts, measurement, and limitations  
- Business cycles: phases, causes, and remedies  
- Inflation and unemployment  
- Fiscal policy, monetary policy, and their impact on business  
- International trade, foreign exchange, balance of payments  
- Application of economic principles in business decision-making  

RESPONSE FORMAT FOR ALLOWED TOPICS:
1. **Concise & Clear** - Keep answers short but impactful
2. **Interactive & Engaging** - Ask follow-up questions
3. **Exam-Oriented** - Tailor depth to marks (2/5/10 marks)
4. **Learning Reinforcement** - End with Key Takeaways and Practice Question

REMEMBER: If the question is NOT about Business Economics, respond with the exact rejection message above. Do not provide any other information.`;
if (!groqApiKey) {
  console.warn('Warning: GROQ_API_KEY is not set. Create a .env with GROQ_API_KEY=...');
}
const groq = new Groq({ apiKey: groqApiKey });

app.get('/api/health', async (req, res) => {
  try {
    if (!groqApiKey) {
      return res.status(500).json({ ok: false, error: 'GROQ_API_KEY missing' });
    }
    const models = await groq.models.list();
    return res.json({ ok: true, models: models.data?.map(m => m.id) || [] });
  } catch (err) {
    console.error('Health error', err?.response?.data || err?.message || err);
    return res.status(500).json({ ok: false, error: err?.message || 'Unknown error' });
  }
});

app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;
    if (!Array.isArray(messages)) {
      return res.status(400).json({ error: 'messages must be an array' });
    }

    if (!groqApiKey) {
      return res.status(500).json({ error: 'GROQ_API_KEY is missing on server' });
    }

    const normalized = messages[0]?.role === 'system'
      ? messages
      : [{ role: 'system', content: DEFAULT_SYSTEM_PROMPT }, ...messages];

    const completion = await groq.chat.completions.create({
      model: groqModel, // per your sample: "openai/gpt-oss-20b"
      messages: normalized,
    });

    const content = completion.choices?.[0]?.message?.content || '';
    return res.json({ content });
  } catch (err) {
    const details = err?.response?.data || err?.message || err;
    console.error('Groq error', details);
    return res.status(500).json({ error: 'Failed to get response from Groq', details });
  }
});

// Simple test endpoint that mirrors the sample you provided
app.get('/api/test', async (req, res) => {
  try {
    if (!groqApiKey) {
      return res.status(500).json({ error: 'GROQ_API_KEY is missing on server' });
    }
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: 'Explain the importance of fast language models',
        },
      ],
      model: 'openai/gpt-oss-20b',
    });
    const content = completion.choices?.[0]?.message?.content || '';
    return res.json({ content });
  } catch (err) {
    const details = err?.response?.data || err?.message || err;
    console.error('Groq test error', details);
    return res.status(500).json({ error: 'Groq test failed', details });
  }
});

// Streaming endpoint (Server-Sent Events)
app.post('/api/chat/stream', async (req, res) => {
  try {
    const { messages } = req.body;
    if (!Array.isArray(messages)) {
      res.writeHead(400, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
        'X-Accel-Buffering': 'no',
      });
      res.write(`event: error\n`);
      res.write(`data: messages must be an array\n\n`);
      return res.end();
    }
    if (!groqApiKey) {
      res.writeHead(500, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
        'X-Accel-Buffering': 'no',
      });
      res.write(`event: error\n`);
      res.write(`data: GROQ_API_KEY is missing on server\n\n`);
      return res.end();
    }

    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
      'X-Accel-Buffering': 'no',
    });

    const normalized = messages[0]?.role === 'system'
      ? messages
      : [{ role: 'system', content: DEFAULT_SYSTEM_PROMPT }, ...messages];

    const stream = await groq.chat.completions.create({
      model: groqModel,
      messages: normalized,
      stream: true,
    });

    // Groq JS SDK returns an async iterable when stream: true
    for await (const chunk of stream) {
      const token = chunk?.choices?.[0]?.delta?.content || '';
      if (token) {
        res.write(`data: ${JSON.stringify({ token })}\n\n`);
      }
    }

    res.write(`event: done\n`);
    res.write(`data: [DONE]\n\n`);
    res.end();
  } catch (err) {
    const details = err?.response?.data || err?.message || 'Unknown error';
    console.error('Groq stream error', details);
    try {
      res.write(`event: error\n`);
      res.write(`data: ${JSON.stringify(details)}\n\n`);
      res.end();
    } catch {}
  }
});

const PORT = process.env.PORT || 8787;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});




