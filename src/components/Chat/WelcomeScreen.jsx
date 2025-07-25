import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

const WelcomeScreen = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Meet Calmi
            </h1>
            <p className="text-gray-600">
              Your gentle wellness companion
            </p>
          </div>

          <div className="mb-8 space-y-4">
            <div className="flex items-center space-x-3">
              <Sparkles className="w-5 h-5 text-purple-500" />
              <span className="text-gray-700">Share how you're feeling</span>
            </div>
            <div className="flex items-center space-x-3">
              <Sparkles className="w-5 h-5 text-blue-500" />
              <span className="text-gray-700">Get gentle support & guidance</span>
            </div>
            <div className="flex items-center space-x-3">
              <Sparkles className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">Progress through healing stages</span>
            </div>
          </div>

          <button
            onClick={onStart}
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-4 px-8 rounded-2xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Start Your Wellness Journey
          </button>

          <p className="text-xs text-gray-500 mt-4">
            Private & anonymous • No data stored
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
