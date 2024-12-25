import React from 'react';
import { cn } from '@/utils/cn';

interface GradientBorderProps {
  isActive: boolean;
}

export const GradientBorder = ({ isActive }: GradientBorderProps) => {
  return (
    <>
      {/* Static border */}
      <div 
        className="absolute inset-0 rounded-lg border border-[#1DD3B0]/20"
      />
      
      {/* Animated gradient border */}
      <div
        className={cn(
          'absolute inset-0',
          'rounded-lg',
          'transition-opacity duration-300',
          'bg-gradient-to-r from-[#1DD3B0] via-[#1DD3B0]/80 to-[#1DD3B0]',
          'p-[1px]',
          isActive ? 'opacity-100' : 'opacity-0'
        )}
      >
        <div className="w-full h-full bg-black rounded-lg" />
      </div>
    </>
  );
};