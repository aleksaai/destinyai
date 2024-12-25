import React from 'react';
import { cn } from '@/utils/cn';

interface GraphProps {
  data: number[];
  highlightIndex: number;
  className?: string;
}

export const Graph = ({ 
  data, 
  highlightIndex,
  className 
}: GraphProps) => {
  return (
    <div className={cn("flex items-end gap-2 h-20", className)}>
      {data.map((height, i) => (
        <div
          key={i}
          className={cn(
            "flex-1 rounded-t transition-colors duration-300",
            i === highlightIndex 
              ? "bg-gradient-to-t from-[#1DD3B0]/40 to-[#1DD3B0]" 
              : "bg-white/10"
          )}
          style={{ height: `${height}%` }}
        />
      ))}
    </div>
  );
};