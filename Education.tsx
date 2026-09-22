import { useScrollReveal } from '@/hooks/useScrollReveal';
import { education } from '@/data/portfolio';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export function Education() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="education" className="py-20 sm:py-28 relative bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
        >
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-accent-600 dark:text-accent-400 tracking-wider uppercase">My journey</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-2">Education</h2>
            <div className="mt-4 h-1 w-20 mx-auto bg-gradient-to-r from-accent-400 to-teal-500 rounded-full" />
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-400 via-teal-500 to-transparent sm:-translate-x-1/2" />

            <div className="space-y-8">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className={`relative flex flex-col sm:flex-row gap-6 sm:gap-0 ${
                    idx % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 sm:left-1/2 top-6 w-3 h-3 rounded-full bg-accent-500 ring-4 ring-accent-500/20 sm:-translate-x-1/2 z-10" />

                  {/* Content */}
                  <div className={`pl-12 sm:pl-0 sm:w-1/2 ${idx % 2 === 0 ? 'sm:pr-8 sm:text-right' : 'sm:pl-8'}`}>
                    <div className="glass rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                      <div className={`flex items-center gap-2 mb-2 ${idx % 2 === 0 ? 'sm:justify-end' : ''}`}>
                        <GraduationCap size={18} className="text-accent-500" />
                        <span className="text-xs font-medium text-accent-600 dark:text-accent-400">{edu.duration}</span>
                      </div>
                      <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white mb-1">{edu.degree}</h3>
                      <div className={`flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 mb-3 ${idx % 2 === 0 ? 'sm:justify-end' : ''}`}>
                        <MapPin size={14} className="text-accent-500" />
                        {edu.institution}
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">{edu.description}</p>
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-500/10 text-accent-700 dark:text-accent-300 text-xs font-medium ${idx % 2 === 0 ? 'sm:ml-auto' : ''}`}>
                        <Calendar size={12} />
                        {edu.gpa}
                      </span>
                    </div>
                  </div>

                  <div className="hidden sm:block sm:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
