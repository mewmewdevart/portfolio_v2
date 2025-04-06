import { useEffect } from 'react';
import useScrollDirection from './useScrollDirection';

const useScrollNavigation = () => {
  const scrollDirection = useScrollDirection({ thresholdPixels: 50 });

  useEffect(() => {
    const sections = ['home', 'about', 'projects']; 
    const currentSectionIndex = sections.findIndex((section) => {
      const element = document.getElementById(section);
      if (!element) return false;
      const rect = element.getBoundingClientRect();
      return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
    });

    if (currentSectionIndex === -1) return;

    let nextSectionIndex = currentSectionIndex;

    if (scrollDirection === 'down') {
      nextSectionIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
    } else if (scrollDirection === 'up') {
      nextSectionIndex = Math.max(currentSectionIndex - 1, 0);
    }

    const nextSection = sections[nextSectionIndex];
    const nextElement = document.getElementById(nextSection);

    if (nextElement) {
      nextElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, [scrollDirection]);
};

export default useScrollNavigation;