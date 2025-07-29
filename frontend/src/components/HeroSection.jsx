import React, { useEffect, useState } from 'react';
import { ChevronDown, Code, Database, Smartphone } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Web Developer & Technology Enthusiast";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 z-10">
        <Code className="absolute top-20 left-10 text-blue-500/30 w-8 h-8 animate-bounce delay-500" />
        <Database className="absolute top-40 right-20 text-cyan-500/30 w-6 h-6 animate-bounce delay-1000" />
        <Smartphone className="absolute bottom-32 left-20 text-purple-500/30 w-7 h-7 animate-bounce delay-1500" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20 relative">
        <div className="space-y-8">
          {/* Profile Avatar */}
          <div className="mx-auto w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 p-1 mb-8 animate-fade-in">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
              <span className="text-4xl font-bold text-blue-400">MK</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Mateo Kriko</span>
            </h1>
            <div className="h-16 flex items-center justify-center">
              <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
                {typedText}
                <span className="animate-blink">|</span>
              </h2>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Building clean, scalable, and innovative solutions with modern technologies
          </p>

          {/* CTA Button */}
          <div className="pt-8">
            <Button 
              onClick={scrollToProjects}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              View My Projects
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="text-gray-400 w-8 h-8" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;