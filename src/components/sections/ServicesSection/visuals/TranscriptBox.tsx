import React from 'react';
import { cn } from '@/utils/cn';

interface TranscriptBoxProps {
  children: React.ReactNode;
  isVisible: boolean;
}

export const TranscriptBox = ({ children, isVisible }: TranscriptBoxProps) => {
  return (
    <div 
      className={cn(
        "p-4 rounded-xl bg-[#0F0F0F]",
        "transition-all duration-300",
        isVisible 
          ? "opacity-100 transform translate-y-0" 
          : "opacity-0 transform translate-y-4"
      )}
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="w-2 h-2 rounded-full bg-[#1DD3B0]" />
        <span className="text-xs text-[#1DD3B0]">Transcript</span>
      </div>
      <p className="text-sm text-white/90">{children}</p>
    </div>
  );
};