import React, { useCallback } from 'react';
import { loadSlim } from 'tsparticles-slim';
import Particles from 'react-tsparticles';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // Loads the slim version of tsparticles
  }, []);

  return (
    <Particles
      id="particles-background"
      init={particlesInit}
      options={{
        background: {
          color: '#0f172a',
        },
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            // A nice purple/cyan gradient array or single color
            value: ['#9333ea', '#4f46e5', '#38bdf8'],
          },
          shape: {
            type: 'circle',
          },
          opacity: {
            value: 0.6,
            random: true,
            anim: {
              enable: true,
              speed: 0.5,
              opacity_min: 0.2,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
          },
          move: {
            enable: true,
            speed: 1.0,
            direction: 'none',
            outModes: 'out',
          },
          links: {
            enable: true,
            distance: 120,
            color: '#9333ea',
            opacity: 0.2, // More subtle
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repulse', 
            },
            onClick: {
              enable: true,
              mode: 'push', // Clicking spawns more particles
            },
          },
          modes: {
            repulse: {
              distance: 80,
            },
            push: {
              quantity: 3,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
