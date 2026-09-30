import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { profile } from '../data/profile';

const Hero = ({ visible = true }) => {
  const shouldReduce = useReducedMotion();
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const visualY = useTransform(scrollYProgress, [0, 1], [0, shouldReduce ? 0 : -50]);
  const visualOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.4]);
  const headingY = useTransform(scrollYProgress, [0, 1], [0, shouldReduce ? 0 : -30]);
  const headingScale = useTransform(scrollYProgress, [0, 1], [1, shouldReduce ? 1 : 0.96]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.6], [1, shouldReduce ? 1 : 0.65]);

  const baseDelay = visible ? 0 : 999;
  const revealDelay = (delay) => (shouldReduce ? 0 : baseDelay + delay);

  return (
    <section id="home" ref={sectionRef} className="min-h-[100svh] flex items-center relative pt-20 pb-12">
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div style={{ y: headingY, scale: headingScale, opacity: headingOpacity }} className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: revealDelay(0.1) }}
            className="inline-flex items-center gap-3 bg-primary/10 text-primary border border-primary/20 px-4 py-1.5 rounded-full text-sm font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>{profile.title}</span>
          </motion.div>

          <h1 className="mt-10 mb-7 font-display text-[clamp(4.5rem,7vw,8rem)] font-bold leading-[0.9] tracking-[-0.05em] text-white">
            <motion.span
              initial={{ opacity: 0, y: 50, filter: 'blur(8px)' }}
              animate={visible ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.8, delay: revealDelay(0.3), ease: [0.25, 0.46, 0.45, 0.94] }}
              className="block"
            >
              VAIBHAV
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 50, filter: 'blur(8px)' }}
              animate={visible ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.8, delay: revealDelay(0.45), ease: [0.25, 0.46, 0.45, 0.94] }}
              className="block"
            >
              PANDEY<span className="text-primary">.</span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: revealDelay(0.85) }}
            className="text-lg text-gray-400 max-w-xl leading-relaxed"
          >
            {profile.bio[0]}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: revealDelay(1.05) }}
            className="flex flex-wrap items-center gap-4 pt-7"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2 group shadow-lg shadow-white/5 hover:-translate-y-0.5"
            >
              <span>View Projects</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="bg-white/8 hover:bg-white/15 text-white border border-white/15 px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2 hover:-translate-y-0.5"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: revealDelay(1.2) }}
            className="flex items-center gap-6 pt-6 text-gray-500"
          >
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="GitHub profile">
              <Github size={22} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn profile">
              <Linkedin size={22} />
            </a>
            <span className="text-xs font-mono text-gray-600 border-l border-white/10 pl-6">
              Open to internships • 2026
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: visualY, opacity: visualOpacity }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={visible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: revealDelay(0.6), ease: 'easeOut' }}
          className="relative hidden lg:block h-[520px]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/25 to-accent/20 rounded-3xl blur-3xl opacity-40" />
          <div className="absolute inset-0 glass rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />

            <div className="absolute top-7 left-7 text-white/25 font-mono text-[11px] leading-relaxed">
              <span className="text-primary/60">const</span> developer ={' '}
              <span className="text-secondary/60">&quot;Vaibhav Pandey&quot;</span>;
              <br />
              <span className="text-primary/60">const</span> stack = [
              <span className="text-yellow-500/50">&quot;Java&quot;</span>,{' '}
              <span className="text-yellow-500/50">&quot;React&quot;</span>,{' '}
              <span className="text-yellow-500/50">&quot;Python&quot;</span>];
              <br />
              <span className="text-primary/60">const</span> focus = [
              <span className="text-green-400/50">&quot;AI/ML&quot;</span>,{' '}
              <span className="text-green-400/50">&quot;OpenCV&quot;</span>];
            </div>

            <div className="relative w-52 h-52 flex items-center justify-center">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="absolute inset-0 rounded-full border border-primary/20" />
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: 'linear' }} className="absolute inset-6 rounded-full border border-secondary/20" />
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }} className="absolute inset-12 rounded-full border border-accent/20" />

              <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }} className="absolute inset-0 rounded-full">
                <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_theme(colors.primary)] absolute -top-1.5 left-1/2 -translate-x-1/2" />
              </motion.div>

              <div className="text-center z-10">
                <div className="text-3xl font-display font-bold text-white tracking-tighter">AI/ML</div>
                <div className="text-xs font-mono text-primary/70 mt-1">+ Full Stack</div>
              </div>
            </div>

            <div className="absolute bottom-7 right-7 text-white/25 font-mono text-[11px] text-right leading-relaxed">
              System.out.println(&quot;Building the future&quot;);
              <br />
              model.predict(input_tensor);
              <br />
              <span className="text-green-400/50">// Deepfake Sentinel ✓</span>
            </div>

            {[
              { label: 'Spring Boot', pos: 'top-8 right-8' },
              { label: 'React', pos: 'bottom-20 left-8' },
              { label: 'ONNX', pos: 'bottom-8 right-20' },
            ].map(({ label, pos }) => (
              <div key={label} className={`absolute ${pos} text-[10px] font-mono px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-gray-400`}>
                {label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
