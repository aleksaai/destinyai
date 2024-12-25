import React from 'react';
import { cn } from '@/utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge = ({ children, className }: BadgeProps) => {
  // Calculate width based on text length
  const getWidth = (text: string) => {
    const length = text.length;
    if (length <= 3) return 'w-16'; // For "CEO"
    if (length <= 9) return 'w-24'; // For "Developer"
    if (length <= 15) return 'w-32'; // For "Client Success"
    return 'w-40'; // For "Front End Designer"
  };

  return (
    <span 
      className={cn(
        "inline-flex items-center justify-center",
        "px-3 py-1.5",
        "rounded-xl",
        "bg-black/40 backdrop-blur-sm",
        "border border-white/10",
        "text-sm font-medium",
        "bg-gradient-to-r from-white via-[#1DD3B0] to-[#14A88C] bg-clip-text text-transparent",
        getWidth(children?.toString() || ''),
        className
      )}
    >
      {children}
    </span>
  );
};