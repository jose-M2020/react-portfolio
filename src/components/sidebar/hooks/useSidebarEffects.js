import { useEffect } from 'react';

const useSidebarEffects = (isVisible, toggleOpen) => {
  // Real time section active on scroll
  // useEffect(() => {
  //   const sections = document.querySelectorAll('[data-section]');

  //   const callback = (entries) => {
  //       entries.forEach((entry) => {
  //           if (entry.isIntersecting) {
  //               console.log(entry);
  //               setActiveSection(entry.target.id);
  //           }
  //       });
  //   };

  //   const observer = new IntersectionObserver(callback, {
  //       root: null,
  //       rootMargin: '0px',
  //       threshold: 0.3,
  //   });

  //   sections.forEach((section) => {
  //       observer.observe(section);
  //   });

  //   return () => {
  //       sections.forEach((section) => {
  //           observer.unobserve(section);
  //       });
  //   };
  // }, []);
  
  useEffect(() => {
    const overflow = isVisible ? 'hidden' : '';
    document.body.style.overflow = overflow;

    const handleEscape = (e) => {
      if (e.key === 'Escape' && isVisible) {
        toggleOpen(false);
      }
    };

    if (isVisible) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isVisible, toggleOpen]);
};

export default useSidebarEffects; 