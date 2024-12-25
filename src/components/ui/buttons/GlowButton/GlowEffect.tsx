import React from 'react';
import { cn } from '@/utils/cn';

interface GlowEffectProps {
  isActive: boolean;
}

export const GlowEffect = ({ isActive }: GlowEffectProps) => {
  return (
    <div
      className={cn(
        'absolute inset-0',
        'rounded-lg',
        'transition-opacity duration-300',
        'before:absolute before:inset-0',
        'before:rounded-lg before:blur-xl',
        'before:bg-gradient-to-r',
        'before:from-[#1DD3B0]/40',
        'before:via-[#1DD3B0]/60',
        'before:to-[#1DD3B0]/40',
        isActive ? 'opacity-100' : 'opacity-0'
      )}
    />
  );
};