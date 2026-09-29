import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { certifications } from '../data/certifications';

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 scroll-mt-20">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xs font-mono tracking-[0.3em] text-primary/70 uppercase mb-4"
      >
        06 — Certifications
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="text-4xl md:text-5xl font-display font-bold text-white mb-12 leading-tight"
      >
        What I&apos;ve <span className="text-primary">Learned</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.1, ease: 'easeOut' }}
            whileHover={{ y: -5, borderColor: 'rgba(14,165,233,0.35)' }}
            className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 transition-all duration-300 group flex flex-col"
          >
            <div className="mb-4 p-3 bg-primary/10 rounded-xl w-fit group-hover:bg-primary/20 transition-colors">
              <Award size={22} className="text-primary group-hover:scale-110 transition-transform" />
            </div>

            <h3 className="text-base font-bold text-white mb-1 group-hover:text-primary transition-colors leading-snug">
              {cert.title}
            </h3>
            <p className="text-xs font-mono text-primary/70 mb-2">{cert.organization}</p>
            <p className="text-sm text-gray-500 mb-6 flex-1 leading-relaxed">{cert.description}</p>

            <a
              href={cert.link}
              className="inline-flex items-center space-x-2 text-xs font-mono text-gray-500 hover:text-primary transition-colors"
            >
              <span>View Credential</span>
              <ExternalLink size={12} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
