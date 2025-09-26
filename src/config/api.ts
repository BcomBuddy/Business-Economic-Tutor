// API configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

// Check if we're running locally or on Netlify
const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

export const API_ENDPOINTS = {
  CHAT_STREAM: isLocal 
    ? `${API_BASE_URL}/api/chat/stream` 
    : `${API_BASE_URL}/.netlify/functions/chat-stream`,
  CHAT: isLocal 
    ? `${API_BASE_URL}/api/chat` 
    : `${API_BASE_URL}/.netlify/functions/chat`,
  HEALTH: isLocal 
    ? `${API_BASE_URL}/api/health` 
    : `${API_BASE_URL}/.netlify/functions/health`,
  TEST: isLocal 
    ? `${API_BASE_URL}/api/test` 
    : `${API_BASE_URL}/.netlify/functions/chat`,
};

export default API_ENDPOINTS;


