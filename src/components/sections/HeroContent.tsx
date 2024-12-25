import React from 'react';
import GlassLabel from '../ui/GlassLabel';

const HeroContent = () => {
  return (
    <div className="max-w-4xl mx-auto mt-[30px] px-4 md:px-0">
      <div className="flex justify-center mb-8">
        <GlassLabel>
          <span className="bg-[#171719]/30 px-3 py-1 rounded-lg border border-zinc-800">
            <span className="bg-gradient-to-r from-white via-[#1DD3B0] to-[#14A88C] bg-clip-text text-transparent font-semibold">#1</span>
          </span>
          <span className="ml-2.5">
            <span className="md:hidden">AI Automation Agency</span>
            <span className="hidden md:inline">AI Automation Agency in Europe</span>
          </span>
        </GlassLabel>
      </div>
      
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-tight">
        We elevate your business using{' '}
        <span className="text-gradient">
          <span className="text-5xl md:hidden">AI.</span>
          <span className="hidden md:inline">Artificial Intelligence.</span>
        </span>
      </h1>
      
      <p className="text-base md:text-xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
        We elevate and grow organizations using top-tier 
        Artificial Intelligence solutions.
      </p>
    </div>
  );
};

export default HeroContent;