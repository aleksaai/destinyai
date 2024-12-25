import React from 'react';

interface ButtonBorderProps {
  color?: string;
}

const ButtonBorder = ({ color = '#1DD3B0' }: ButtonBorderProps) => {
  return (
    <>
      {/* Static border */}
      <div className="absolute inset-0 rounded-md border border-white/10" />

      {/* Animated borders */}
      <div className="absolute inset-0 rounded-md">
        {/* Top border */}
        <div className="absolute -top-[1px] left-0 h-[2px] w-[8px] bg-[--btn-color] animate-spark-horizontal" />
        
        {/* Right border */}
        <div className="absolute top-0 -right-[1px] w-[2px] h-[8px] bg-[--btn-color] animate-spark-vertical" />
        
        {/* Bottom border */}
        <div className="absolute -bottom-[1px] right-0 h-[2px] w-[8px] bg-[--btn-color] animate-spark-horizontal-reverse" />
        
        {/* Left border */}
        <div className="absolute bottom-0 -left-[1px] w-[2px] h-[8px] bg-[--btn-color] animate-spark-vertical-reverse" />

        {/* Hover effect - full border trace */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 rounded-md border-2 border-[--btn-color] animate-border-glow" />
        </div>
      </div>
    </>
  );
};

export default ButtonBorder;