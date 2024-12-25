import React from 'react';
import { Mic } from 'lucide-react';
import { cn } from '@/utils/cn';

interface VoiceIconProps {
  isActive: boolean;
}

export const VoiceIcon = ({ isActive }: VoiceIconProps) => {
  return (
    <div className="relative">
      {/* Glow effect */}
      <div 
        className={cn(
          "absolute -inset-4",
          "rounded-full",
          "bg-[#1DD3B0]/20",
          "blur-xl",
          "transition-opacity duration-300",
          isActive ? "opacity-100" : "opacity-0"
        )}
      />
      
      {/* Main icon container */}
      <div 
        className={cn(
          "relative",
          "w-24 h-24 rounded-full",
          "bg-[#141414]",
          "flex items-center justify-center",
          "transition-all duration-300",
          "border border-white/10",
          isActive && "transform scale-110 -translate-y-2",
          isActive && "shadow-lg shadow-[#1DD3B0]/20",
          isActive && "border-[#1DD3B0]/30"
        )}
      >
        <Mic 
          className={cn(
            "w-10 h-10",
            "transition-colors duration-300",
            isActive ? "text-[#1DD3B0]" : "text-white"
          )} 
        />
      </div>
    </div>
  );
};