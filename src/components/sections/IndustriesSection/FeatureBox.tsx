import React from 'react';
import { cn } from '@/utils/cn';
import ChatMessage from './ChatMessage';
import VoiceMessage from './VoiceMessage';
import SuccessMessage from './SuccessMessage';

interface FeatureBoxProps {
  title: string;
  description: string;
  className?: string;
  messageType?: 'chat' | 'voice' | 'success' | null;
}

const FeatureBox = ({ title, description, className, messageType }: FeatureBoxProps) => {
  // Split description into words and rebuild with line breaks for mobile
  const mobileDescription = description.split(' ').reduce((acc, word, i, arr) => {
    if (i === 0) return word;
    // Add line break after approximately 3-4 words
    if (i % 4 === 0 && i !== arr.length - 1) {
      return `${acc}\n${word}`;
    }
    return `${acc} ${word}`;
  }, '');

  return (
    <div className={cn(
      "w-full md:w-[400px] h-[360px]",
      "bg-[#0D0D0D]/40",
      "rounded-xl border border-zinc-800/60 p-2",
      "relative isolate",
      "transition-all duration-300 ease-out",
      className
    )}>
      <div className="w-full h-full rounded-lg bg-[#0D0D0D] border border-zinc-800/60 p-6 relative isolate">
        <div className="w-full h-[140px] bg-[#0D0D0D] rounded-lg border border-zinc-800/60 mb-8 relative"
          style={{
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '16px 16px'
          }}
        >
          {messageType === 'chat' && <ChatMessage />}
          {messageType === 'voice' && <VoiceMessage />}
          {messageType === 'success' && <SuccessMessage />}
        </div>
        
        <div className="text-left">
          <h3 className="text-xl font-semibold text-white mb-2 transition-all duration-300">
            {title}
          </h3>
          
          <p className="text-sm text-gray-400 leading-relaxed transition-all duration-300 md:hidden whitespace-pre-line">
            {mobileDescription}
          </p>
          <p className="text-sm text-gray-400 leading-relaxed transition-all duration-300 hidden md:block">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureBox;