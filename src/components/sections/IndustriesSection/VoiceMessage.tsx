import React from 'react';
import { Mic } from 'lucide-react';

const VoiceMessage = () => {
  return (
    <div className="absolute left-6 right-6 top-12 flex justify-center">
      <div className="w-fit flex items-center gap-4 px-6 py-3.5 bg-[#0D0D0D] rounded-lg border border-zinc-800/60">
        <Mic className="w-5 h-5 text-white/70" />
        <div className="flex items-center gap-1.5">
          <span className="text-base text-white/70">Tell me, </span>
          <div 
            className="text-base"
            style={{
              background: 'linear-gradient(to right, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            how can I
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceMessage;