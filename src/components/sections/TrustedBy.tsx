import React from 'react';
import { cn } from '@/utils/cn';

interface TrustedByProps {
  className?: string;
}

const TrustedBy = ({ className }: TrustedByProps) => {
  return (
    <span className={cn("text-sm font-medium text-white/60", className)}>
      Trusted by 300+ companies
    </span>
  );
};

export default TrustedBy;