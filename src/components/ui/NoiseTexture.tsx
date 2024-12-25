import React from 'react';

const NoiseTexture = () => {
  return (
    <div 
      className="absolute inset-0 mix-blend-soft-light pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        opacity: 0.25,
        filter: 'contrast(320%) brightness(100%)',
        backgroundSize: '256px 256px',
      }}
    />
  );
};

export default NoiseTexture;