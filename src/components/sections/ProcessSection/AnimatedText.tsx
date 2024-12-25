import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/utils/cn';

interface AnimatedTextProps {
  initialText: string;
  fadeInText: string;
  secondaryText: string;
}

const AnimatedText = ({ initialText, fadeInText, secondaryText }: AnimatedTextProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.5,
        rootMargin: '-100px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={elementRef} className="space-y-4">
      <p className={cn(
        "text-2xl md:text-3xl leading-relaxed transition-all duration-700",
        isVisible 
          ? "opacity-40 transform -translate-y-4" 
          : "text-white/90"
      )}>
        <span className={cn(
          "inline-block transition-opacity duration-700",
          isVisible ? "opacity-100" : "opacity-0"
        )}>
          {fadeInText}
        </span>
        {initialText}
      </p>
      
      <p className={cn(
        "text-2xl md:text-3xl leading-relaxed transition-all duration-700",
        isVisible 
          ? "text-white/90 transform translate-y-0 opacity-100" 
          : "text-white/40 transform translate-y-4 opacity-0"
      )}>
        {secondaryText}
      </p>
    </div>
  );
};

export default AnimatedText;