'use client';

import { useCallback } from 'react';
import { loadSlim } from "tsparticles-slim";
import { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";

interface ParticlesBackgroundProps {
  color?: string;
  variant?: string;
}

export default function ParticlesBackground({ color = "#ffffff", variant }: ParticlesBackgroundProps) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="!fixed !inset-0"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
      options={{
        background: {
          color: "#111827",
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: color,
          },
          links: {
            color: color,
            distance: 120,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out",
            },
            random: false,
            speed: 1.5,
            straight: true,
            bounce: false,
            attract: {
              enable: false,
            }
          },
          number: {
            density: {
              enable: true,
              area: 900,
            },
            value: 180,
            limit: 180,
          },
          opacity: {
            value: 0.5,
            animation: {
              enable: false,
            }
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
            animation: {
              enable: false,
            }
          },
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "grab",
              parallax: {
                enable: false,
              }
            },
            resize: false,
          },
          modes: {
            push: {
              quantity: 2,
              limit: 4,
            },
            grab: {
              distance: 300,
              links: {
                opacity: 0.7,
                color: color,
                blink: false,
              },
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
