import React from 'react';
import { Linkedin } from 'lucide-react';
import { cn } from '@/utils/cn';

interface LinkedInOverlayProps {
  linkedInUrl?: string;
}

export const LinkedInOverlay = ({ linkedInUrl }: LinkedInOverlayProps) => {
  if (!linkedInUrl) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <a 
        href={linkedInUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "flex items-center gap-2 px-4 py-2",
          "text-white font-medium",
          "transition-all duration-300",
          "hover:scale-105"
        )}
      >
        <Linkedin className="w-5 h-5" />
        <span>View on LinkedIn</span>
      </a>
    </div>
  );
};