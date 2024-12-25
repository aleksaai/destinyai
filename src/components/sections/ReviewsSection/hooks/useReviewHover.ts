import { useCallback } from 'react';

export const useReviewHover = () => {
  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = (y - rect.height / 2) / 20;
    const rotateY = (rect.width / 2 - x) / 20;
    
    e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    e.currentTarget.style.boxShadow = '0 0 30px rgba(29, 211, 176, 0.2)';
  }, []);

  const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1000px)';
    e.currentTarget.style.boxShadow = 'none';
  }, []);

  return {
    handleMouseEnter,
    handleMouseLeave
  };
};