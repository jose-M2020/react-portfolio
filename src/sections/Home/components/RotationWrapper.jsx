import { useEffect, useRef } from 'react'
import { animate, useMotionTemplate, useMotionValue, useTransform } from 'framer-motion';

const RotationWrapper = ({children}) => {
  const mouseX = useMotionValue(
    typeof window !== 'undefined' ? window.innerWidth / 2 : 0
  );
  const mouseY = useMotionValue(
    typeof window !== 'undefined' ? window.innerHeight / 2 : 0
  );

  // a reference for our animated card element
  const cardRef = useRef(null);

  // rotation
  const dampen = 40;
  const rotateX = useTransform(mouseY, (newMouseY) => {
    if (!cardRef.current) return 0;
    const rect = cardRef.current.getBoundingClientRect();
    const newRotateX = newMouseY - rect.top - rect.height / 2;
    return -newRotateX / dampen;
  });
  const rotateY = useTransform(mouseX, (newMouseX) => {
    if (!cardRef.current) return 0;
    const rect = cardRef.current.getBoundingClientRect();
    const newRotateY = newMouseX - rect.left - rect.width / 2;
    return newRotateY / dampen;
  });

  // sheen
  const diagonalMovement = useTransform(
    [rotateX, rotateY],
    ([newRotateX, newRotateY]) => {
      const position = newRotateX + newRotateY;
      return position;
    }
  );
  const sheenPosition = useTransform(diagonalMovement, [-5, 5], [-100, 200]);
  const sheenOpacity = useTransform(
    sheenPosition,
    [-250, 50, 250],
    [0, 0.05, 0]
  );
  const sheenGradient = useMotionTemplate`linear-gradient(
    55deg,
    transparent,
    rgba(255 255 255 / ${sheenOpacity}) ${sheenPosition}%,
    transparent)`;

  // handle mouse move on document
  useEffect(() => {
    const handleMouseMove = (e) => {
      // animate mouse x and y
      animate(mouseX, e.clientX);
      animate(mouseY, e.clientY);
    };
    if (typeof window === 'undefined') return;
    // recalculate grid on resize
    window.addEventListener('mousemove', handleMouseMove);
    // cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        // width: '100vw',
        // height: '100vh',
        // overflow: 'hidden',
        perspective: '1000px',
            }}
    >
      <div style={{ rotateX, rotateY }}>
        <div ref={cardRef} style={{ backgroundImage: sheenGradient }}>
          {children }
        </div>
      </div>
    </div>
  )
}

export default RotationWrapper