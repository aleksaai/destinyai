import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/utils/cn';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={cn(
        "rounded-xl border border-zinc-800",
        // Desktop-specific styles
        "md:bg-[#0D0D0D] md:hover:bg-[#0F0F0F]",
        "transition-all duration-300",
        "hover:shadow-lg",
        isOpen && "shadow-xl shadow-black/20",
        "transform perspective-1000",
        isOpen && "translate-y-[-2px]"
      )}
      style={{
        boxShadow: isOpen ? '0 8px 24px rgba(29, 211, 176, 0.08)' : undefined,
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 flex items-center justify-between"
      >
        <span className="text-lg text-white font-medium text-left">{question}</span>
        
        {/* Arrow icon - desktop only */}
        <ChevronDown 
          className={cn(
            "hidden md:block w-5 h-5 text-[#1DD3B0] transition-transform duration-300",
            isOpen && "transform rotate-180"
          )} 
        />
      </button>
      
      {isOpen && (
        <div 
          className={cn(
            "px-8 pb-6 text-gray-400 leading-relaxed text-left",
            "animate-in fade-in slide-in-from-top-1 duration-300"
          )}
        >
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;