import React from 'react';
import TrustedBy from './TrustedBy';
import CompanyLogos from './CompanyLogos';
import { cn } from '@/utils/cn';
import { ArrowRight } from 'lucide-react';
import { scrollToSection } from '@/utils/smoothScroll';

const HeroActions = () => {
  const handleBookAudit = () => {
    scrollToSection('contact');
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleBookAudit}
        className={cn(
          "inline-flex items-center",
          "px-4 py-2",
          "rounded-xl",
          "bg-white/5 backdrop-blur-md",
          "border border-white/10",
          "text-sm font-medium text-white/90",
          "shadow-lg shadow-black/5",
          "transition-all duration-300",
          "hover:bg-white/8 hover:border-white/20",
          "focus:outline-none focus:ring-2 focus:ring-[#1DD3B0]/50"
        )}
      >
        <span className="flex items-center gap-2">
          Book AI Audit
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </button>
      <TrustedBy className="mt-6" />
      <CompanyLogos />
    </div>
  );
};

export default HeroActions;