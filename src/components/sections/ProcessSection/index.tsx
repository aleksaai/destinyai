import React from 'react';
import SectionLabel from '../../ui/SectionLabel';
import ProcessContent from './ProcessContent';

const ProcessSection = () => {
  return (
    <section id="process" className="py-32 px-6 relative">
      {/* Background gradient */}
      <div 
        className="absolute -right-[20%] top-[10%] w-[800px] h-[800px]"
        style={{
          background: 'radial-gradient(circle at center, rgba(29,211,176,0.15) 0%, rgba(29,211,176,0.05) 35%, rgba(0,0,0,0) 70%)',
          transform: 'rotate(10deg)',
          filter: 'blur(60px)',
          opacity: 0.7
        }}
      />
      
      <div className="max-w-7xl mx-auto">
        {/* Center label and title on mobile */}
        <div className="text-center md:text-left">
          <SectionLabel label="Process" />
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mt-8 mb-8">
            Our process
          </h2>
        </div>
        <ProcessContent />
      </div>
    </section>
  );
}

export default ProcessSection;