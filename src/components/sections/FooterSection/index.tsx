import React from 'react';
import FooterColumns from './FooterColumns';
import FooterBottom from './FooterBottom';

const FooterSection = () => {
  return (
    <footer className="relative mt-32">
      {/* Glass container */}
      <div className="relative px-4 md:px-6 pt-16 pb-8 bg-[#0D0D0D]/80 backdrop-blur-md border-t border-zinc-800">
        {/* Glow effect */}
        <div 
          className="absolute -top-[150px] left-1/2 -translate-x-1/2 w-[500px] h-[300px]"
          style={{
            background: 'radial-gradient(circle at center, rgba(29,211,176,0.15) 0%, rgba(29,211,176,0.05) 35%, rgba(0,0,0,0) 70%)',
            filter: 'blur(60px)',
            opacity: 0.7
          }}
        />

        <div className="max-w-7xl mx-auto">
          <FooterColumns />
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;