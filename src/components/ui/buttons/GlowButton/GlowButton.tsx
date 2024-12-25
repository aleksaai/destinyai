import React from 'react';
import { cn } from '@/utils/cn';
import { ArrowRight } from 'lucide-react';
import { GlowEffect } from './GlowEffect';
import { GradientBorder } from './GradientBorder';
import { useGlowAnimation } from './useGlowAnimation';
import type { GlowButtonProps } from './types';

const GlowButton = ({ 
  children, 
  withArrow = true,
  className,
  ...props 
}: GlowButtonProps) => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = useGlowAnimation();

  return (
    <button
      className={cn(
        'group relative',
        'px-8 py-4',
        'bg-black/40 backdrop-blur-sm',
        'rounded-lg',
        'transition-all duration-300',
        'hover:scale-[1.02] active:scale-[0.98]',
        'focus:outline-none focus:ring-2 focus:ring-[#1DD3B0]/50',
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <GlowEffect isActive={isHovered} />
      <GradientBorder isActive={isHovered} />
      
      <span className="relative flex items-center justify-center gap-2 text-white font-medium">
        {children}
        {withArrow && (
          <ArrowRight 
            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
          />
        )}
      </span>
    </button>
  );
};

export default GlowButton;