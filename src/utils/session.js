export const generateSessionId = () => {
  return 'session_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
};

export const getStoredSession = () => {
  return localStorage.getItem('wellness_session_id');
};

export const storeSession = (sessionId) => {
  localStorage.setItem('wellness_session_id', sessionId);
};
