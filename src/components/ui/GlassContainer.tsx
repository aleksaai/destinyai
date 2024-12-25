import React from 'react';
import { cn } from '@/utils/cn';

interface GlassContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high';
}

const GlassContainer = ({ 
  children, 
  intensity = 'medium', 
  className,
  ...props 
}: GlassContainerProps) => {
  const intensityMap = {
    low: 'bg-opacity-5 backdrop-blur-[4px]',
    medium: 'bg-opacity-10 backdrop-blur-[8px]',
    high: 'bg-opacity-15 backdrop-blur-[12px]'
  };

  return (
    <div 
      className={cn(
        'bg-black/30 border border-white/10',
        'rounded-xl px-6 py-2',
        'backdrop-blur-md',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassContainer;