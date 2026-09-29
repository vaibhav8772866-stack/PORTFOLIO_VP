import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    // Check if device is touch-enabled
    if (typeof window !== 'undefined') {
      const touchMedia = window.matchMedia('(pointer: coarse)');
      setIsTouch(touchMedia.matches);
      
      const handleTouchChange = (e) => setIsTouch(e.matches);
      touchMedia.addEventListener('change', handleTouchChange);
      return () => touchMedia.removeEventListener('change', handleTouchChange);
    }
  }, []);

  useEffect(() => {
    if (isTouch || shouldReduce) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleOver = (e) => {
      const target = e.target;
      if (
        target &&
        (target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') ||
          target.closest('button') ||
          target.getAttribute('role') === 'button' ||
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleOver, { passive: true });
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleOver);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isTouch, shouldReduce, isVisible]);

  if (isTouch || shouldReduce || !isVisible) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-difference border border-primary/60 bg-primary/10"
      animate={{
        x: position.x - (isHovered ? 24 : 12),
        y: position.y - (isHovered ? 24 : 12),
        width: isHovered ? 48 : 24,
        height: isHovered ? 48 : 24,
        scale: isHovered ? 1.25 : 1,
        borderColor: isHovered ? 'rgba(14, 165, 233, 0.8)' : 'rgba(14, 165, 233, 0.4)',
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 28,
        mass: 0.3,
      }}
    />
  );
};

export default CustomCursor;
