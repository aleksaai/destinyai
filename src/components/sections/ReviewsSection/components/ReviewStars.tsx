import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/utils/cn';

interface ReviewStarsProps {
  rating: number;
}

export const ReviewStars = ({ rating }: ReviewStarsProps) => {
  return (
    <div className="flex gap-1 mb-6">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={cn(
            "w-4 h-4",
            i < rating ? "text-[#1DD3B0] fill-[#1DD3B0]" : "text-white/10"
          )}
        />
      ))}
    </div>
  );
};