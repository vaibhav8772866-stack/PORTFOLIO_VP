import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import * as Icons from 'lucide-react';
import * as BrandIcons from './BrandIcons';

const Icon = ({ name }) => {
  const LucideIcon = Icons[name] || BrandIcons[name];
  return LucideIcon ? (
    <LucideIcon size={20} className="text-primary shrink-0" />
  ) : (
    <Icons.Code2 size={20} className="text-primary shrink-0" />
  );
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.4, ease: 'easeOut' } },
};

const SkillCategory = ({ title, items, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    className="bg-white/[0.03] p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-colors"
  >
    <h3 className="text-sm font-mono tracking-widest text-gray-500 uppercase mb-5">{title}</h3>
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-2 gap-2.5"
    >
      {items.map((skill) => (
        <motion.div
          key={skill.name}
          variants={itemVariants}
          whileHover={{ y: -3, borderColor: 'rgba(14,165,233,0.4)' }}
          className="flex items-center space-x-2.5 bg-white/[0.04] p-3 rounded-xl border border-white/[0.06] transition-colors cursor-default group"
        >
          <div className="group-hover:scale-110 transition-transform duration-200">
            <Icon name={skill.icon} />
          </div>
          <span className="text-gray-300 text-sm font-medium leading-tight">{skill.name}</span>
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24 scroll-mt-20">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xs font-mono tracking-[0.3em] text-primary/70 uppercase mb-4"
      >
        02 — Skills
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
          What I <span className="text-primary">Work With</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <SkillCategory title="Languages" items={skills.languages} delay={0.05} />
        <SkillCategory title="Frontend" items={skills.frontend} delay={0.1} />
        <SkillCategory title="Backend" items={skills.backend} delay={0.15} />
        <SkillCategory title="AI / ML" items={skills.ai_ml} delay={0.2} />
        <SkillCategory title="Database" items={skills.database} delay={0.25} />
        <SkillCategory title="Tools" items={skills.tools} delay={0.3} />
      </div>
    </section>
  );
};

export default Skills;
