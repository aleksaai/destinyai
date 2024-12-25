import React from 'react';

const ChatMessage = () => {
  return (
    <div className="absolute left-6 right-6 top-12 flex justify-center">
      <div className="w-fit flex items-center gap-4 px-6 py-3.5 bg-[#0D0D0D] rounded-lg border border-zinc-800/60">
        <div className="flex items-center gap-1.5">
          <span className="text-base text-white/70">How may I help?</span>
          <div className="w-[2px] h-5 bg-[#1DD3B0] animate-cursor-blink" />
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;