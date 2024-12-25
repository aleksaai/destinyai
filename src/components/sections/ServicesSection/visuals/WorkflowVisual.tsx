import React, { useState } from 'react';
import { Bot } from 'lucide-react';
import { cn } from '@/utils/cn';

const WorkflowVisual = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const steps = [
    { label: 'New Lead Captured' },
    { label: 'Add to Pipedrive CRM' },
    { label: 'Send Confirmation Email' }
  ];

  return (
    <div 
      className="h-[280px] relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Container that slides up */}
      <div 
        className="transition-transform duration-500 ease-in-out"
        style={{
          transform: isHovered ? 'translateY(-120px)' : 'translateY(0)'
        }}
      >
        {/* Main workflow steps */}
        <div className="flex flex-col justify-center space-y-6 relative">
          {/* Vertical laser line */}
          <div 
            className="absolute left-[32px] transition-all duration-500 ease-in-out"
            style={{
              top: 'calc(50% - 106px + 20px)',
              height: isHovered ? '292px' : '172px',
              width: '4px',
              background: 'linear-gradient(to right, rgba(29,211,176,0.4), rgba(29,211,176,1), rgba(29,211,176,0.4))',
              boxShadow: '0 0 8px rgba(29,211,176,0.6)',
              zIndex: 0
            }}
          />

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 p-3 rounded-lg bg-[#0D0D0D]/40 border border-[#141414]">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#0F0F0F] flex items-center justify-center flex-shrink-0 border border-[#141414]">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 p-2 rounded-lg bg-[#0F0F0F] border border-[#141414]">
                  <span className="text-sm">
                    <span className="bg-gradient-to-r from-white via-[#1DD3B0] to-[#14A88C] bg-clip-text text-transparent font-medium mr-2">
                      {index + 1}.
                    </span>
                    <span className="text-white">{step.label}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success message */}
        <div 
          className={cn(
            "mt-8 p-3 rounded-lg",
            "bg-[#0D0D0D]/40 border border-[#141414]",
            "transition-all duration-500",
            isHovered ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
          )}
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#0F0F0F] flex items-center justify-center flex-shrink-0 border border-[#141414]">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 p-2 rounded-lg bg-[#0F0F0F] border border-[#141414]">
              <span className="text-sm">
                <span className="bg-gradient-to-r from-white via-[#1DD3B0] to-[#14A88C] bg-clip-text text-transparent font-medium mr-2">
                  ✔
                </span>
                <span className="text-white">Workflow successfully automated!</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowVisual;