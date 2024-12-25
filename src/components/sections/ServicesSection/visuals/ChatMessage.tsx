import React from 'react';
import { cn } from '@/utils/cn';

interface ChatMessageProps {
  isUser?: boolean;
  avatar?: string;
  name?: string;
  children: React.ReactNode;
  className?: string;
}

export const ChatMessage = ({ 
  isUser, 
  avatar, 
  name, 
  children,
  className 
}: ChatMessageProps) => {
  return (
    <div className={cn("flex items-start gap-4", className)}>
      {avatar && (
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center overflow-hidden flex-shrink-0">
          <img
            src={avatar}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="flex-1">
        {name && (
          <div className="text-xs text-white mb-1">{name}</div>
        )}
        <div className="p-3 rounded-xl bg-[#0F0F0F] text-sm text-white border border-white/10">
          {children}
        </div>
      </div>
    </div>
  );
};