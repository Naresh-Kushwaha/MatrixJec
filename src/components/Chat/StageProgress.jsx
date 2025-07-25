import React, { useState } from 'react';
import { Cloud, Sprout, PlayCircle, Sun, CheckCircle } from 'lucide-react';
import axios from 'axios';

const stages = [
  {
    id: 'feeling_lost',
    title: 'Feeling Lost',
    icon: Cloud,
    color: 'from-gray-400 to-gray-500',
    description: "It's okay to feel this way",
  },
  {
    id: 'reflecting',
    title: 'Reflecting',
    icon: Sprout,
    color: 'from-green-400 to-green-500',
    description: "Let's explore your feelings",
  },
  {
    id: 'watching_content',
    title: 'Finding Peace',
    icon: PlayCircle,
    color: 'from-blue-400 to-blue-500',
    description: 'Healing through inspiration',
  },
  {
    id: 'feeling_lighter',
    title: 'Feeling Lighter',
    icon: Sun,
    color: 'from-yellow-400 to-orange-500',
    description: "You're making progress!",
  },
];

const StageProgress = ({ currentStage, sessionId, onStageUpdate }) => {
  const currentStageIndex = stages.findIndex((stage) => stage.id === currentStage);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleStageAction = async (stageId) => {
    setLoading(true);
    setError(null);
    try {
      await axios.post('/api/stage', {
        sessionId,
        stage: stageId,
      });

      const res = await axios.get(`/api/session/${sessionId}`);
      if (res.data?.stage) {
        onStageUpdate(res.data.stage);
      } else {
        onStageUpdate(stageId);
      }
    } catch (err) {
      console.error('Error updating stage:', err);
      setError('Failed to update stage. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const openMotivationalVideo = () => {
    const videos = [
      'https://www.youtube.com/watch?v=F6mBav72AkQ',
      'https://www.youtube.com/watch?v=78nsxRxbf4w',
      'https://www.youtube.com/watch?v=mgmVOuLgFB0',
    ];

    const randomVideo = videos[Math.floor(Math.random() * videos.length)];
    window.open(randomVideo, '_blank');

    setTimeout(() => {
      handleStageAction('feeling_lighter');
    }, 1000);
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-6 h-full flex flex-col">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Healing Journey</h2>

      <div className="space-y-6 flex-grow overflow-auto">
        {stages.map((stage, index) => {
          const isActive = index === currentStageIndex;
          const isCompleted = index < currentStageIndex;
          const IconComponent = stage.icon;

          return (
            <div
              key={stage.id}
              className={`relative flex items-center space-x-4 p-4 rounded-2xl transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200'
                  : isCompleted
                  ? 'bg-green-50 border-2 border-green-200'
                  : 'bg-gray-50 border-2 border-gray-200'
              }`}
              onClick={() => {
                if (isActive || isCompleted) {
                  handleStageAction(stage.id);
                }
              }}
              aria-label={`Go to stage: ${stage.title}`}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r ${
                  isCompleted ? 'from-green-400 to-green-500' : stage.color
                }`}
              >
                {isCompleted ? (
                  <CheckCircle className="w-6 h-6 text-white" />
                ) : (
                  <IconComponent className="w-6 h-6 text-white" />
                )}
              </div>

              <div className="flex-1">
                <h3
                  className={`font-semibold ${
                    isActive ? 'text-purple-700' : isCompleted ? 'text-green-700' : 'text-gray-700'
                  }`}
                >
                  {stage.title}
                </h3>
                <p className="text-sm text-gray-600">{stage.description}</p>
              </div>

              {isActive && (
                <div className="absolute -right-2 -top-2">
                  <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 space-y-3">
        {error && (
          <p className="text-red-600 text-center font-semibold">{error}</p>
        )}

        {loading && (
          <p className="text-gray-500 text-center">Updating...</p>
        )}

        {!loading && currentStage === 'reflecting' && (
          <button
            onClick={() => handleStageAction('watching_content')}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 px-4 rounded-2xl hover:from-green-600 hover:to-green-700 transition-all duration-300"
          >
            📝 Start Journal Entry
          </button>
        )}

        {!loading && currentStage === 'watching_content' && (
          <button
            onClick={openMotivationalVideo}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 px-4 rounded-2xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
          >
            🎥 Watch Uplifting Content
          </button>
        )}

        {!loading && currentStage === 'feeling_lighter' && (
          <div className="text-center p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border-2 border-yellow-200">
            <Sun className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            <p className="text-yellow-700 font-semibold">Great progress! 🌟</p>
            <p className="text-sm text-yellow-600">
              You're on a beautiful healing journey
            </p>
          </div>
        )}
      </div>

      <div className="mt-6">
        <div className="flex justify-between text-xs text-gray-500 mb-2">
          <span>Progress</span>
          <span>{Math.round(((currentStageIndex + 1) / stages.length) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${((currentStageIndex + 1) / stages.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default StageProgress;
