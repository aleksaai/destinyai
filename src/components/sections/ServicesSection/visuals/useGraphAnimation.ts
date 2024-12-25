import { useState, useEffect } from 'react';

export const useGraphAnimation = (initialData: number[], duration: number = 1000) => {
  const [animationProgress, setAnimationProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isAnimating) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      setAnimationProgress(progress);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

    return () => {
      setAnimationProgress(0);
    };
  }, [isAnimating, duration]);

  return {
    progress: animationProgress,
    startAnimation: () => setIsAnimating(true),
    resetAnimation: () => setIsAnimating(false)
  };
};