import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, FolderGit2, Sparkles } from 'lucide-react';
import { Github } from './BrandIcons';

const ProjectCard = ({ project }) => {
  const isFlagship = project.featured || project.id === 'historian';

  return (
    <motion.div
      whileHover={{ y: -8, borderColor: 'rgba(14,165,233,0.45)' }}
      transition={{ duration: 0.25 }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 transition-colors ${
        isFlagship ? 'border-primary/30 bg-primary/[0.04]' : 'border-white/10 bg-white/[0.03]'
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 mb-5 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-primary/15 p-3 text-primary transition-transform duration-200 group-hover:scale-110">
            <FolderGit2 size={22} />
          </div>
          {project.status && (
            <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-primary">
              {project.status}
            </span>
          )}
        </div>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 transition-colors hover:text-white"
            aria-label={project.github ? `View ${project.title} on GitHub` : `Open ${project.title}`}
          >
            <Github size={20} />
          </a>
        )}
      </div>

      <div className="relative z-10 flex flex-1 flex-col">
        <h3 className={`font-display font-semibold leading-snug text-white ${project.id === 'historian' ? 'text-3xl' : 'text-lg'} ${isFlagship ? 'tracking-[-0.04em]' : ''}`}>
          {project.title}
        </h3>

        {project.subtitle && (
          <p className="mb-3 mt-1 text-sm font-medium text-primary/80">{project.subtitle}</p>
        )}

        {project.aiAssistant && (
          <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-gray-300">
            <Sparkles size={11} className="text-primary" />
            {project.aiAssistant}
          </div>
        )}

        <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-500">{project.description}</p>

        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span key={tech} className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-mono text-gray-400">
              {tech}
            </span>
          ))}
        </div>

        {(project.demo || project.github || project.caseStudy) && (
          <div className="mt-auto flex flex-wrap gap-2">
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white px-3.5 py-2 text-xs font-semibold text-black transition-all hover:-translate-y-0.5">
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-medium text-white transition-colors hover:border-white/20 hover:bg-white/10">
                <Github size={14} />
                GitHub
              </a>
            )}
            {project.caseStudy && (
              <a href={project.caseStudy} className="inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/10 px-3.5 py-2 text-xs font-medium text-primary transition-colors hover:border-primary/40">
                <ArrowUpRight size={14} />
                Case Study
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
