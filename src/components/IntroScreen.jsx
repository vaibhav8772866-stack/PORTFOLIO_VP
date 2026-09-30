import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const IntroScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState('show');
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    const exitTimer = setTimeout(() => setPhase('exit'), shouldReduce ? 700 : 2250);
    return () => clearTimeout(exitTimer);
  }, [shouldReduce]);

  const entrance = (delay) => ({
    duration: shouldReduce ? 0 : 0.75,
    delay: shouldReduce ? 0 : delay,
    ease: [0.25, 0.46, 0.45, 0.94],
  });

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {phase === 'show' && (
        <motion.div
          key="welcome"
          initial={{ opacity: 1 }}
          exit={shouldReduce ? { opacity: 0 } : { opacity: 0, y: '-8vh', scale: 0.98, filter: 'blur(8px)' }}
          transition={{ duration: shouldReduce ? 0.01 : 0.65, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex min-h-[100vh] h-[100svh] flex-col items-center justify-center overflow-hidden bg-[#080808] px-4 text-center select-none"
          aria-label="Welcome, Vaibhav Pandey"
        >
          <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }} />
          <div className="relative w-full max-w-6xl">
            <h1 className="font-display text-[clamp(3rem,15vw,5rem)] font-bold leading-[0.9] tracking-[-0.04em] sm:text-[clamp(4rem,10vw,10rem)]">
              <motion.span
                initial={shouldReduce ? false : { opacity: 0, y: 50, filter: 'blur(10px)', scale: 0.97 }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
                transition={entrance(0.12)}
                className="block text-white"
              >
                VAIBHAV
              </motion.span>
              <motion.span
                initial={shouldReduce ? false : { opacity: 0, y: 50, filter: 'blur(10px)', scale: 0.97 }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
                transition={entrance(0.38)}
                className="block bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent"
              >
                PANDEY
              </motion.span>
            </h1>
            <motion.p
              initial={shouldReduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduce ? 0 : 0.55, delay: shouldReduce ? 0 : 0.78, ease: 'easeOut' }}
              className="mx-auto mt-8 max-w-xl font-mono text-[0.65rem] uppercase leading-relaxed tracking-[0.14em] text-gray-400 sm:text-xs sm:tracking-[0.22em] md:text-sm"
            >
              B.TECH CSE <span className="text-cyan-300">•</span> JAVA <span className="text-cyan-300">•</span> FULL STACK <span className="text-cyan-300">•</span> AI/ML
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroScreen;