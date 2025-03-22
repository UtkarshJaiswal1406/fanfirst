"use client";

import { useEffect, useRef } from "react";

export default function DynamicBackground({ className = "", variant = "default" }) {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    ctxRef.current = ctx;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Define particles based on variant
    const particles = [];
    const particleCount = variant === "dense" ? 150 : 100;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        color: getParticleColor(variant),
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }

    // Create grid lines for grid variant
    const gridLines = [];
    if (variant === "grid") {
      const gridSize = 100;
      const gridCount = Math.ceil(Math.max(canvas.width, canvas.height) / gridSize) + 1;

      // Horizontal lines
      for (let i = 0; i < gridCount; i++) {
        gridLines.push({
          x1: 0,
          y1: i * gridSize,
          x2: canvas.width,
          y2: i * gridSize,
          color: "rgba(0, 195, 255, 0.15)",
        });
      }

      // Vertical lines
      for (let i = 0; i < gridCount; i++) {
        gridLines.push({
          x1: i * gridSize,
          y1: 0,
          x2: i * gridSize,
          y2: canvas.height,
          color: "rgba(0, 195, 255, 0.15)",
        });
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid lines if grid variant
      if (variant === "grid") {
        gridLines.forEach((line) => {
          ctx.beginPath();
          ctx.moveTo(line.x1, line.y1);
          ctx.lineTo(line.x2, line.y2);
          ctx.strokeStyle = line.color;
          ctx.lineWidth = 1;
          ctx.stroke();
        });
      }

      // Draw and update particles
      particles.forEach((particle, index) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 195, 255, ${particle.opacity})`;
        ctx.fill();

        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Connect particles with lines
        if (variant !== "minimal") {
          connectParticles(particles, index, ctx, canvas, variant);
        }
      });

      // Add glow effect for wave variant
      if (variant === "wave") {
        drawWaveEffect(ctx, canvas);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [variant]);

  // Helper function to get particle color
  const getParticleColor = (variant) => {
    switch (variant) {
      case "blue":
        return "rgba(0, 128, 255, 1)";
      case "cyan":
        return "rgba(0, 195, 255, 1)";
      case "teal":
        return "rgba(0, 225, 255, 1)";
      case "wave":
      case "grid":
      case "minimal":
        return "rgba(0, 195, 255, 1)";
      case "dense":
        return `rgba(${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100) + 155}, 255, 1)`;
      default:
        return "rgba(0, 195, 255, 1)";
    }
  };

  // Helper function to connect particles with lines
  const connectParticles = (particles, index, ctx, canvas, variant) => {
    const currentParticle = particles[index];
    const connectionDistance = variant === "dense" ? 100 : 150;

    for (let i = index + 1; i < particles.length; i++) {
      const nextParticle = particles[i];
      const distance = Math.sqrt(
        Math.pow(currentParticle.x - nextParticle.x, 2) + Math.pow(currentParticle.y - nextParticle.y, 2)
      );

      if (distance < connectionDistance) {
        const opacity = 1 - distance / connectionDistance;
        ctx.beginPath();
        ctx.moveTo(currentParticle.x, currentParticle.y);
        ctx.lineTo(nextParticle.x, nextParticle.y);

        const gradient = ctx.createLinearGradient(
          currentParticle.x,
          currentParticle.y,
          nextParticle.x,
          nextParticle.y
        );

        const [r1, g1, b1] = currentParticle.color.match(/\d+/g).map(Number);
        const [r2, g2, b2] = nextParticle.color.match(/\d+/g).map(Number);

        const color1 = `rgba(${r1}, ${g1}, ${b1}, ${opacity * 0.5})`;
        const color2 = `rgba(${r2}, ${g2}, ${b2}, ${opacity * 0.5})`;

        gradient.addColorStop(0, color1);
        gradient.addColorStop(1, color2);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = variant === "dense" ? 0.5 : 1;
        ctx.stroke();
      }
    }
  };

  // Helper function to draw wave effect
  const drawWaveEffect = (ctx, canvas) => {
    const time = Date.now() * 0.001;
    const waveHeight = canvas.height * 0.1;
    const waveCount = 3;

    for (let i = 0; i < waveCount; i++) {
      ctx.beginPath();

      const gradient = ctx.createLinearGradient(0, canvas.height * 0.7, 0, canvas.height);
      gradient.addColorStop(0, "rgba(0, 195, 255, 0)");
      gradient.addColorStop(1, `rgba(0, 195, 255, ${0.05 * (waveCount - i)})`);

      ctx.fillStyle = gradient;

      let x = 0;
      ctx.moveTo(x, canvas.height);

      while (x < canvas.width) {
        const y = canvas.height - Math.sin(x * 0.003 + time + i) * waveHeight - i * waveHeight * 0.5;

        ctx.lineTo(x, y);
        x += 5;
      }

      ctx.lineTo(canvas.width, canvas.height);
      ctx.closePath();
      ctx.fill();
    }
  };

  return <canvas ref={canvasRef} className={`fixed top-0 left-0 w-full h-full -z-10 ${className}`} />;
}

