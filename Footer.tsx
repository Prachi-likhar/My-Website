import { Code2, Github, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { profile, socials } from '@/data/portfolio';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-200/60 dark:border-slate-700/50 bg-white/50 dark:bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-400 to-teal-600 flex items-center justify-center text-white">
              <Code2 size={16} />
            </span>
            <span className="font-display font-bold text-slate-800 dark:text-white">{profile.name}</span>
          </div>

          <div className="flex items-center gap-3">
            <a href={socials.github} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-accent-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all" aria-label="GitHub">
              <Github size={17} />
            </a>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-accent-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all" aria-label="LinkedIn">
              <Linkedin size={17} />
            </a>
            <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-accent-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all" aria-label="Instagram">
              <Instagram size={17} />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-lg glass text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-accent-500 transition-all"
          >
            Back to top
            <ArrowUp size={16} />
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200/60 dark:border-slate-700/50 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Designed & built with care by {profile.name}. © {new Date().getFullYear()} — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
