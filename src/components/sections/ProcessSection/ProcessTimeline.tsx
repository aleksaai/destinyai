import React from 'react';
import { FileText } from 'lucide-react';

const TIMELINE_STEPS = [
  {
    label: 'Your business',
    icon: FileText,
    position: '0%'
  },
  {
    label: 'Notion',
    icon: 'https://i.postimg.cc/RZ3tXKC8/notion.png',
    position: '25%'
  },
  {
    label: 'Zapier',
    icon: 'https://i.postimg.cc/QxnY4wKq/zapier.png',
    position: '50%'
  },
  {
    label: 'OpenAI',
    icon: 'https://i.postimg.cc/L8G8RJRX/openai.png',
    position: '75%'
  },
  {
    label: 'Facebook',
    icon: 'https://i.postimg.cc/bNL1P9wz/facebook.png',
    position: '100%'
  }
];

const ProcessTimeline = () => {
  return (
    <div className="relative pt-16">
      {/* Timeline track */}
      <div className="absolute left-0 right-0 h-1 bg-zinc-800">
        <div className="absolute inset-y-0 left-0 w-[30%] bg-gradient-to-r from-[#1DD3B0] to-[#1DD3B0]/50" />
      </div>

      {/* Timeline points */}
      <div className="relative flex justify-between">
        {TIMELINE_STEPS.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Point */}
            <div className="w-12 h-12 rounded-xl bg-[#141414] border border-zinc-800 flex items-center justify-center mb-4">
              {typeof step.icon === 'string' ? (
                <img src={step.icon} alt={step.label} className="w-6 h-6" />
              ) : (
                <step.icon className="w-6 h-6 text-white/70" />
              )}
            </div>
            
            {/* Label */}
            <span className="text-sm text-white/70">{step.label}</span>
          </div>
        ))}
      </div>

      {/* Current step indicator */}
      <div className="absolute top-0 left-[25%] -translate-x-1/2 px-4 py-2 bg-[#141414] rounded-lg border border-zinc-800">
        <span className="text-sm text-white">Workflow Analysis</span>
      </div>
    </div>
  );
};

export default ProcessTimeline;