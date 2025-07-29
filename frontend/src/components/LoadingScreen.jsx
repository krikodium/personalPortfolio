import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gray-950 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-gray-700 border-t-blue-500 rounded-full animate-spin mx-auto mb-8"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-blue-500">MK</span>
          </div>
        </div>
        <p className="text-gray-400 text-lg">Loading Portfolio...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;