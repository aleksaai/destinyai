import React from 'react';
import type { Service } from './types';
import { cn } from '@/utils/cn';

interface ServiceCardProps extends Service {
  isMobile?: boolean;
}

const ServiceCard = ({ title, description, visual: Visual, isMobile }: ServiceCardProps) => {
  return (
    <div className={cn("pt-8", isMobile && "text-center")}>
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
        {title}
      </h3>
      <p className="text-gray-400 mb-8 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
        {description}
      </p>
      
      <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm p-[10px] h-[340px]">
        <div className="rounded-lg bg-[#0D0D0D] p-6 h-full">
          <Visual isMobile={isMobile} />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;