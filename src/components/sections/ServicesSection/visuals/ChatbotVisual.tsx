import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { cn } from '@/utils/cn';
import { ChatMessage } from './ChatMessage';
import { Graph } from './Graph';

const GRAPH_DATA = [35, 45, 85, 40, 55, 30, 65, 50, 45];

interface ChatbotVisualProps {
  isMobile?: boolean;
}

const ChatbotVisual = ({ isMobile }: ChatbotVisualProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="h-[280px] relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Container that only slides on desktop */}
      <div 
        className="transition-transform duration-700 ease-out"
        style={{
          transform: !isMobile && isHovered ? 'translateY(-80px)' : 'translateY(0)'
        }}
      >
        {/* User message */}
        <ChatMessage
          isUser
          avatar="https://i.postimg.cc/rF5fBvvx/123.png"
          name="Aleksa:"
        >
          Please create a graph of the profits in this file 📄
        </ChatMessage>

        {/* AI Response */}
        <div className="space-y-3 mt-4">
          {/* Graph Box */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-4 h-4 text-[#1DD3B0]" />
              <span className="text-xs bg-gradient-to-r from-white via-[#1DD3B0] to-[#14A88C] bg-clip-text text-transparent">
                AI Assistant
              </span>
            </div>
            
            <div className="p-4 rounded-xl bg-[#0F0F0F] border border-white/10">
              <Graph 
                data={GRAPH_DATA}
                highlightIndex={2}
              />
            </div>
          </div>

          {/* Response Text - Always visible on mobile */}
          <div 
            className={cn(
              "transition-all duration-700 ease-out",
              isMobile 
                ? "opacity-100 transform translate-y-0" 
                : isHovered 
                  ? "opacity-100 transform translate-y-0" 
                  : "opacity-0 transform translate-y-10"
            )}
          >
            <ChatMessage>
              Of course! Here's a graph based on the profits in the file you provided. As you can see, there was a significant peak in the third month.
            </ChatMessage>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotVisual;