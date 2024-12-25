import React from 'react';

interface IndustrySliderProps {
  activeIndex: number;
  total: number;
}

const IndustrySlider = ({ activeIndex, total }: IndustrySliderProps) => {
  // Calculate width based on 6 boxes (80px each) and 5 gaps (32px each)
  const totalWidth = (80 * 6) + (32 * 5); // 640px total

  return (
    <div className="flex justify-center items-center">
      <div className="relative h-[2px] w-[640px] bg-white/10">
        {/* Highlight */}
        <div 
          className="absolute top-0 h-full w-[80px] bg-gradient-to-r from-white via-[#1DD3B0] to-[#14A88C] rounded-full transition-all duration-300"
          style={{
            left: `${(activeIndex / (total - 1)) * (totalWidth - 80)}px`,
          }}
        />
      </div>
    </div>
  );
};

export default IndustrySlider;