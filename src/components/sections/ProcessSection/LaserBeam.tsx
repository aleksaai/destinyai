import React, { useState } from 'react';
import { cn } from '@/utils/cn';

const LaserBeam = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 z-0 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main beam with gradient */}
      <div 
        className="absolute inset-0 transition-all duration-300"
        style={{
          background: `
            linear-gradient(
              to right,
              transparent,
              rgba(29, 211, 176, ${isHovered ? '0.4' : '0.2'}) 20%,
              rgba(29, 211, 176, ${isHovered ? '1' : '0.8'}) 50%,
              rgba(29, 211, 176, ${isHovered ? '0.4' : '0.2'}) 80%,
              transparent
            )
          `,
          boxShadow: `0 0 ${isHovered ? '30px' : '20px'} rgba(29, 211, 176, ${isHovered ? '0.6' : '0.4'})`,
          height: isHovered ? '3px' : '2px'
        }}
      />
      
      {/* Center glow */}
      <div 
        className={cn(
          "absolute left-1/2 -translate-x-1/2 transition-all duration-300",
          isHovered ? 'w-40' : 'w-32'
        )}
        style={{
          background: `rgba(29, 211, 176, ${isHovered ? '1' : '0.8'})`,
          boxShadow: `0 0 ${isHovered ? '40px' : '30px'} rgba(29, 211, 176, ${isHovered ? '1' : '0.8'})`,
          height: isHovered ? '4px' : '3px',
          filter: 'blur(1px)'
        }}
      />
    </div>
  );
};

export default LaserBeam;