import React from 'react';
import { cn } from '@/utils/cn';

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-[30px] md:mt-0">
      <img 
        src="https://i.postimg.cc/PqpYjH04/destiny-media-green-white.png" 
        alt="Destiny AI Logo" 
        className={cn(
          "w-auto transition-all duration-300",
          "h-8 md:h-8" // Increased mobile height to match desktop
        )}
      />
    </div>
  );
};

export default Logo;