import { useScrollReveal } from '@/hooks/useScrollReveal';
import { projects } from '@/data/portfolio';
import { Github, ExternalLink, Star } from 'lucide-react';

export function Projects() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-20 sm:py-28 relative bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
        >
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-accent-600 dark:text-accent-400 tracking-wider uppercase">Things I've built</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-2">Projects</h2>
            <div className="mt-4 h-1 w-20 mx-auto bg-gradient-to-r from-accent-400 to-teal-500 rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="glass rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group flex flex-col"
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500/20 to-teal-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Github size={22} className="text-accent-500" />
                  </div>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-medium">
                      <Star size={12} fill="currentColor" />
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 text-xs font-medium text-slate-600 dark:text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-200/60 dark:border-slate-700/50">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-accent-500 transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  {project.live && project.live !== '#' && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-accent-500 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
