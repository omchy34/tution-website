import React, { useState, useEffect } from 'react';
import { 
  Users, 
  TrendingUp, 
  Award, 
  Sparkles, 
  ArrowRight, 
  Play, 
  BookOpen, 
  Target, 
  Star 
} from 'lucide-react';

// Enhanced Hero Section with Tuition Image
const HeroSection = ({ navigate }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ 
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <div className="w-1 h-1 bg-white rounded-full opacity-30"></div>
          </div>
        ))}
        
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full filter blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/30 to-indigo-500/30 rounded-full filter blur-3xl animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            animationDelay: '1s'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className={`text-white space-y-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-blue-300" />
              <span className="text-blue-300 font-medium">Welcome to the Future of Education</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block">We Ensure</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400">
                  Better Education
                </span>
                <span className="block">for a Better World</span>
              </h1>
            </div>
            
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
              Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in their academic journey and beyond.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate && navigate('/programs')}
                className="group bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 relative overflow-hidden"
              >
                <span className="relative z-10">Explore Programs</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Watch Demo</span>
              </button>
            </div>

            <div className="flex flex-wrap gap-6 pt-8">
              {['Live Classes Available', 'Expert Faculty', 'Proven Results'].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Tuition Image with Glass Effect */}
          <div className={`relative transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl overflow-hidden group hover:bg-white/15 transition-all duration-300">
              
              {/* Optional: Floating elements around the image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
              
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* Placeholder for your tuition image */}
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <img src="" alt="" />
                  </div>
                </div>
                
                {/* Overlay gradient for better text readability if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Optional: Quick stats or info overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium">
                  <Users className="w-4 h-4 inline mr-2" />
                  5000+ Students
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium">
                  <Star className="w-4 h-4 inline mr-2" />
                  95% Success Rate
                </div>
              </div>

              {/* Call to action at bottom */}
              <div className="mt-6 text-center">
                <button
                  onClick={() => navigate && navigate('/gallery')}
                  className="text-blue-300 hover:text-white transition-colors font-medium flex items-center justify-center space-x-2 mx-auto group"
                >
                  <span>View More Photos</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
          <span className="text-xs">Scroll Down</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;