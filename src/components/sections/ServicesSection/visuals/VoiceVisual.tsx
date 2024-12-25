import React, { useState } from 'react';
import { VoiceLabel } from './VoiceLabel';
import { VoiceIcon } from './VoiceIcon';
import { Transcript } from './Transcript';
import { VoiceLines } from './VoiceLines';

const VoiceVisual = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="h-[280px] relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background container for lines */}
      <div className="absolute inset-0">
        <VoiceLines />
      </div>
      
      {/* Content container with absolute positioning for perfect centering */}
      <div className="absolute inset-0 flex flex-col">
        {/* Top section - Label (always visible now) */}
        <div className="h-16 relative">
          <VoiceLabel isVisible={true} />
        </div>
        
        {/* Middle section - Icon (perfectly centered) */}
        <div className="flex-1 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <VoiceIcon isActive={isHovered} />
          </div>
        </div>
        
        {/* Bottom section - Transcript */}
        <div className="h-24 px-4">
          <Transcript isVisible={isHovered} />
        </div>
      </div>
    </div>
  );
};

export default VoiceVisual;