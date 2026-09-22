import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { profile, socials } from '@/data/portfolio';
import { Mail, MapPin, Github, Linkedin, Instagram, Send, CheckCircle2 } from 'lucide-react';

export function Contact() {
  const { ref, isVisible } = useScrollReveal();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name} (${formData.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
        >
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-accent-600 dark:text-accent-400 tracking-wider uppercase">Let's connect</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-2">Get in Touch</h2>
            <div className="mt-4 h-1 w-20 mx-auto bg-gradient-to-r from-accent-400 to-teal-500 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Left: Contact info */}
            <div className="flex flex-col gap-6">
              <div className="glass rounded-2xl p-6 sm:p-8 shadow-lg">
                <h3 className="font-display font-semibold text-xl text-slate-900 dark:text-white mb-2">Let's talk!</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  Whether you have a project idea, a collaboration opportunity, or just want to say hi — my inbox is always open. I'll do my best to get back to you!
                </p>

                <div className="space-y-4">
                  <a href={`mailto:${profile.email}`} className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-accent-500/10 flex items-center justify-center text-accent-500 group-hover:scale-110 transition-transform">
                      <Mail size={18} />
                    </div>
                    <span className="text-sm text-slate-700 dark:text-slate-300 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">{profile.email}</span>
                  </a>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent-500/10 flex items-center justify-center text-accent-500">
                      <MapPin size={18} />
                    </div>
                    <span className="text-sm text-slate-700 dark:text-slate-300">{profile.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-slate-200/60 dark:border-slate-700/50">
                  <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">Follow me:</span>
                  <a href={socials.github} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-accent-500 hover:border-accent-500/40 transition-all hover:-translate-y-1" aria-label="GitHub">
                    <Github size={17} />
                  </a>
                  <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-accent-500 hover:border-accent-500/40 transition-all hover:-translate-y-1" aria-label="LinkedIn">
                    <Linkedin size={17} />
                  </a>
                  <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-accent-500 hover:border-accent-500/40 transition-all hover:-translate-y-1" aria-label="Instagram">
                    <Instagram size={17} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Contact form */}
            <div className="glass rounded-2xl p-6 sm:p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500/40 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500/40 transition-all"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500/40 transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent-500 to-teal-600 text-white font-medium text-sm shadow-lg shadow-accent-500/25 hover:shadow-xl hover:shadow-accent-500/30 hover:-translate-y-0.5 transition-all"
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 size={18} />
                      Message sent!
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
