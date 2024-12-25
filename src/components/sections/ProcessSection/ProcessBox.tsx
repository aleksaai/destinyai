import React from 'react';
import { Bot } from 'lucide-react';
import { cn } from '@/utils/cn';

interface ProcessBoxProps {
  size?: 'small' | 'large' | 'tiny';
  label?: string;
  customIcon?: string;
  iconSize?: 'normal' | 'large' | 'xlarge';
  isMiddle?: boolean;
}

const ProcessBox = ({ 
  size = 'large', 
  label = 'Make', 
  customIcon,
  iconSize = 'normal',
  isMiddle = false
}: ProcessBoxProps) => {
  const sizeClasses = {
    large: 'w-36 h-36',
    small: 'w-28 h-28',
    tiny: 'w-20 h-20'
  };

  const innerBoxClasses = {
    large: 'h-14',
    small: 'h-10',
    tiny: 'h-8'
  };

  const iconClasses = {
    large: {
      normal: 'w-6 h-6',
      large: 'w-8 h-8',
      xlarge: 'w-10 h-10'
    },
    small: {
      normal: 'w-4 h-4',
      large: 'w-6 h-6',
      xlarge: 'w-8 h-8'
    },
    tiny: {
      normal: 'w-3 h-3',
      large: 'w-4 h-4',
      xlarge: 'w-5 h-5'
    }
  };

  const textClasses = {
    large: 'text-sm',
    small: 'text-xs',
    tiny: 'text-[10px]'
  };

  return (
    <div 
      className={cn(
        "bg-[#0D0D0D]/40 rounded-lg border border-zinc-800 p-2 flex flex-col justify-between",
        sizeClasses[size],
        isMiddle && "transition-all duration-300 hover:transform hover:scale-110 hover:rotate-2 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#1DD3B0]/10",
        isMiddle && "hover:border-[#1DD3B0]/30"
      )}
    >
      <div className={cn(
        "bg-[#0F0F0F] rounded-lg border border-zinc-800 flex items-center justify-center",
        innerBoxClasses[size],
        isMiddle && "transition-all duration-300 group-hover:border-[#1DD3B0]/20"
      )}>
        {customIcon ? (
          <img 
            src={customIcon} 
            alt={label} 
            className={cn("object-contain", iconClasses[size][iconSize])} 
          />
        ) : (
          <Bot className={cn("text-white", iconClasses[size][iconSize])} />
        )}
      </div>
      
      <div className={cn(
        "bg-[#0F0F0F] rounded-lg border border-zinc-800 flex items-center justify-center",
        innerBoxClasses[size],
        isMiddle && "transition-all duration-300 group-hover:border-[#1DD3B0]/20"
      )}>
        <span className={cn("text-white", textClasses[size])}>{label}</span>
      </div>
    </div>
  );
};

export default ProcessBox;