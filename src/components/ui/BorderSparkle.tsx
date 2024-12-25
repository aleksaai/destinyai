import React from 'react';
import { cn } from '@/utils/cn';

interface BorderSparkleProps {
  className?: string;
  color?: string;
}

const BorderSparkle = ({ 
  className,
  color = '#1DD3B0'
}: BorderSparkleProps) => {
  return (
    <div 
      className={cn(
        'absolute inset-0 pointer-events-none',
        'rounded-[inherit]',
        className
      )}
      style={{
        '--spark-color': color
      } as React.CSSProperties}
    >
      {/* Idle sparkle effect */}
      <div className="absolute inset-0 rounded-[inherit]">
        <div className="absolute inset-0 animate-border-sparkle" />
      </div>
      
      {/* Hover tracer effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
        <div className="absolute inset-0 animate-border-trace" />
      </div>
    </div>
  );
};

export default BorderSparkle;