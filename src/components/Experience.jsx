import { motion } from 'framer-motion';
import { experience } from '../data/experience';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 scroll-mt-20">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xs font-mono tracking-[0.3em] text-primary/70 uppercase mb-4"
      >
        05 — Experience
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="text-4xl md:text-5xl font-display font-bold text-white mb-16 leading-tight"
      >
        What I&apos;ve <span className="text-primary">Worked On</span>
      </motion.h2>

      {/* Timeline */}
      <div className="relative pl-8 md:pl-0">
        {/* Vertical line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          style={{ originY: 0 }}
          className="absolute left-3 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary via-secondary to-transparent"
        />

        <div className="space-y-12">
          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.15 }}
              className="relative flex items-start md:items-center justify-start md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-7 h-7 rounded-full border border-primary/50 bg-background shadow-[0_0_12px_theme(colors.primary/0.3)] z-10 -ml-3.5 md:ml-0">
                <Briefcase size={12} className="text-primary" />
              </div>

              {/* Card */}
              <div className="ml-8 md:ml-0 w-full md:w-[calc(50%-2.5rem)] p-6 bg-white/[0.03] rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 group-hover:bg-white/[0.05]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1">
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <span className="text-primary text-xs font-mono shrink-0">{item.date}</span>
                </div>
                <p className="text-gray-400 text-sm font-medium mb-3">{item.role}</p>
                <p className="text-gray-500 text-sm mb-5 leading-relaxed">{item.description}</p>

                <div className="flex flex-wrap gap-2">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
