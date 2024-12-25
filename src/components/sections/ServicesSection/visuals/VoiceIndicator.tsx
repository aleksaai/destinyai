import React from 'react';
import { Mic } from 'lucide-react';
import { cn } from '@/utils/cn';

interface VoiceIndicatorProps {
  isActive: boolean;
}

export const VoiceIndicator = ({ isActive }: VoiceIndicatorProps) => {
  return (
    <div className="relative">
      {/* Outer ring */}
      <div 
        className={cn(
          "absolute -inset-8 rounded-full",
          "bg-gradient-to-r from-[#1DD3B0]/20 to-[#1DD3B0]/30",
          "transition-all duration-700",
          isActive ? "opacity-100 scale-100" : "opacity-0 scale-90"
        )}
      />
      
      {/* Middle ring */}
      <div 
        className={cn(
          "absolute -inset-4 rounded-full",
          "bg-gradient-to-r from-[#1DD3B0]/30 to-[#1DD3B0]/40",
          "transition-all duration-500 delay-100",
          isActive ? "opacity-100 scale-100" : "opacity-0 scale-90"
        )}
      />
      
      {/* Inner circle with icon */}
      <div 
        className={cn(
          "relative w-12 h-12 rounded-full",
          "bg-[#1DD3B0] flex items-center justify-center",
          "transition-transform duration-300",
          isActive && "scale-110"
        )}
      >
        <Mic className="w-5 h-5 text-black" />
      </div>
    </div>
  );
};