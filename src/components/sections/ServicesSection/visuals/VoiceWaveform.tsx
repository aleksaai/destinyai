import React from 'react';
import { cn } from '@/utils/cn';

interface VoiceWaveformProps {
  isActive: boolean;
}

export const VoiceWaveform = ({ isActive }: VoiceWaveformProps) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="flex items-center gap-1">
        {[...Array(20)].map((_, i) => {
          const baseHeight = Math.sin((i * Math.PI) / 10) * 30 + 40;
          return (
            <div
              key={i}
              className={cn(
                "w-1 rounded-full bg-[#1DD3B0]/40",
                "transition-all duration-300",
                isActive && "animate-voice-wave"
              )}
              style={{
                height: `${baseHeight}px`,
                animationDelay: `${i * 50}ms`,
                opacity: isActive ? 1 : 0.2,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};