import { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Instagram, MapPin, Mail } from 'lucide-react';
import { profile, socials } from '@/data/portfolio';

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-accent-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(16,185,129,1) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent-400/10 dark:bg-accent-500/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-400/10 dark:bg-teal-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className={`text-center lg:text-left ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-700 dark:text-accent-300 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500" />
              </span>
              Available for internships & collaborations
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white leading-tight mb-4">
              Hi, I'm <span className="text-gradient">{profile.name}</span>
            </h1>

            <p className="font-display text-lg sm:text-xl text-accent-600 dark:text-accent-400 font-medium mb-4">
              {profile.role}
            </p>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              {profile.tagline}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <MapPin size={16} className="text-accent-500" />
                {profile.location}
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <Mail size={16} className="text-accent-500" />
                {profile.email}
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-3">
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl glass flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-accent-500 hover:border-accent-500/40 transition-all hover:-translate-y-1"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl glass flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-accent-500 hover:border-accent-500/40 transition-all hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl glass flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-accent-500 hover:border-accent-500/40 transition-all hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="ml-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-accent-500 to-teal-600 text-white font-medium text-sm shadow-lg shadow-accent-500/25 hover:shadow-xl hover:shadow-accent-500/30 hover:-translate-y-0.5 transition-all"
              >
                Get in touch
              </button>
            </div>
          </div>

          {/* Right: Visual element */}
          <div className={`hidden lg:flex justify-center ${mounted ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 -m-12 rounded-full border border-accent-500/10 animate-pulse" />
              <div className="absolute inset-0 -m-6 rounded-full border border-accent-500/15" />

              {/* Avatar card */}
              <div className="relative w-72 h-72 rounded-3xl glass shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 to-teal-500/10" />
                <div className="text-8xl font-display font-bold text-gradient">{profile.avatarInitials}</div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 glass rounded-xl px-3 py-2 shadow-lg animate-bounce-slow">
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">CSE '29</span>
                </div>
                <div
                  className="absolute -bottom-4 -left-4 glass rounded-xl px-3 py-2 shadow-lg animate-bounce-slow"
                  style={{ animationDelay: '1s' }}
                >
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">IET DAVV Indore</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2">
          <button onClick={scrollToAbout} className="text-slate-400 dark:text-slate-500 hover:text-accent-500 transition-colors" aria-label="Scroll down">
            <ArrowDown size={20} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
