import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

const IndustryParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const animationFrameRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Reduce particles on mobile
    const particleCount = isMobile ? 15 : 35;

    const createParticle = (): Particle => ({
      x: canvas.width * 0.2 + (Math.random() - 0.5) * canvas.width * 0.15,
      y: canvas.height * 0.6 + (Math.random() - 0.5) * canvas.height * 0.12,
      size: Math.random() * 1.5 + 0.5,
      speedX: (Math.random() - 0.5) * (isMobile ? 0.06 : 0.12),
      speedY: (Math.random() - 0.5) * (isMobile ? 0.06 : 0.12),
      opacity: Math.random() * 0.5 + 0.3,
      twinkleSpeed: Math.random() * 0.02 + 0.01,
      twinklePhase: Math.random() * Math.PI * 2
    });

    const handleResize = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
        setIsMobile(window.innerWidth < 768);
        
        // Reset particles
        particlesRef.current = Array.from(
          { length: isMobile ? 15 : 35 }, 
          createParticle
        );
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.twinklePhase += particle.twinkleSpeed;

        // Keep particles within bounds
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        particle.opacity = (Math.sin(particle.twinklePhase) + 1.2) * 0.25 + 0.2;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(29, 211, 176, ${particle.opacity})`;
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    handleResize();
    particlesRef.current = Array.from(
      { length: particleCount }, 
      createParticle
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
      className="absolute inset-0 pointer-events-none"
      style={{ 
        opacity: isMobile ? 0.4 : 0.8,
        willChange: 'transform'
      }}
    />
  );
};

export default React.memo(IndustryParticles);