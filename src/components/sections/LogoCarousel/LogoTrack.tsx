import React from 'react';
import { COMPANY_LOGOS } from './constants';
import { Logo } from './Logo';

export const LogoTrack = () => {
  return (
    <div className="flex animate-slide">
      {/* First set of logos */}
      <div className="flex items-center gap-8">
        {COMPANY_LOGOS.map((logo, index) => (
          <Logo key={`first-${index}`} {...logo} />
        ))}
      </div>
      
      {/* Second set of logos for seamless loop */}
      <div className="flex items-center gap-8">
        {COMPANY_LOGOS.map((logo, index) => (
          <Logo key={`second-${index}`} {...logo} />
        ))}
      </div>
    </div>
  );
};