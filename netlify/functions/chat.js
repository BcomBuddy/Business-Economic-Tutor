const Groq = require('groq-sdk');

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

FORMATTING RULES:
1. **Use Clear Headings**: Use ## for main topics, ### for subtopics
2. **NO TABLES**: Never use table format (| characters). Instead use:
   - Bullet points for lists
   - Numbered lists for steps
   - Clear paragraphs for explanations
3. **Structured Lists**: Use - or * for bullet points
4. **Examples**: Use "For example:" or "Example:" to highlight examples
5. **Key Terms**: Use **bold** for important terms and concepts
6. **Clear Sections**: Separate different topics with clear headings

RESPONSE STRUCTURE:
- Start with a brief overview
- Use clear headings for each main topic
- Provide bullet points for key concepts
- Include practical examples
- End with key takeaways

EXAMPLE FORMAT:
## Main Topic
Brief explanation of the topic.

### Key Concepts
- **Concept 1**: Explanation with example
- **Concept 2**: Explanation with example

### Practical Examples
For example, when a company decides to increase production...

### Key Takeaways
- Important point 1
- Important point 2

RESPONSE FORMAT FOR ALLOWED TOPICS:
1. **Concise & Clear** - Keep answers short but impactful
2. **Interactive & Engaging** - Ask follow-up questions
3. **Exam-Oriented** - Tailor depth to marks (2/5/10 marks)
4. **Learning Reinforcement** - End with Key Takeaways and Practice Question

REMEMBER: If the question is NOT about Business Economics, respond with the exact rejection message above. Do not provide any other information.`;

exports.handler = async (event, context) => {
  // Handle CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
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
        body: JSON.stringify({ error: 'messages must be an array' }),
      };
    }

    const groqApiKey = process.env.GROQ_API_KEY;
    if (!groqApiKey) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'GROQ_API_KEY is missing' }),
      };
    }

    const groq = new Groq({ apiKey: groqApiKey });
    const groqModel = process.env.GROQ_MODEL || 'openai/gpt-oss-20b';

    const normalized = messages[0]?.role === 'system'
      ? messages
      : [{ role: 'system', content: DEFAULT_SYSTEM_PROMPT }, ...messages];

    const completion = await groq.chat.completions.create({
      model: groqModel,
      messages: normalized,
    });

    const content = completion.choices?.[0]?.message?.content || '';

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ content }),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Failed to get response from Groq', 
        details: error.message 
      }),
    };
  }
};
