import React, { useEffect, useRef, useState } from 'react';
import { createParticle, updateParticle, drawParticle } from './particleUtils';

const ParticleSystem = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const animationFrameRef = useRef<number>();
  const particlesRef = useRef<any[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Significantly reduce particle count on mobile
    const particleCount = isMobile ? 15 : 150;
    
    const handleResize = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
        setIsMobile(window.innerWidth < 768);
        
        // Reset particles on resize
        particlesRef.current = Array.from(
          { length: isMobile ? 15 : 150 }, 
          () => createParticle(canvas)
        );
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach(particle => {
        updateParticle(particle, canvas);
        drawParticle(ctx, particle);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    handleResize();
    particlesRef.current = Array.from(
      { length: particleCount }, 
      () => createParticle(canvas)
    );

    // Start animation
    animate();

    // Throttled resize handler
    let resizeTimeout: NodeJS.Timeout;
    const throttledResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 250);
    };

    window.addEventListener('resize', throttledResize);

    return () => {
      window.removeEventListener('resize', throttledResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isMobile]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full pointer-events-none"
      style={{ 
        opacity: isMobile ? 0.6 : 0.8,
        willChange: 'transform' 
      }}
    />
  );
};

export default React.memo(ParticleSystem);