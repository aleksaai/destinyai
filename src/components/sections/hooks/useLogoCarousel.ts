import { useRef, useState, useEffect } from 'react';

export const useLogoCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const animate = () => {
      if (isHovered) return;
      
      const firstLogoWidth = container.children[0].getBoundingClientRect().width;
      const gap = 48; // 12 * 4 (gap-12 in Tailwind)
      
      if (container.scrollLeft >= (firstLogoWidth + gap) * 4) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 1;
      }
    };

    const animation = setInterval(animate, 30);
    return () => clearInterval(animation);
  }, [isHovered]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return {
    containerRef,
    isHovered,
    handleMouseEnter,
    handleMouseLeave
  };
};