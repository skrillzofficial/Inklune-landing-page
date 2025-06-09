import React from 'react';

const CommunityModal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* Modal Container */}
      <div className="relative bg-white rounded-lg shadow-xl p-6 mx-4 w-full max-w-md">
        {/* Close button (top-right) */}
        <button 
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        
        {/* Modal Content */}
        <div className="flex flex-col items-center text-center gap-4">
          <h1 className="text-lg md:text-xl font-semibold text-gray-800">
            Want to join the conversation?
          </h1>
          
          <p className="text-sm md:text-base text-gray-600">
            Create a free account to like posts, reply, and meet other thoughtful writers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <button 
              className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white text-sm md:text-base rounded-full transition-colors"
            >
              Create Account
            </button>
            
            <button 
              className="w-full py-2 px-4 border border-purple-600 text-purple-600 hover:bg-purple-50 text-sm md:text-base rounded-full transition-colors"
            >
              Sign In
            </button>
          </div>
          
          <button 
            onClick={closeModal}
            className="mt-2 text-sm text-gray-500 hover:text-gray-700 underline"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityModal;