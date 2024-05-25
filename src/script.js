import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Smooth scrolling function
const smoothScroll = () => {
  gsap.utils.toArray('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      gsap.to(window, { duration: 1, scrollTo: target, ease: 'power2.inOut' });
    });
  });
};

// Initialize smooth scrolling
smoothScroll();
