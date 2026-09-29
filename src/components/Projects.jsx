import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const caseStudyCards = [
  {
    id: 'problem',
    title: '01 — Problem',
    text: 'Organizational knowledge was scattered across conversations, documents, and team workflows, making it difficult to retrieve the right context quickly.'
  },
  {
    id: 'solution',
    title: '02 — Solution',
    text: 'Historian centralizes organizational memory and pairs it with a conversational AI layer that helps users find and use relevant information faster.'
  },
  {
    id: 'harvey',
    title: '03 — Harvey AI Assistant',
    text: 'Harvey helps users interact with institutional knowledge through natural language, contextual retrieval, and guided knowledge discovery.'
  },
  {
    id: 'features',
    title: '04 — Key Features',
    text: 'Secure access, admin controls, knowledge search, memory context, enterprise dashboard, and role-based user management all support structured knowledge workflows.'
  },
  {
    id: 'architecture',
    title: '05 — Architecture',
    text: 'The system follows a lightweight frontend + API + AI interaction model, combining a modern UI with a retrieval-oriented knowledge layer and secure access controls.'
  },
  {
    id: 'stack',
    title: '06 — Tech Stack',
    text: 'React.js, JavaScript, Vite, Tailwind CSS, REST APIs, and authentication patterns are used to deliver a responsive enterprise experience.'
  },
  {
    id: 'challenges',
    title: '07 — Challenges',
    text: 'Balancing enterprise usability, secure access, and intelligent context retrieval was the key design challenge while keeping the interface fast and clear.'
  },
  {
    id: 'outcome',
    title: '08 — Outcome',
    text: 'The product demonstrates a strong enterprise-focused AI memory system that improves access to institutional knowledge and supports everyday decision-making.'
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filters = ['All', 'AI/ML', 'Java', 'Full Stack', 'Frontend'];

  const orderedProjects = [...projects].sort((a, b) => {
    const rank = { historian: 0, 'deepfake-sentinel': 1, 'ai-chatbot': 2 };
    return (rank[a.id] ?? 99) - (rank[b.id] ?? 99);
  });

  const filteredProjects = orderedProjects.filter((project) => {
    if (filter === 'All') return true;
    return project.category.includes(filter);
  });

  return (
    <section id="projects" className="py-24 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-4 text-xs font-mono uppercase tracking-[0.3em] text-primary/70"
      >
        04 — Projects
      </motion.div>

      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-4xl font-display font-bold leading-tight text-white md:text-5xl"
        >
          Flagship <span className="text-primary">Products</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2"
        >
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                filter === f
                  ? 'bg-primary text-black shadow-[0_0_20px_theme(colors.primary/0.4)]'
                  : 'border border-white/10 bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>
      </div>

      <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.some((project) => project.id === 'historian') && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8"
        >
          <div className="mb-6 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary/70">Historian</p>
              <h3 className="mt-3 text-2xl font-display font-bold text-white md:text-3xl">Enterprise Memory Intelligence</h3>
            </div>
            <div className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.22em] text-primary">
              Harvey AI
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {caseStudyCards.map((card) => (
              <div key={card.id} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="mb-3 text-[10px] font-mono uppercase tracking-[0.22em] text-gray-500">{card.title}</p>
                <p className="text-sm leading-relaxed text-gray-300">{card.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
