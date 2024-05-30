import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './LoadingBall.css';

const LoadingBall: React.FC = () => {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    const gradientColors = ['#ff7eb9, #ff2d87', '#ffdd00, #ff6600', '#cc66ff, #993399']; // Define gradient colors

    tl.to('.ball', {
      y: 200, // Move the ball down to the bottom
      scale: 1.2, // Scale up the ball
      duration: 0.5,
      ease: 'power1.inOut',
      backgroundColor: gradientColors[0], // Initial gradient color
    })
    .to('.ball', {
      y: 0, // Bounce back up
      scale: 1, // Reset the scale
      duration: 1,
      ease: 'bounce.out',
      backgroundColor: gradientColors[1], // Changed gradient color
    })
    .to('.ball', {
      y: 200, // Move the ball down again
      scale: 1.2, // Scale up the ball
      duration: 0.5,
      ease: 'power1.inOut',
      backgroundColor: gradientColors[2], // Changed gradient color
    })
    .to('.ball', {
      y: 0, // Bounce back up again
      scale: 1, // Reset the scale
      duration: 1,
      ease: 'bounce.out',
      backgroundColor: gradientColors[0], // Changed gradient color
    });
  }, []);

  return (
    <div className="loading-container">
      <div className="loading-background"></div>
      <div className="ball"></div>
    </div>
  );
};

export default LoadingBall;
