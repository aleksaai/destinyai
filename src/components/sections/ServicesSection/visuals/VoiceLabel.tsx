import React from 'react';
import { Sparkles } from 'lucide-react';
import { cn } from '@/utils/cn';

interface VoiceLabelProps {
  isVisible: boolean;
}

export const VoiceLabel = ({ isVisible }: VoiceLabelProps) => {
  return (
    <div 
      className={cn(
        "absolute top-4 left-1/2 -translate-x-1/2",
        "transition-all duration-300",
        "flex items-center gap-2 px-3 py-1.5",
        "rounded-lg bg-black/40 backdrop-blur-sm",
        "border border-white/10",
        isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-4"
      )}
    >
      <Sparkles className="w-3.5 h-3.5 text-[#1DD3B0]" />
      <span className="text-sm bg-gradient-to-r from-white via-[#1DD3B0] to-[#14A88C] bg-clip-text text-transparent">
        Voice Assistant
      </span>
    </div>
  );
};