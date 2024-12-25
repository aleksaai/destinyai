import React from 'react';
import { Linkedin } from 'lucide-react';
import { LinkedInOverlay } from './LinkedInOverlay';
import { Badge } from './Badge';
import { cn } from '@/utils/cn';

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
  linkedInUrl?: string;
}

const TeamMember = ({ name, position, image, linkedInUrl }: TeamMemberProps) => {
  return (
    <div className="group relative flex items-center">
      {/* Profile Image and Content Container */}
      <div className={cn(
        "flex items-center w-full",
        "md:group-hover:blur-sm md:transition-all md:duration-300"
      )}>
        <div className="w-16 h-16 rounded-full overflow-hidden border border-white/10 flex-shrink-0">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex flex-1 items-center justify-between ml-4">
          <div>
            <h3 className="text-xl text-white font-medium mb-2">{name}</h3>
            <Badge>{position}</Badge>
          </div>

          {/* Mobile LinkedIn Icon */}
          {linkedInUrl && (
            <a 
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10"
            >
              <Linkedin className="w-5 h-5 text-[#1DD3B0]" />
            </a>
          )}
        </div>
      </div>

      {/* Desktop LinkedIn Overlay */}
      <div className="hidden md:block">
        <LinkedInOverlay linkedInUrl={linkedInUrl} />
      </div>
    </div>
  );
};

export default TeamMember;