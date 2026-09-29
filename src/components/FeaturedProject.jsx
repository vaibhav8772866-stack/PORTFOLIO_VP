import { motion } from 'framer-motion';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import { Github } from './BrandIcons';
import { featuredProject } from '../data/projects';

const FeaturedProject = () => {
  return (
    <section id="featured-project" className="py-24 scroll-mt-20">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xs font-mono tracking-[0.3em] text-primary/70 uppercase mb-4"
      >
        03 — Featured Project
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="text-4xl md:text-5xl font-display font-bold text-white mb-12 leading-tight"
      >
        What I <span className="text-primary">Build</span>
      </motion.h2>

      <div className="relative rounded-3xl border border-white/10 overflow-hidden bg-white/[0.02] group hover:border-white/20 transition-colors duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        <div className="grid lg:grid-cols-2 gap-0 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative min-h-[380px] flex items-center justify-center p-8 lg:p-12 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-gray-900/90 to-gray-800" />

            <div className="relative z-10 w-full max-w-sm bg-black/50 border border-white/10 rounded-xl overflow-hidden shadow-2xl backdrop-blur-sm">
              <div className="flex items-center px-4 py-2.5 border-b border-white/10 bg-white/[0.04]">
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="mx-auto text-[10px] text-gray-400 font-mono">Deepfake Sentinel Studio</div>
              </div>

              <div className="p-5 grid grid-cols-2 gap-4">
                <div className="col-span-2 md:col-span-1 h-28 border border-white/10 rounded-lg flex flex-col items-center justify-center bg-white/[0.03] relative overflow-hidden">
                  <ShieldCheck size={32} className="text-primary/30 absolute" />
                  <motion.div animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 border border-primary/20 rounded-lg" />
                  <span className="text-[10px] text-gray-500 z-10 mt-10 font-mono">Scanning Frame…</span>
                </div>

                <div className="col-span-2 md:col-span-1 space-y-3">
                  <div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: '80%' }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }} className="h-full bg-gradient-to-r from-primary to-secondary" />
                    </div>
                    <div className="flex justify-between text-[9px] text-gray-500 font-mono mt-1">
                      <span>Authenticity Score</span>
                      <span className="text-primary">80%</span>
                    </div>
                  </div>

                  <div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: '28%' }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }} className="h-full bg-secondary" />
                    </div>
                    <div className="flex justify-between text-[9px] text-gray-500 font-mono mt-1">
                      <span>Artifacts Detected</span>
                      <span className="text-secondary">Low</span>
                    </div>
                  </div>

                  <div className="mt-3 p-2 bg-green-500/10 border border-green-500/20 rounded-lg text-center text-green-400 text-[10px] font-mono tracking-wider">
                    PREDICTION: REAL
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="p-8 lg:p-12 flex flex-col justify-center"
          >
            <div className="flex flex-wrap gap-2 mb-4">
              {['AI', 'Computer Vision', 'Full Stack'].map((label) => (
                <span key={label} className="text-[10px] font-mono uppercase tracking-[0.2em] px-2.5 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary">
                  {label}
                </span>
              ))}
            </div>
            <div className="text-xs font-mono tracking-widest text-primary/80 uppercase mb-3">
              Featured Project
            </div>
            <h3 className="text-3xl font-display font-bold text-white mb-4">{featuredProject.title}</h3>

            <p className="text-gray-400 mb-5 leading-relaxed text-[15px]">
              {featuredProject.description}
            </p>

            <div className="mb-6 p-3.5 bg-primary/8 border border-primary/20 rounded-xl text-primary text-sm flex items-start space-x-3">
              <ShieldCheck size={18} className="shrink-0 mt-0.5" />
              <span>{featuredProject.benchmark}</span>
            </div>

            <div className="space-y-3 mb-7">
              <h4 className="text-xs font-mono tracking-widest text-gray-500 uppercase">Architecture Signals</h4>
              <ul className="grid sm:grid-cols-2 gap-2">
                {featuredProject.highlights.map((feature) => (
                  <li key={feature} className="text-sm text-gray-300 flex items-center space-x-2">
                    <span className="w-1 h-1 rounded-full bg-secondary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {featuredProject.techStack.map((tech) => (
                <span key={tech} className="text-[11px] font-mono px-3 py-1 bg-white/[0.05] border border-white/10 rounded-full text-gray-400">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a href={featuredProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-white text-black px-5 py-2.5 rounded-xl font-semibold hover:bg-gray-100 transition-colors text-sm">
                <Github size={16} />
                <span>Source Code</span>
              </a>
              <a href="#projects" className="flex items-center space-x-2 bg-white/8 text-white px-5 py-2.5 rounded-xl font-medium hover:bg-white/15 transition-colors border border-white/10 text-sm">
                <ExternalLink size={16} />
                <span>View Project</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
