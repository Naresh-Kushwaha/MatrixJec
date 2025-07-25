import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch'; // Use global fetch if Node 18+

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory session store (replace with DB in prod)
const sessions = new Map();

// Gemini system prompt for AI chat
const SYSTEM_PROMPT = `You are Calmi, a kind and emotionally intelligent mental wellness coach.

Your role is to:
- Ask users how they're feeling in a warm, caring way
- Detect emotional tone and respond with empathy
- Offer supportive reflections and gentle guidance
- Recommend healing activities like journaling, breathing exercises, or watching uplifting content
- Never diagnose or give medical advice
- Always be calm, friendly, and positive
- Keep responses concise but meaningful (2-3 sentences max)
- End conversations with gentle encouragement

Respond in a conversational, supportive tone. Focus on listening and providing emotional support.`;

// Chat endpoint - processes messages and replies with AI/demo response
app.post('/api/chat', async (req, res) => {
  try {
    const { message, sessionId } = req.body;

    if (!message || !sessionId) {
      return res.status(400).json({ error: 'Message and sessionId are required' });
    }

    // Initialize session if missing
    if (!sessions.has(sessionId)) {
      sessions.set(sessionId, {
        messages: [],
        stage: 'feeling_lost',
        mood: 'neutral'
      });
    }

    const session = sessions.get(sessionId);
    session.messages.push({ role: 'user', content: message });

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === 'demo-key') {
      // Demo fallback
      const demoResponse = getDemoResponse(message);
      session.messages.push({ role: 'assistant', content: demoResponse });

      // Update stage based on mood detected from user message
      updateSessionStageByMood(session, message);

      return res.json({
        response: demoResponse,
        stage: session.stage,
        mood: session.mood
      });
    }

    // Call Gemini AI
    const geminiResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `${SYSTEM_PROMPT}\n\nUser: ${message}` }] }]
      })
    });

    const data = await geminiResponse.json();
    const response = data?.candidates?.[0]?.content?.parts?.[0]?.text || "I'm here for you. How are you feeling today?";

    session.messages.push({ role: 'assistant', content: response });

    // Update mood and stage
    updateSessionStageByMood(session, message);

    res.json({
      response,
      stage: session.stage,
      mood: session.mood
    });

  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({
      error: 'Failed to process message',
      response: "I'm having trouble connecting right now, but I'm here to listen. How are you feeling?"
    });
  }
});

// Helper to update session stage based on mood detected
function updateSessionStageByMood(session, message) {
  const mood = detectMood(message);
  session.mood = mood;

  if (mood === 'sad' || mood === 'anxious') {
    session.stage = 'reflecting';
  } else if (mood === 'happy' || mood === 'better') {
    session.stage = 'feeling_lighter';
  }
}

// Mood detection helper
function detectMood(message) {
  const sadWords = ['sad', 'depressed', 'down', 'upset', 'crying', 'hurt', 'lonely'];
  const anxiousWords = ['anxious', 'worried', 'stressed', 'nervous', 'overwhelmed', 'panic'];
  const happyWords = ['good', 'great', 'happy', 'better', 'excited', 'positive'];

  const lower = message.toLowerCase();

  if (sadWords.some(word => lower.includes(word))) return 'sad';
  if (anxiousWords.some(word => lower.includes(word))) return 'anxious';
  if (happyWords.some(word => lower.includes(word))) return 'happy';

  return 'neutral';
}

// Demo responses for fallback mode
function getDemoResponse(message) {
  const responses = [
    "I hear you, and I want you to know that your feelings are completely valid. You're stronger than you realize. 💙",
    "Thank you for sharing that with me. It takes courage to express your feelings. What's something that brings you peace?",
    "I'm here with you. Would you like to try a gentle breathing exercise together?",
    "You're doing your best, and that's enough. Is there a small comfort you can reach for today?",
    "It’s okay to not be okay. You're not alone, and I’m glad you're here. 🌱"
  ];

  return responses[Math.floor(Math.random() * responses.length)];
}

// Get full session data (including current stage)
app.get('/api/session/:sessionId', (req, res) => {
  const { sessionId } = req.params;

  if (!sessions.has(sessionId)) {
    sessions.set(sessionId, {
      messages: [],
      stage: 'feeling_lost',
      mood: 'neutral'
    });
  }

  res.json(sessions.get(sessionId));
});

// Update stage manually (e.g. via stage progress UI buttons)
app.post('/api/stage', (req, res) => {
  const { sessionId, stage } = req.body;

  if (!sessionId || !stage) {
    return res.status(400).json({ error: 'sessionId and stage are required' });
  }

  if (!sessions.has(sessionId)) {
    sessions.set(sessionId, {
      messages: [],
      stage: 'feeling_lost',
      mood: 'neutral'
    });
  }

  const session = sessions.get(sessionId);
  session.stage = stage;

  res.json({ success: true, stage });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'demo-key') {
    console.log('⚠️  Using demo mode. Set GEMINI_API_KEY in .env to enable real AI responses');
  }
});
