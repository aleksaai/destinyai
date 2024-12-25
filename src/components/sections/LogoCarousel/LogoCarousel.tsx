import React from 'react';
import { LogoTrack } from './LogoTrack';

const LogoCarousel = () => {
  return (
    <div className="mt-16 text-center">
      <p className="text-sm text-gray-400 mb-6">Sie sind in guten Händen</p>
      
      <div className="relative overflow-hidden max-w-[600px] mx-auto">
        {/* No fade overlays - just the logo track */}
        <LogoTrack />
      </div>
    </div>
  );
};