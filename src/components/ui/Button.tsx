import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
}

const Button = ({ variant = 'primary', children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        'px-8 py-3 rounded-md transition-all duration-300',
        'border border-white/20 backdrop-blur-sm',
        'hover:border-[#1DD3B0] hover:shadow-[0_0_15px_rgba(29,211,176,0.3)]',
        'active:transform active:scale-95',
        'focus:outline-none focus:ring-2 focus:ring-[#1DD3B0]/50',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;