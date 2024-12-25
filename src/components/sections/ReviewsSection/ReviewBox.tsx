import React from 'react';
import { cn } from '@/utils/cn';
import type { Review } from './types';
import { CompanyLogo } from './components/CompanyLogo';
import { ReviewAuthor } from './components/ReviewAuthor';

const ReviewBox = ({ author, position, company, content, logo, image }: Review) => {
  return (
    <div>
      <div 
        className={cn(
          "rounded-xl border border-white/10 bg-black/10 backdrop-blur-sm p-[1px]",
          // Desktop-only hover effects with enhanced 3D transform
          "md:transform md:transition-all md:duration-500 md:transform-gpu",
          "md:hover:transform md:hover:perspective-[1000px] md:hover:rotate-y-[-8deg] md:hover:rotate-x-[8deg] md:hover:translate-y-[-8px]",
          "md:hover:shadow-[0_20px_40px_rgba(29,211,176,0.15)]",
          "md:hover:border-[#1DD3B0]/20"
        )}
      >
        <div className={cn(
          "rounded-lg bg-[#0D0D0D]/10 p-8 h-full",
          "md:transition-all md:duration-500",
          "md:hover:bg-[#0D0D0D]/20"
        )}>
          <CompanyLogo logo={logo} company={company} />
          <p className="text-white text-lg leading-relaxed mb-8">"{content}"</p>
          <ReviewAuthor 
            author={author}
            position={position}
            company={company}
            image={image}
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewBox;