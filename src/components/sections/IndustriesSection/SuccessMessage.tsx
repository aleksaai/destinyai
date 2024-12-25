import React from 'react';

const SuccessMessage = () => {
  return (
    <div className="absolute left-6 right-6 top-12 flex justify-center">
      <div className="w-fit flex items-center gap-4 px-6 py-3.5 bg-[#0D0D0D] rounded-lg border border-zinc-800/60">
        <img 
          src="https://i.postimg.cc/zBrWF5FX/Heading-2024-12-22-T211249-985.png"
          alt="Pipedrive Logo"
          className="w-5 h-5 object-contain"
        />
        <span className="text-base text-white/70">New Deal Closed! 🎉</span>
      </div>
    </div>
  );
};

export default SuccessMessage;