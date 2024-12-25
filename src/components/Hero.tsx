import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center px-6 py-32 md:py-48">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          We elevate your business using Artificial Intelligence.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          We elevate and grow organizations using top-tier Artificial Intelligence solutions.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-3 border border-white text-white rounded-md hover:bg-[#1DD3B0]/10 hover:border-[#1DD3B0] transition-all duration-300">
            Our services
          </button>
          <button className="px-8 py-3 border border-white text-white rounded-md hover:bg-[#1DD3B0]/10 hover:border-[#1DD3B0] transition-all duration-300 flex items-center gap-2">
            Book a call
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;