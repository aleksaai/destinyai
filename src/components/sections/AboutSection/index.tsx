import React from 'react';
import AboutLabel from './AboutLabel';
import AboutContent from './AboutContent';

const AboutSection = () => {
  return (
    <div className="flex flex-col items-center mt-20"> {/* Added mt-20 for 20px top margin */}
      <AboutLabel />
      <AboutContent />
    </div>
  );
};

export default AboutSection;