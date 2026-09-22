import { useScrollReveal } from '@/hooks/useScrollReveal';
import { certificates } from '@/data/portfolio';
import { BadgeCheck, Calendar, Hash } from 'lucide-react';

export function Certificates() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="certificates" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
        >
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-accent-600 dark:text-accent-400 tracking-wider uppercase">Lifelong learning</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-2">Certificates</h2>
            <div className="mt-4 h-1 w-20 mx-auto bg-gradient-to-r from-accent-400 to-teal-500 rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {certificates.map((cert, idx) => (
              <div
                key={idx}
                className="glass rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-500/20 to-teal-500/20 flex items-center justify-center text-accent-500 mb-3 group-hover:scale-110 transition-transform">
                  <BadgeCheck size={20} />
                </div>
                <h3 className="font-display font-semibold text-sm text-slate-900 dark:text-white mb-1 leading-snug">{cert.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{cert.issuer}</p>
                <div className="flex flex-col gap-1.5 text-xs text-slate-400 dark:text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={12} className="text-accent-500" />
                    {cert.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Hash size={12} className="text-accent-500" />
                    <span className="font-mono truncate">{cert.credentialId}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
