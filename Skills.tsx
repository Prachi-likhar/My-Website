import { useScrollReveal } from '@/hooks/useScrollReveal';
import { skillCategories } from '@/data/portfolio';
import { Code2, Globe, Wrench, Brain, type LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Globe,
  Wrench,
  Brain,
};

export function Skills() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
        >
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-accent-600 dark:text-accent-400 tracking-wider uppercase">What I work with</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-2">Skills & Tech Stack</h2>
            <div className="mt-4 h-1 w-20 mx-auto bg-gradient-to-r from-accent-400 to-teal-500 rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, idx) => {
              const Icon = iconMap[category.icon] ?? Code2;
              return (
                <div
                  key={category.title}
                  className="glass rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group"
                  style={{ transitionDelay: `${idx * 80}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500/20 to-teal-500/20 flex items-center justify-center text-accent-500 mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/50 hover:border-accent-500/40 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
