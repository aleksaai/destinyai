import React from 'react';
import ServiceGrid from './ServiceGrid';

const ServicesSection = () => {
  return (
    <section id="services" className="pt-32 pb-32 px-6 relative">
      {/* Background blur effect - brighter version */}
      <div className="absolute -left-[20%] -top-[20%] w-[800px] h-[800px]" style={{
        background: 'radial-gradient(circle at center, rgba(29,211,176,0.25) 0%, rgba(29,211,176,0.08) 35%, rgba(0,0,0,0) 70%)',
        transform: 'rotate(10deg)',
        filter: 'blur(60px)',
        opacity: 0.7
      }} />
      
      <div className="max-w-7xl mx-auto relative">
        <ServiceGrid />
      </div>
    </section>
  );
};

export default ServicesSection;