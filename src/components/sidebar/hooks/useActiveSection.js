import { useEffect } from 'react';

const useActiveSection = (isVisible, setActiveSection) => {
  useEffect(() => {
    if (isVisible) {
      // Buscar la sección actualmente visible
      const sections = document.querySelectorAll('[data-section]');
      let found = false;
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        // Considera visible si al menos el 30% está en pantalla
        if (rect.top < window.innerHeight * 0.7 && rect.bottom > window.innerHeight * 0.3 && !found) {
          setActiveSection(section.id);
          found = true;
        }
      });
    }
  }, [isVisible, setActiveSection]);
};

export default useActiveSection; 