import { useScrollReveal } from '@/hooks/useScrollReveal';
import { volunteering } from '@/data/portfolio';
import { HeartHandshake, GraduationCap, GitBranch, Droplet, type LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  HeartHandshake,
  GraduationCap,
  GitBranch,
  Droplet,
};

export function Volunteering() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="volunteering" className="py-20 sm:py-28 relative bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
        >
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-accent-600 dark:text-accent-400 tracking-wider uppercase">Giving back</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-2">NSS & Volunteering</h2>
            <div className="mt-4 h-1 w-20 mx-auto bg-gradient-to-r from-accent-400 to-teal-500 rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {volunteering.map((item, idx) => {
              const Icon = iconMap[item.icon] ?? HeartHandshake;
              return (
                <div
                  key={idx}
                  className="glass rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group flex gap-5"
                  style={{ transitionDelay: `${idx * 80}ms` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-500/15 to-teal-500/15 flex items-center justify-center text-accent-500 shrink-0 group-hover:scale-110 transition-transform">
                    <Icon size={26} />
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                      <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white">{item.title}</h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-accent-600 dark:text-accent-400 font-medium mb-3">
                      <span>{item.organization}</span>
                      <span className="text-slate-300 dark:text-slate-600">•</span>
                      <span className="text-slate-500 dark:text-slate-400 font-normal">{item.duration}</span>
                    </div>
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
