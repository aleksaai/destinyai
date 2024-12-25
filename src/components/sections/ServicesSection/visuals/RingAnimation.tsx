import React from 'react';
import { cn } from '@/utils/cn';

interface RingAnimationProps {
  isActive: boolean;
}

export const RingAnimation = ({ isActive }: RingAnimationProps) => {
  return (
    <div className="absolute inset-0">
      {/* Outer ring */}
      <div 
        className={cn(
          "absolute -inset-8",
          "rounded-full",
          "bg-[#1DD3B0]/10",
          "transition-all duration-500",
          isActive ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}
      />
      
      {/* Inner ring */}
      <div 
        className={cn(
          "absolute -inset-4",
          "rounded-full",
          "bg-[#1DD3B0]/20",
          "transition-all duration-300 delay-100",
          isActive ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}
      />
    </div>
  );
};