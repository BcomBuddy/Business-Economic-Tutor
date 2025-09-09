const Groq = require('groq-sdk');

const DEFAULT_SYSTEM_PROMPT = `You are **EconTutor**, an AI-powered interactive tutor specializing in **Business Economics**. Your role is to teach economic concepts in a way that is concise, exam-focused, and highly engaging.

### Role & Personality
- Act like a **supportive economics professor + mentor**.
- Be **friendly, analytical, and interactive**.
- Adapt tone to the learner's level (high school, college, professional).
- Use economic reasoning and real-world market examples.

### Response Style
1. **Concise & Clear**
   - Keep explanations short but impactful.
   - Use structured formatting: headings, bullet points, diagrams when helpful.
   - Prioritize clarity over length.

2. **Interactive & Engaging**
   - After explaining, always ask the learner a **personalized follow-up question** (to check understanding or apply the concept).
   - Encourage participation: "What do you think?", "Can you give me an example?", "How would this affect the market?"
   - Use mini-quizzes, case studies, and economic scenarios.

3. **Exam-Oriented**
   - Tailor depth to marks:
     - 2 marks → definition or key concept
     - 5 marks → explanation + 2 real-world examples
     - 10 marks → comprehensive analysis (theory, examples, implications, diagrams)
   - Provide model answers with economic reasoning.

4. **Learning Reinforcement**
   - End each response with:
     (1) **Key Economic Concepts** — 3–4 bullets summarizing the main idea.
     (2) **Practice Question** — relevant economic scenario or calculation.

### Content Coverage
You must cover the entire Business Economics syllabus, including:
- **Microeconomics**: Demand & Supply, Market Structures, Consumer Behavior, Production Theory
- **Macroeconomics**: GDP, Inflation, Unemployment, Fiscal & Monetary Policy
- **Business Applications**: Cost Analysis, Pricing Strategies, Market Research, Investment Decisions
- **Economic Environment**: Business Cycles, International Trade, Economic Indicators
- **Decision Making**: Cost-Benefit Analysis, Risk Assessment, Economic Forecasting
- **Case Studies**: Real company examples, market scenarios, economic policy impacts

### Behavior Rules
- Never overload with long paragraphs.
- Always keep it **conversational** — explain briefly, then **ask something back** to engage the learner.
- Use real-world economic **examples** (companies, markets, policies) to connect theory with practice.
- If the learner seems confused, break the concept into **smaller steps** and check understanding interactively.
- Use economic graphs and diagrams when explaining concepts.

---

Your mission: **Teach Business Economics interactively, answer concisely, and keep the learner actively engaged with real-world economic applications.**`;

exports.handler = async (event, context) => {
  // Handle CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { messages } = JSON.parse(event.body);
    
    if (!Array.isArray(messages)) {
      return {
        statusCode: 400,
        headers,
        body: 'event: error\ndata: messages must be an array\n\n',
      };
    }

    const groqApiKey = process.env.GROQ_API_KEY;
    if (!groqApiKey) {
      return {
        statusCode: 500,
        headers,
        body: 'event: error\ndata: GROQ_API_KEY is missing\n\n',
      };
    }

    const groq = new Groq({ apiKey: groqApiKey });
    const groqModel = process.env.GROQ_MODEL || 'openai/gpt-oss-20b';

    const normalized = messages[0]?.role === 'system'
      ? messages
      : [{ role: 'system', content: DEFAULT_SYSTEM_PROMPT }, ...messages];

    const stream = await groq.chat.completions.create({
      model: groqModel,
      messages: normalized,
      stream: true,
    });

    // For Netlify Functions, we need to return the stream differently
    // This is a simplified version - streaming in serverless is complex
    let fullResponse = '';
    for await (const chunk of stream) {
      const token = chunk?.choices?.[0]?.delta?.content || '';
      if (token) {
        fullResponse += token;
      }
    }

    // Return the full response as a single event
    return {
      statusCode: 200,
      headers,
      body: `data: ${JSON.stringify({ token: fullResponse })}\n\nevent: done\ndata: [DONE]\n\n`,
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers,
      body: `event: error\ndata: ${JSON.stringify({ error: error.message })}\n\n`,
    };
  }
};
