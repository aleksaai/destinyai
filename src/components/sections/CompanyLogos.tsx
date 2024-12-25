import React from 'react';
import { cn } from '@/utils/cn';

const COMPANY_LOGOS = [
  {
    src: 'https://i.postimg.cc/rF2jJTzR/2.png',
    alt: 'Company Logo 1'
  },
  {
    src: 'https://i.postimg.cc/TYj9NsW7/3.png',
    alt: 'Company Logo 2'
  },
  {
    src: 'https://i.postimg.cc/g2YKCKVY/4.png',
    alt: 'Company Logo 3'
  },
  {
    src: 'https://i.postimg.cc/7ZmNwT9S/5.png',
    alt: 'Company Logo 4'
  }
];

const CompanyLogos = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-0">
      {/* Mobile layout - simple row */}
      <div className="md:hidden flex items-center justify-between">
        {COMPANY_LOGOS.map((logo, index) => (
          <div
            key={index}
            className="w-14 h-14 flex items-center justify-center"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-w-full max-h-full object-contain opacity-70"
            />
          </div>
        ))}
      </div>

      {/* Desktop layout with animations */}
      <div className="hidden md:flex items-center justify-center -space-x-16">
        {COMPANY_LOGOS.map((logo, index) => (
          <div
            key={index}
            className="w-64 h-24 flex items-center justify-center transition-opacity duration-300 hover:opacity-80"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-w-full max-h-full object-contain opacity-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyLogos;