import React from 'react';
import type { CompanyLogo } from './types';

export const Logo = ({ src, alt }: CompanyLogo) => {
  return (
    <div className="w-64 h-32 flex-shrink-0 flex items-center justify-center">
      <img
        src={src}
        alt={alt}
        className="max-w-[85%] max-h-[85%] object-contain opacity-60 hover:opacity-100 transition-opacity duration-500"
        style={{
          willChange: 'opacity',
          backfaceVisibility: 'hidden'
        }}
      />
    </div>
  );
};