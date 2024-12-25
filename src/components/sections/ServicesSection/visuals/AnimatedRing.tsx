import React from 'react';
import { cn } from '@/utils/cn';

interface AnimatedRingProps {
  isActive: boolean;
}

export const AnimatedRing = ({ isActive }: AnimatedRingProps) => {
  return (
    <>
      {/* Outer ring */}
      <div 
        className={cn(
          "absolute -inset-12",
          "rounded-full",
          "bg-gradient-to-r from-[#1DD3B0]/20 to-[#1DD3B0]/30",
          "transition-all duration-700",
          "animate-pulse",
          isActive ? "opacity-100 scale-100" : "opacity-0 scale-90"
        )}
      />
      
      {/* Middle ring */}
      <div 
        className={cn(
          "absolute -inset-8",
          "rounded-full",
          "bg-gradient-to-r from-[#1DD3B0]/30 to-[#1DD3B0]/40",
          "transition-all duration-500 delay-100",
          "animate-pulse",
          isActive ? "opacity-100 scale-100" : "opacity-0 scale-90"
        )}
      />
      
      {/* Inner ring */}
      <div 
        className={cn(
          "absolute -inset-4",
          "rounded-full",
          "bg-gradient-to-r from-[#1DD3B0]/40 to-[#1DD3B0]/50",
          "transition-all duration-300 delay-200",
          "animate-pulse",
          isActive ? "opacity-100 scale-100" : "opacity-0 scale-90"
        )}
      />
    </>
  );
};