import { useScrollReveal } from '@/hooks/useScrollReveal';
import { achievements } from '@/data/portfolio';
import { Trophy, Code, Award, Medal, Star, Sparkles, Cloud, Lightbulb, type LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Trophy,
  Code,
  Award,
  Medal,
  Star,
  Sparkles,
  Cloud,
  Lightbulb,
};

export function Achievements() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="achievements" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
        >
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-accent-600 dark:text-accent-400 tracking-wider uppercase">Milestones</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-2">Achievements</h2>
            <div className="mt-4 h-1 w-20 mx-auto bg-gradient-to-r from-accent-400 to-teal-500 rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((item, idx) => {
              const Icon = iconMap[item.icon] ?? Trophy;
              return (
                <div
                  key={idx}
                  className="relative glass rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group overflow-hidden"
                  style={{ transitionDelay: `${idx * 70}ms` }}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent-500/5 to-teal-500/5 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-700" />

                  <div className="relative">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500/20 to-teal-500/20 flex items-center justify-center text-accent-500 group-hover:scale-110 transition-transform">
                        <Icon size={24} />
                      </div>
                      <span className="text-xs font-medium text-slate-400 dark:text-slate-500">{item.date}</span>
                    </div>
                    <h3 className="font-display font-semibold text-base text-slate-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
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
