import React from 'react';
import { cn } from '@/utils/cn';
import type { Industry } from './types';
import { useIndustryContext } from './IndustryContext';

interface IndustryBoxProps extends Industry {
  isActive: boolean;
  onClick: () => void;
}

const IndustryBox = ({ icon: Icon, title, isActive, onClick }: IndustryBoxProps) => {
  const { setSelectedIndustry } = useIndustryContext();

  const handleClick = () => {
    onClick();
    setSelectedIndustry(title);
  };

  return (
    <button
      className="flex flex-col items-center cursor-pointer"
      onClick={handleClick}
    >
      {/* Rest of the component remains the same */}
      <div className="w-[80px] aspect-square bg-[#0B0B0B]/40 rounded-xl border border-zinc-800/60 p-2">
        <div className={cn(
          "w-full h-full rounded-lg flex items-center justify-center relative z-10 transition-all duration-300 border border-zinc-800/60",
          isActive ? "bg-[#0D0D0D]" : "bg-[#0D0D0D]/60"
        )}>
          <Icon className={cn(
            "w-6 h-6 transition-all duration-300",
            isActive ? "text-white opacity-100 scale-110" : "text-white/70"
          )} />
        </div>
      </div>

      <span className={cn(
        "mt-2 text-[11px] font-medium truncate max-w-[80px]",
        isActive 
          ? "bg-gradient-to-r from-white via-[#1DD3B0] to-[#14A88C] bg-clip-text text-transparent"
          : "text-white/70"
      )}>
        {title}
      </span>
    </button>
  );
};

export default IndustryBox;