import React from 'react';
import Logo from './Logo';
import NavItems from './NavItems';
import { cn } from '@/utils/cn';
import { scrollToSection } from '@/utils/smoothScroll';

const Navbar = () => {
  const handleGetStarted = () => {
    scrollToSection('contact');
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50",
      "bg-transparent", // Remove solid background
      "px-6 py-4 md:py-4 md:top-[15px]"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Center logo on mobile */}
        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <Logo />
        </div>

        {/* Desktop-only elements */}
        <div className="hidden md:block">
          <NavItems />
        </div>
        <button
          onClick={handleGetStarted}
          className={cn(
            "hidden md:block",
            "px-4 py-2",
            "bg-black/30 backdrop-blur-sm",
            "border border-white/10",
            "rounded-xl",
            "text-sm font-medium text-white/90",
            "transition-all duration-300",
            "hover:bg-white/5 hover:border-white/20",
            "focus:outline-none focus:ring-2 focus:ring-[#1DD3B0]/50"
          )}
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;