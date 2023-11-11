import React from 'react';

export default function Preloader() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-16 h-16 animate-spin">
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full h-16 w-16 border-t-4 border-b-4 border-transparent"></div>
      </div>
    </div>
  );
}
