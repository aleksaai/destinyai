import React from 'react';
import { cn } from '@/utils/cn';
import { ArrowRight } from 'lucide-react';

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  withArrow?: boolean;
}

const GlowButton = ({ children, withArrow = false, className, ...props }: GlowButtonProps) => {
  return (
    <button
      className={cn(
        // Base styles
        'relative px-8 py-4 text-white font-medium',
        'bg-[#6C3CE9] rounded-lg',
        'transition-all duration-300',
        
        // Glow effects
        'before:absolute before:inset-0',
        'before:bg-[#6C3CE9]/50 before:rounded-lg',
        'before:blur-xl before:transition-all before:duration-300',
        'before:opacity-0 hover:before:opacity-100',
        
        // Shadow and hover effects
        'shadow-[0_0_20px_rgba(108,60,233,0.3)]',
        'hover:shadow-[0_0_25px_rgba(108,60,233,0.5)]',
        'hover:scale-[1.02]',
        'active:scale-[0.98]',
        
        // Focus styles
        'focus:outline-none focus:ring-2',
        'focus:ring-[#6C3CE9]/50 focus:ring-offset-2',
        'focus:ring-offset-black',
        
        className
      )}
      {...props}
    >
      <span className="relative flex items-center justify-center gap-2">
        {children}
        {withArrow && (
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        )}
      </span>
    </button>
  );
};

export default GlowButton;