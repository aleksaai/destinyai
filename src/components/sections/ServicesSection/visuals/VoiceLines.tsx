import React from 'react';

export const VoiceLines = () => {
  // Create an array of static line heights
  const lines = Array.from({ length: 48 }, (_, i) => {
    // Use a simple sine wave pattern for a pleasing visual
    // Reduced max height from 60% to 30%, and base height from 20% to 10%
    const height = Math.abs(Math.sin(i * 0.3)) * 30 + 10; // Base height of 10%, max 40%
    return height;
  });

  return (
    <div className="absolute inset-0 flex items-center">
      <div className="w-full h-full flex items-center justify-between px-4">
        {lines.map((height, index) => (
          <div
            key={index}
            className="w-[2px] h-full bg-gradient-to-b from-white/[0.03] via-white/[0.08] to-white/[0.03]"
            style={{ 
              height: `${height}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
};