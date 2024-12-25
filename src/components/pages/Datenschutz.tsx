import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/utils/cn';
import NoiseTexture from '../ui/NoiseTexture';
import ImpressumParticles from './ImpressumParticles';
import PrivacySection from './PrivacySection';
import { PRIVACY_SECTIONS } from './privacyData';

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-[#080808] text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Gradient effects */}
        <div 
          className="absolute top-[10%] right-[10%] w-[800px] h-[800px]" 
          style={{
            background: 'radial-gradient(circle at center, rgba(29,211,176,0.15) 0%, rgba(29,211,176,0.05) 35%, rgba(0,0,0,0) 70%)',
            filter: 'blur(60px)',
            opacity: 0.7
          }}
        />
        <div 
          className="absolute -left-[20%] top-[40%] w-[600px] h-[600px]" 
          style={{
            background: 'radial-gradient(circle at center, rgba(29,211,176,0.1) 0%, rgba(29,211,176,0.03) 35%, rgba(0,0,0,0) 70%)',
            filter: 'blur(60px)',
            opacity: 0.5
          }}
        />
      </div>

      {/* Particles effect */}
      <ImpressumParticles />
      
      {/* Noise texture */}
      <NoiseTexture />

      {/* Header with back button */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center">
          <a
            href="/"
            className={cn(
              "flex items-center gap-2",
              "text-gray-400 hover:text-white",
              "transition-colors duration-200"
            )}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </a>
        </div>
      </header>

      {/* Main content */}
      <main className="relative pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 bg-gradient-to-r from-white via-[#1DD3B0] to-[#14A88C] bg-clip-text text-transparent">
            Datenschutzerklärung
          </h1>

          {/* Glass container for content */}
          <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm p-[1px]">
            <div className="rounded-lg bg-[#0D0D0D]/40 p-8 space-y-12">
              {PRIVACY_SECTIONS.map((section, index) => (
                <PrivacySection
                  key={index}
                  title={section.title}
                  content={section.content}
                  subsections={section.subsections}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Datenschutz;