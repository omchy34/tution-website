import React, { useState, useEffect } from 'react';
import Logo from "../assets/Logo.jpg"

const Preloader = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          setTimeout(() => {
            onLoadComplete();
          }, 500);
          return 100;
        }
        return prevProgress + 2;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onLoadComplete]);

  if (isComplete) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-violet-700">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-64 h-64 bg-blue-400 rounded-full opacity-20 animate-pulse -top-32 -left-32"></div>
        <div className="absolute w-96 h-96 bg-purple-400 rounded-full opacity-20 animate-pulse -bottom-48 -right-48"></div>
        <div className="absolute w-32 h-32 bg-violet-400 rounded-full opacity-30 animate-bounce top-1/4 right-1/4"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center">
        {/* Logo container */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl">
            
      
            <img 
              src={Logo} 
              alt="Logo" 
              className="w-18 h-18 object-contain"
            />
            
            {/* OPTION 2: Use a different icon (Education theme) */}
            {/* Current: Education/Graduation cap icon */}
            {/* <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
              </svg>
            </div> */}
            
            {/* OPTION 3: Use initials or text */}
            {/* Uncomment this and replace 'YL' with your initials */}
            {/* 
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">YL</span>
            </div>
            */}
            
            {/* OPTION 4: Book icon (another education theme) */}
            {/* Uncomment this to use book icon instead */}
            {/* 
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            */}
          </div>
        </div>

        {/* Loading text */}
        <h2 className="text-white text-2xl font-bold mb-8 animate-pulse">
          Loading...
        </h2>

        {/* Progress bar */}
        <div className="w-80 max-w-md mx-auto">
          <div className="bg-white bg-opacity-20 rounded-full h-2 mb-4 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-400 to-purple-400 h-full rounded-full transition-all duration-300 ease-out shadow-lg"
              style={{ width: `${progress}%` }}
            >
              <div className="h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
            </div>
          </div>
          
          {/* Progress percentage */}
          <div className="text-white text-sm font-medium">
            {Math.round(progress)}%
          </div>
        </div>

        {/* Loading dots animation */}
        <div className="flex justify-center mt-6 space-x-2">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;