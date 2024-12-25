import React from 'react';
import { Star } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Star className="w-6 h-6 text-[#1DD3B0]" />
          <span className="text-white text-xl font-semibold">Destiny AI</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          {['Services', 'Process', 'Industries', 'Pricing', 'Team', 'Contact', 'FAQ'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <button className="px-4 py-2 border border-white text-white rounded hover:bg-[#1DD3B0]/10 hover:border-[#1DD3B0] transition-all duration-300">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;