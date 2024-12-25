import React from 'react';
import ProcessBox from './ProcessBox';
import LaserBeam from './LaserBeam';

const ProcessVisual = () => {
  return (
    <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm p-[10px]">
      <div className="rounded-lg bg-[#0D0D0D] p-6 h-[340px] relative overflow-hidden">
        {/* Laser beam */}
        <LaserBeam />

        {/* Fade masks - only on desktop */}
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0D0D0D] to-transparent z-10" />
        <div className="hidden md:block absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0D0D0D] to-transparent z-10" />

        {/* Main centered content */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-4">
          <ProcessBox 
            size="small" 
            label="Pipedrive" 
            customIcon="https://i.postimg.cc/zBrWF5FX/Heading-2024-12-22-T211249-985.png"
            iconSize="large"
          />
          <ProcessBox 
            size="large" 
            label="Make" 
            customIcon="https://i.postimg.cc/sxnhzWdv/Heading-2024-12-22-T211510-079.png"
            iconSize="xlarge"
            isMiddle={true}
          />
          <ProcessBox 
            size="small" 
            label="OpenAI" 
            customIcon="https://i.postimg.cc/8kwWM2JN/Heading-2024-12-22-T211006-974.png"
            iconSize="large"
          />
        </div>

        {/* Side boxes - only on desktop */}
        <div className="hidden md:block absolute left-[-25px] top-1/2 -translate-y-1/2 translate-x-[25%]">
          <ProcessBox 
            size="tiny" 
            label="Zapier" 
            customIcon="https://i.postimg.cc/52gZVNjD/Heading-2024-12-22-T210007-617.png"
          />
        </div>
        <div className="hidden md:block absolute right-[-25px] top-1/2 -translate-y-1/2 -translate-x-[25%]">
          <ProcessBox 
            size="tiny" 
            label="Retell AI" 
            customIcon="https://i.postimg.cc/RVDHbwLY/Heading-2024-12-22-T211150-679.png"
          />
        </div>
      </div>
    </div>
  );
};

export default ProcessVisual;