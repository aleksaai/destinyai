import React from 'react';
import { cn } from '@/utils/cn';

const ProcessText = () => {
  const getTextStyles = (index: number) => {
    // Last item gets the gradient
    if (index === 2) {
      return "bg-gradient-to-r from-white via-[#1DD3B0] to-[#14A88C] bg-clip-text text-transparent";
    }
    // All other items are white
    return "text-white";
  };

  const texts = [
    "We start by analyzing your workflows to identify tasks AI can automate and optimize.",
    "Next, we develop and integrate AI solutions into your workflows.",
    "Then, we continuously refine and improve your AI solutions."
  ];

  return (
    <div className="max-w-xl mx-auto md:mx-0 space-y-3">
      {texts.map((text, index) => (
        <p
          key={index}
          className={cn(
            "text-2xl md:text-3xl leading-relaxed font-bold",
            getTextStyles(index)
          )}
        >
          {text}
        </p>
      ))}
    </div>
  );
};

export default ProcessText;