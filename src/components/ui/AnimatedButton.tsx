import React from 'react';
import { cn } from '@/utils/cn';
import ButtonBorder from './ButtonBorder';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  color?: string;
}

const AnimatedButton = ({ 
  children, 
  variant = 'primary',
  color = '#1DD3B0',
  className,
  ...props 
}: AnimatedButtonProps) => {
  return (
    <button
      className={cn(
        'relative px-8 py-3',
        'text-white font-medium',
        'group',
        'bg-black/40 backdrop-blur-sm',
        'rounded-md',
        'transition-all duration-300',
        'hover:shadow-[0_0_20px_rgba(29,211,176,0.15)]',
        'active:scale-[0.98]',
        'focus:outline-none focus:ring-2 focus:ring-[#1DD3B0]/50',
        className
      )}
      {...props}
    >
      <ButtonBorder color={color} />
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default AnimatedButton;