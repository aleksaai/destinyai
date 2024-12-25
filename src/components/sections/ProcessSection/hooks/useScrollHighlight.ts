import { useState, useEffect, useRef } from 'react';

interface ScrollState {
  isAtBottom: boolean;
  shouldHighlightNext: boolean;
  isScrollingUp: boolean;
}

export const useScrollHighlight = () => {
  const [scrollState, setScrollState] = useState<ScrollState>({
    isAtBottom: false,
    shouldHighlightNext: false,
    isScrollingUp: false
  });
  
  const lastScrollY = useRef(0);
  const hasReachedBottom = useRef(false);
  const scrollAttempts = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < lastScrollY.current;
      const bottomThreshold = window.innerHeight + currentScrollY >= document.documentElement.scrollHeight - 100;
      
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Track scroll attempts at bottom
      if (bottomThreshold && !hasReachedBottom.current) {
        hasReachedBottom.current = true;
        scrollAttempts.current = 1;
      } else if (bottomThreshold && hasReachedBottom.current) {
        scrollAttempts.current += 1;
      }

      // Reset when scrolling up
      if (isScrollingUp) {
        hasReachedBottom.current = false;
        scrollAttempts.current = 0;
        scrollTimeout.current = setTimeout(() => {
          setScrollState(prev => ({
            ...prev,
            shouldHighlightNext: false,
            isScrollingUp: true
          }));
        }, 150);
      }

      setScrollState({
        isAtBottom: bottomThreshold,
        shouldHighlightNext: bottomThreshold && scrollAttempts.current > 1,
        isScrollingUp
      });

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollState;
};