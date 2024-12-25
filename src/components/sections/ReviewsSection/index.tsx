import React from 'react';
import SectionLabel from '../../ui/SectionLabel';
import ReviewGrid from './ReviewGrid';

const ReviewsSection = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden" id="reviews">
      {/* Background blur effect */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(29,211,176,0.15) 0%, rgba(29,211,176,0.05) 35%, rgba(0,0,0,0) 70%)',
          filter: 'blur(60px)',
          opacity: 0.7
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center">
          <SectionLabel label="Reviews" />
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mt-8 mb-6">
            Here's what our clients say
          </h2>
          
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            Hear the success stories of the businesses we have helped thrive with AI.
          </p>
        </div>

        <ReviewGrid />
      </div>
    </section>
  );
};

export default ReviewsSection;