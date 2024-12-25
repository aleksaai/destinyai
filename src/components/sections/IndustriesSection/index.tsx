import React from 'react';
import SectionLabel from '../../ui/SectionLabel';
import IndustriesGrid from './IndustriesGrid';
import FeatureBoxes from './FeatureBoxes';
import { IndustryProvider } from './IndustryContext';
import IndustryParticles from './IndustryParticles';
import AnimatedIndustryLabel from './AnimatedIndustryLabel';

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <SectionLabel label="Industries" />
        
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mt-8 mb-6">
          Industries we work with
        </h2>
        
        <p className="text-sm text-gray-400 max-w-2xl mx-auto mb-16">
          We help businesses across various industries thrive with AI automation solutions.
        </p>

        <IndustryProvider>
          {/* Desktop view */}
          <div className="hidden md:block">
            <IndustriesGrid />
          </div>

          {/* Mobile view */}
          <div className="md:hidden">
            <AnimatedIndustryLabel />
          </div>

          <div className="mt-24">
            <FeatureBoxes />
          </div>
        </IndustryProvider>
      </div>
    </section>
  );
};

export default IndustriesSection;