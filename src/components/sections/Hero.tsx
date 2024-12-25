import React from 'react';
import HeroContent from './HeroContent';
import HeroActions from './HeroActions';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import ParticleSystem from '../particles/ParticleSystem';

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Particle container */}
        <div className="absolute inset-0">
          <ParticleSystem />
        </div>
        
        {/* Hero content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6 z-10">
          <div className="mt-[75px]">
            <HeroContent />
            <HeroActions />
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <main>
        <AboutSection />
        <ServicesSection />
      </main>
    </>
  );
};

export default Hero;