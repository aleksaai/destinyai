import React from 'react';
import SectionLabel from '../../ui/SectionLabel';
import ContactForm from './ContactForm';
import ContactParticles from './ContactParticles';

const ContactSection = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden" id="contact">
      {/* Background spark effect */}
      <div 
        className="absolute w-[960px] h-[1px] -right-[40%] top-[55%] md:-right-[20%] md:top-[32%]"
        style={{
          background: 'linear-gradient(90deg, rgba(29,211,176,0.3) 0%, rgba(29,211,176,1) 20%, rgba(29,211,176,0.3) 100%)',
          boxShadow: '0 0 80px 30px rgba(29,211,176,0.6)',
          filter: 'blur(5px)',
          transform: 'rotate(-45deg)',
          opacity: 0.9
        }}
      />

      {/* Particles effect */}
      <div className="absolute inset-0 top-[40%] md:inset-0 md:top-0">
        <ContactParticles />
      </div>

      <div className="max-w-7xl mx-auto text-center relative">
        <SectionLabel label="Contact" />
        
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mt-8 mb-6">
          Get in touch!
        </h2>
        
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          We'd love to talk about how we can integrate AI into your business. Leave us a message and we'll get back to you within 24 hours to schedule an AI Audit!
        </p>

        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;