import React from 'react';
import { cn } from '@/utils/cn';

interface TranscriptProps {
  isVisible: boolean;
}

export const Transcript = ({ isVisible }: TranscriptProps) => {
  return (
    <div 
      className={cn(
        "w-full",
        "transition-all duration-300",
        "p-3 rounded-lg",
        "bg-[#0F0F0F]",
        "border border-white/5",
        isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
      )}
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="w-1.5 h-1.5 rounded-full bg-[#1DD3B0]" />
        <span className="text-xs text-[#1DD3B0]">Live Transcript</span>
      </div>
      <p className="text-sm text-white">
        I'd like to assist you with setting up the new automation workflow...
      </p>
    </div>
  );
};