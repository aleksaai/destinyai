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

export const createParticle = (canvas: HTMLCanvasElement): Particle => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  size: Math.random() * 1.5 + 0.5,
  speedX: (Math.random() - 0.5) * 0.3,
  speedY: (Math.random() - 0.5) * 0.3,
  opacity: Math.random() * 0.5 + 0.2, // Increased opacity range
  twinkleSpeed: Math.random() * 0.02 + 0.01,
  twinklePhase: Math.random() * Math.PI * 2,
});

export const updateParticle = (particle: Particle, canvas: HTMLCanvasElement) => {
  particle.x += particle.speedX;
  particle.y += particle.speedY;
  particle.twinklePhase += particle.twinkleSpeed;

  // Improved edge wrapping with padding
  const padding = 50;
  if (particle.x < -padding) particle.x = canvas.width + padding;
  if (particle.x > canvas.width + padding) particle.x = -padding;
  if (particle.y < -padding) particle.y = canvas.height + padding;
  if (particle.y > canvas.height + padding) particle.y = -padding;

  // Enhanced twinkling effect
  particle.opacity = 
    (Math.sin(particle.twinklePhase) + 1.2) * 0.25 + 0.2;
};

export const drawParticle = (ctx: CanvasRenderingContext2D, particle: Particle) => {
  ctx.beginPath();
  ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(29, 211, 176, ${particle.opacity})`;
  ctx.fill();
};