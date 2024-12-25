import React from 'react';

const COMPANY_LOGOS = [
  {
    src: 'https://i.postimg.cc/8Ct3qRQW/45.png',
    alt: 'Company Logo 1'
  },
  {
    src: 'https://i.postimg.cc/76hcD5wR/42.png',
    alt: 'Company Logo 2'
  },
  {
    src: 'https://i.postimg.cc/sXLL232g/41.png',
    alt: 'Company Logo 3'
  },
  {
    src: 'https://i.postimg.cc/wxC6fpkz/38.png',
    alt: 'Company Logo 4'
  }
];

const LogoCarousel = () => {
  return (
    <div className="mt-16 text-center">
      <p className="text-sm text-gray-400 mb-6">Sie sind in guten Händen</p>
      
      <div className="relative overflow-hidden max-w-lg mx-auto">
        {/* Fade overlay with smoother gradients */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute left-0 w-24 h-full bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute right-0 w-24 h-full bg-gradient-to-l from-black via-black/80 to-transparent" />
        </div>
        
        {/* Animated logo track */}
        <div className="flex animate-slide">
          {/* First set of logos */}
          <div className="flex items-center gap-12 px-8">
            {COMPANY_LOGOS.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="w-48 h-24 flex-shrink-0 flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            ))}
          </div>
          
          {/* Second set of logos for seamless loop */}
          <div className="flex items-center gap-12 px-8">
            {COMPANY_LOGOS.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="w-48 h-24 flex-shrink-0 flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;