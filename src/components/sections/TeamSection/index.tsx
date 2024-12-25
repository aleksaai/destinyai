import React from 'react';
import SectionLabel from '../../ui/SectionLabel';
import TeamGrid from './TeamGrid';

const TeamSection = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden" id="team">
      <div className="max-w-7xl mx-auto">
        {/* Center aligned on mobile */}
        <div className="text-center md:text-left">
          <SectionLabel label="Team" />
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mt-8 mb-16">
            Meet the team
          </h2>
        </div>

        <TeamGrid />
      </div>
    </section>
  );
};

export default TeamSection;