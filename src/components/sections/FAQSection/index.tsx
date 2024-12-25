import React from 'react';
import SectionLabel from '../../ui/SectionLabel';
import FAQList from './FAQList';

const FAQSection = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden" id="faq">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1fr,2fr] gap-16">
          {/* Left column - Title - Centered on mobile */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <SectionLabel label="FAQ" />
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mt-8 mb-6">
              FAQ
            </h2>
            
            <p className="text-gray-400 max-w-lg mx-auto md:mx-0">
              We've gone ahead and answered the questions we're asked most often. Can't find what you're looking for? Feel free to reach out to us through the contact form above!
            </p>
          </div>

          {/* Right column - FAQ items - Center content on mobile */}
          <div className="flex justify-center md:justify-start w-full">
            <div className="w-full">
              <FAQList />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;