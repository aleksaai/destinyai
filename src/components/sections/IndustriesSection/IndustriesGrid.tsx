import React, { useState } from 'react';
import { INDUSTRIES_DATA } from './constants';
import IndustryBox from './IndustryBox';
import IndustrySlider from './IndustrySlider';

const IndustriesGrid = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-6">
      {/* Grid with adjusted gap */}
      <div className="flex justify-center gap-8">
        {INDUSTRIES_DATA.map((industry, index) => (
          <IndustryBox
            key={industry.title}
            {...industry}
            isActive={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
      
      <IndustrySlider activeIndex={activeIndex} total={INDUSTRIES_DATA.length} />
    </div>
  );
};

export default IndustriesGrid;