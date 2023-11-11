import React, { useEffect, useState } from 'react';

export default function Preloader() {
  const [loadingText, setLoadingText] = useState('Loading...');

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoadingText('Almost there...');
    }, 2000); // Set the delay time in milliseconds (e.g., 2000ms for 2 seconds)

    return () => clearTimeout(delay); // Clear the timeout on component unmount
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-16 h-16 mb-4 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-blue-500 rounded-full animate-pulse ring-4 ring-blue-300"></div>
        </div>
      </div>
      <p className="text-gray-500">{loadingText}</p>
    </div>
  );
}
