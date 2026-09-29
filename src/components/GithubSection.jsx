import { motion } from 'framer-motion';
import { Star, GitFork, ArrowRight } from 'lucide-react';
import { Github } from './BrandIcons';

const GithubSection = () => {
  return (
    <section id="github" className="py-20 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass rounded-3xl border border-white/10 p-8 md:p-12 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50"></div>
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="text-xs font-mono tracking-[0.3em] text-primary/70 uppercase mb-6">
            08 — Open Source
          </div>

          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 mb-6 text-white">
            <Github size={32} />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Built in <span className="text-primary">Public.</span>
          </h2>
          
          <p className="text-gray-400 mb-8 text-lg">
            Explore my projects, experiments, and development work on GitHub. I regularly push code and contribute to open source.
          </p>
          
          <a href="https://github.com/vaibhav8772866-stack" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-lg font-medium transition-colors">
            <span>Visit my GitHub</span>
            <ArrowRight size={18} />
          </a>
          
          <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto mt-12 text-gray-500">
             <div className="flex flex-col items-center p-4 glass rounded-xl border border-white/5">
                <Star size={20} className="mb-2 text-primary" />
                <span className="text-xs font-mono">Starred</span>
             </div>
             <div className="flex flex-col items-center p-4 glass rounded-xl border border-white/5">
                <GitFork size={20} className="mb-2 text-primary" />
                <span className="text-xs font-mono">Forked</span>
             </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default GithubSection;
