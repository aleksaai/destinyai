import React from 'react';
import { cn } from '@/utils/cn';

interface GlassLabelProps {
  children: React.ReactNode;
  className?: string;
}

const GlassLabel = ({ children, className }: GlassLabelProps) => {
  return (
    <div
      className={cn(
        'inline-flex items-center',
        'px-4 py-1.5', // Slimmer padding
        'rounded-xl', // Less rounded corners (12px)
        'bg-white/5 backdrop-blur-md',
        'border border-white/10',
        'text-sm font-medium text-white/90',
        'shadow-lg shadow-black/5',
        'transition-all duration-300',
        'hover:bg-white/8 hover:border-white/20',
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassLabel;