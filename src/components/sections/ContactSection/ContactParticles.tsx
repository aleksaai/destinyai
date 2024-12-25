import React, { useEffect, useRef } from 'react';

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

const ContactParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles: Particle[] = [];
    const particleCount = 40; // Reduced count for more focused effect

    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
      }
    };

    const createParticle = (): Particle => {
      // Calculate the center point of the spark effect
      const sparkCenterX = canvas.width * 0.8; // 80% from left
      const sparkCenterY = canvas.height * 0.32; // 32% from top

      // Create particles in an elliptical area around the spark
      const angle = Math.random() * Math.PI * 2;
      const radiusX = Math.random() * canvas.width * 0.2; // Horizontal spread
      const radiusY = Math.random() * canvas.height * 0.15; // Vertical spread

      return {
        x: sparkCenterX + Math.cos(angle) * radiusX,
        y: sparkCenterY + Math.sin(angle) * radiusY,
        size: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.15, // Slower movement
        speedY: (Math.random() - 0.5) * 0.15, // Slower movement
        opacity: Math.random() * 0.4 + 0.2, // Increased base opacity
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        twinklePhase: Math.random() * Math.PI * 2
      };
    };

    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle());
      }
    };

    const updateParticles = () => {
      const sparkCenterX = canvas.width * 0.8;
      const sparkCenterY = canvas.height * 0.32;

      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.twinklePhase += particle.twinkleSpeed;

        // Keep particles within the elliptical area
        const dx = particle.x - sparkCenterX;
        const dy = particle.y - sparkCenterY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > canvas.width * 0.25) { // If too far from center
          // Reset particle near the center
          const angle = Math.random() * Math.PI * 2;
          const radiusX = Math.random() * canvas.width * 0.15;
          const radiusY = Math.random() * canvas.height * 0.1;
          
          particle.x = sparkCenterX + Math.cos(angle) * radiusX;
          particle.y = sparkCenterY + Math.sin(angle) * radiusY;
        }

        // Update opacity for twinkling effect
        particle.opacity = (Math.sin(particle.twinklePhase) + 1.2) * 0.2 + 0.15;
      });
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(29, 211, 176, ${particle.opacity})`;
        ctx.fill();
      });
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.7 }} // Slightly increased opacity
    />
  );
};

export default ContactParticles;