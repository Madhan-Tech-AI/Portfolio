import React, { useState } from 'react';
import { Mail, ArrowUpRight, Github, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionDivider from './SectionDivider';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const mailtoLink = `mailto:madhankumar070406@gmail.com?subject=Inquiry from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="relative bg-light overflow-hidden">
      <SectionDivider number="07" title="Contact & Connect" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 pb-20 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Left Column: Huge CTA & Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl sm:text-7xl lg:text-[7rem] font-serif font-bold text-dark tracking-tighter leading-[0.85] mb-12">
                Let's<br />
                <span className="text-primary italic font-light">Talk.</span>
              </h2>
              <div className="w-12 h-px bg-primary/40 mb-12"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-12"
            >
              <div>
                <p className="text-xs font-sans uppercase tracking-[0.2em] font-bold text-primary mb-4 border-b border-dark/10 pb-4 inline-block w-full max-w-xs">
                  Direct Line
                </p>
                <div className="flex flex-col gap-2 pt-2">
                  <a href="mailto:madhankumar070406@gmail.com" className="text-2xl sm:text-3xl font-serif text-dark hover:text-primary transition-colors inline-block w-fit">
                    madhankumar070406@gmail.com
                  </a>
                  <a href="tel:+919342745299" className="text-xl font-serif text-dark/70 hover:text-primary transition-colors inline-block w-fit">
                    +91 93427 45299
                  </a>
                </div>
              </div>

              <div>
                <p className="text-xs font-sans uppercase tracking-[0.2em] font-bold text-primary mb-4 border-b border-dark/10 pb-4 inline-block w-full max-w-xs">
                  Social Presence
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <a
                    href="https://www.linkedin.com/in/madhan-kumar-p-759402324/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Madhan Kumar P on LinkedIn"
                    className="flex items-center gap-2 p-3 pr-5 border border-dark/10 rounded-full text-dark hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 text-sm font-sans"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/Madhan-Tech-AI"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Madhan Kumar P on GitHub"
                    className="flex items-center gap-2 p-3 pr-5 border border-dark/10 rounded-full text-dark hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 text-sm font-sans"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.instagram.com/_iam_maddy._/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Madhan Kumar P on Instagram @_iam_maddy._"
                    className="flex items-center gap-2 p-3 pr-5 border border-dark/10 rounded-full text-dark hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 text-sm font-sans"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 sm:p-12 rounded-[2rem] border border-dark/5"
          >
            <h3 className="text-3xl font-serif font-bold text-dark mb-8">Send a Message<span className="text-primary">.</span></h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="peer w-full bg-transparent border-b border-dark/20 py-4 text-dark font-sans placeholder-transparent focus:border-primary focus:outline-none transition-colors"
                  placeholder="Name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 top-4 text-dark/40 font-sans text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-primary"
                >
                  Your Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="peer w-full bg-transparent border-b border-dark/20 py-4 text-dark font-sans placeholder-transparent focus:border-primary focus:outline-none transition-colors"
                  placeholder="Email"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 top-4 text-dark/40 font-sans text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-primary"
                >
                  Email Address
                </label>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="peer w-full bg-transparent border-b border-dark/20 py-4 text-dark font-sans resize-none placeholder-transparent focus:border-primary focus:outline-none transition-colors"
                  placeholder="Message"
                />
                <label
                  htmlFor="message"
                  className="absolute left-0 top-4 text-dark/40 font-sans text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-primary"
                >
                  Project Details
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full py-4 bg-dark text-white rounded-xl font-sans font-medium uppercase tracking-[0.2em] text-xs hover:bg-primary transition-colors disabled:opacity-50 flex items-center justify-center gap-3 overflow-hidden relative"
              >
                <div className="absolute inset-0 w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full"></div>
                <span className="relative flex items-center gap-2">
                  {isSubmitting ? 'Transmitting...' : 'Submit Inquiry'}
                  {!isSubmitting && <ArrowUpRight className="w-4 h-4" />}
                </span>
              </button>
            </form>
          </motion.div>

        </div>
      </div>

      {/* Massive Dark Footer */}
      <footer className="bg-dark rounded-t-[3rem] px-6 sm:px-8 lg:px-12 pt-20 pb-10 mt-20 relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col items-center">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[12vw] sm:text-[10vw] font-serif font-bold text-white leading-none tracking-tighter mix-blend-difference"
          >
            Madhan<br />
            <span className="text-primary italic font-light ml-12 sm:ml-24">Kumar P.</span>
          </motion.h2>

          {/* Footer Social Identity — SEO Trust Signals */}
          <div className="w-full flex flex-wrap justify-center gap-6 mt-16 mb-4">
            <a
              href="https://www.linkedin.com/in/madhan-kumar-p-759402324/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Madhan Kumar P — LinkedIn"
              className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-xs font-sans uppercase tracking-widest group"
            >
              <Linkedin className="w-4 h-4 group-hover:text-primary" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/Madhan-Tech-AI"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Madhan Kumar P — GitHub"
              className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-xs font-sans uppercase tracking-widest group"
            >
              <Github className="w-4 h-4 group-hover:text-primary" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.instagram.com/_iam_maddy._/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Madhan Kumar P — Instagram @_iam_maddy._"
              className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-xs font-sans uppercase tracking-widest group"
            >
              <Instagram className="w-4 h-4 group-hover:text-primary" />
              <span>Instagram</span>
            </a>
            <a
              href="mailto:madhankumar070406@gmail.com"
              aria-label="Email Madhan Kumar P"
              className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-xs font-sans uppercase tracking-widest group"
            >
              <Mail className="w-4 h-4 group-hover:text-primary" />
              <span>Email</span>
            </a>
          </div>

          <div className="w-full flex flex-col md:flex-row items-center justify-between mt-4 pt-10 border-t border-white/10 gap-6">
            <span className="text-white/40 text-xs font-sans uppercase tracking-widest">
              © {currentYear} ALL RIGHTS RESERVED
            </span>

            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white hover:text-primary font-sans text-xs uppercase tracking-widest transition-colors flex items-center gap-2 group">
              Back to Top
              <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </button>

            <span className="text-white/40 text-xs font-sans uppercase tracking-widest text-right">
              DESIGN BY M.K.P
            </span>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
