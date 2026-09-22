import { useScrollReveal } from '@/hooks/useScrollReveal';
import { profile } from '@/data/portfolio';
import { Sparkles, Target, Coffee } from 'lucide-react';

const highlights = [
  { icon: Sparkles, label: 'Quick Learner', detail: 'Always exploring new technologies' },
  { icon: Target, label: 'Problem Solver', detail: 'Love algorithmic challenges' },
  { icon: Coffee, label: 'Team Player', detail: 'Enjoy collaborative projects' },
];

export function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
        >
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-accent-600 dark:text-accent-400 tracking-wider uppercase">Get to know me</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-2">About Me</h2>
            <div className="mt-4 h-1 w-20 mx-auto bg-gradient-to-r from-accent-400 to-teal-500 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <div className="glass rounded-2xl p-6 sm:p-8 shadow-lg">
                <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                  {profile.bio}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {highlights.map((item, idx) => (
                <div
                  key={item.label}
                  className="glass rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent-500/10 flex items-center justify-center text-accent-500 shrink-0">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-slate-800 dark:text-white">{item.label}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
