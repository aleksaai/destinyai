import React from 'react';
import ServiceCard from './ServiceCard';
import { SERVICES_DATA } from './constants';
import SectionLabel from '../../ui/SectionLabel';

const ServiceGrid = () => {
  return (
    <>
      {/* Centered label and title for mobile */}
      <div className="mb-8 md:text-left text-center">
        <SectionLabel label="Services" />
      </div>
      
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-16 md:text-left text-center">
        Our Services
      </h2>
      
      {/* Mobile: Centered stack layout */}
      <div className="md:hidden space-y-12 text-center">
        {SERVICES_DATA.map((service, index) => (
          <ServiceCard key={index} {...service} isMobile={true} />
        ))}
      </div>

      {/* Desktop: Grid layout with dividers */}
      <div className="relative hidden md:grid md:grid-cols-2 gap-x-12">
        {/* Grid layout content remains the same */}
        <div className="absolute left-0 right-0 top-[-2px] h-[2px] bg-zinc-800" />
        <div className="absolute left-1/2 top-0 bottom-[-27px] w-[2px] bg-zinc-800" />
        <div className="absolute left-0 right-0 top-[calc(50%+25px)] h-[2px] bg-zinc-800" />
        <div className="absolute left-0 right-0 bottom-[-27px] h-[2px] bg-zinc-800" />
        
        <div className="pb-32">
          <ServiceCard {...SERVICES_DATA[0]} />
        </div>
        <div className="pb-32">
          <ServiceCard {...SERVICES_DATA[1]} />
        </div>
        <div className="-mt-10">
          <ServiceCard {...SERVICES_DATA[2]} />
        </div>
        <div className="-mt-10">
          <ServiceCard {...SERVICES_DATA[3]} />
        </div>
      </div>
    </>
  );
};

export default ServiceGrid;