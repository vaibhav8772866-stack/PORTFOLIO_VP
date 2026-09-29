import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const IntroScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState('show'); // 'show' | 'exit'
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    if (shouldReduce) {
      // Skip straight through for reduced-motion users
      onComplete();
      return;
    }

    // Exit after ~2.2s
    const exitTimer = setTimeout(() => setPhase('exit'), 2200);
    // Notify parent that intro is done so navbar & hero can animate in
    const doneTimer = setTimeout(() => onComplete(), 2900);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete, shouldReduce]);

  return (
    <AnimatePresence>
      {phase === 'show' && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -60, scale: 0.97 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#080808] overflow-hidden select-none"
        >
          {/* Ambient background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
            <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
          </div>

          {/* Very subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />

          {/* Name */}
          <div className="relative text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 24, filter: 'blur(14px)', scale: 0.93 }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-[clamp(4rem,14vw,11rem)] font-display font-bold tracking-tighter leading-none text-white"
            >
              VAIBHAV
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24, filter: 'blur(14px)', scale: 0.93 }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
              transition={{ duration: 0.7, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-[clamp(4rem,14vw,11rem)] font-display font-bold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary"
            >
              PANDEY
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3, ease: 'easeOut' }}
              className="mt-8 text-xs md:text-sm tracking-[0.35em] text-gray-400 font-mono uppercase"
            >
              B.Tech CSE&nbsp;&nbsp;•&nbsp;&nbsp;Java&nbsp;&nbsp;•&nbsp;&nbsp;Full Stack&nbsp;&nbsp;•&nbsp;&nbsp;AI/ML
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroScreen;
