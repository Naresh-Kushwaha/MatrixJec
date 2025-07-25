import React, { useState, useEffect } from 'react';
import axios from 'axios';



import StageProgress from './StageProgress';
import WelcomeScreen from './WelcomeScreen';
import { generateSessionId } from '../../utils/session';

function ChatComponent() {
  const [sessionId, setSessionId] = useState('');
  const [currentStage, setCurrentStage] = useState('feeling_lost');
  const [showWelcome, setShowWelcome] = useState(true);

  // Generate sessionId once on mount
  useEffect(() => {
    const id = generateSessionId();
    setSessionId(id);
  }, []);

  // Fetch session info once sessionId is ready and welcome screen is hidden
  useEffect(() => {
    if (!sessionId || showWelcome) return;

    const fetchSession = async () => {
      try {
        const res = await axios.get(`/api/session/${sessionId}`);
        if (res.data && res.data.stage) {
          setCurrentStage(res.data.stage);
        }
      } catch (error) {
        console.error('Failed to fetch session:', error);
      }
    };

    fetchSession();
  }, [sessionId, showWelcome]);

  const handleStartJourney = () => {
    setShowWelcome(false);
  };

  const handleStageUpdate = (newStage) => {
    setCurrentStage(newStage);
  };

  if (showWelcome) {

    return <WelcomeScreen onStart={handleStartJourney} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Stage Progress */}
          
            <StageProgress
              currentStage={currentStage}
              sessionId={sessionId}
              onStageUpdate={handleStageUpdate}
            />
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-4 h-full max-h-[80vh] overflow-y-auto">
              <Chat sessionId={sessionId} onStageUpdate={handleStageUpdate} />
            </div>
          </div>
        </div>
      </div>
   
  );
}

export default ChatComponent;
