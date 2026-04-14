import React from 'react';
import { motion } from 'framer-motion';
import SectionDivider from './SectionDivider';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-light relative pb-20 lg:pb-32">
      <SectionDivider number="01" title="About The Engineer" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Responsive Heading spanning full width to push content uniformly */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 lg:mb-24"
        >
          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-dark tracking-tight leading-none mb-6">
            Beyond<br />the <span className="text-primary italic">Code.</span>
          </h2>
          <div className="w-12 h-px bg-primary/40"></div>
        </motion.div>

        {/* Content aligned via Grid & Flexbox */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

          {/* Left Column: Image Area */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="relative w-full aspect-[3/4] hidden lg:block group">
                {/* Soft glow that appears on hover */}
                <div className="absolute inset-0 translate-x-4 translate-y-4 bg-primary/20 rounded-[3rem] blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>

                {/* Structural Backdrop (Rotated) */}
                <div className="absolute inset-0 bg-dark/5 rounded-[2rem] border border-dark/10 transform -rotate-3 group-hover:rotate-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none"></div>

                {/* Crisp Image Container */}
                <div className="absolute inset-0 overflow-hidden rounded-[2rem] bg-dark/5 shadow-2xl transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2 group-hover:translate-x-2">
                  <img
                    src="/WhatsApp Image 2026-04-14 at 2.42.41 PM (1).jpeg"
                    alt="Developer Portrait"
                    className="w-full h-full object-cover grayscale mix-blend-multiply opacity-90 transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 origin-center"
                  />
                  {/* Delicate inner lighting rim */}
                  <div className="absolute inset-0 rounded-[2rem] border border-white/40 pointer-events-none mix-blend-overlay"></div>
                </div>
              </div>

              {/* Mobile Image Layer */}
              <div className="w-full aspect-video overflow-hidden rounded-3xl border border-dark/10 shadow-xl lg:hidden block">
                <img src="/WhatsApp Image 2026-04-14 at 2.42.41 PM (1).jpeg" alt="Developer Portrait" className="w-full h-full object-cover grayscale mix-blend-multiply opacity-90" />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Text & Metrics aligned dynamically */}
          <div className="lg:col-span-7 flex flex-col justify-start space-y-12 lg:space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-dark/80 leading-relaxed text-lg sm:text-2xl"
              style={{ fontFamily: "'Anthela', serif" }}
            >
              <p className="first-letter:text-7xl lg:first-letter:text-8xl first-letter:font-serif first-letter:text-primary first-letter:mr-4 first-letter:float-left first-letter:leading-[0.8] mb-8">
                Passionate Web Developer with a B.Tech in Artificial Intelligence and Data Science and 1 year of experience at UNAI Tech. Skilled in delivering responsive, scalable, and AI-powered web solutions.
              </p>
              <p>
                Seeking to apply my web development and AI expertise to create innovative, user-friendly products in a growth-driven company. I bridge the gap between deep technical implementation and high-level, human-centric visual design.
              </p>
            </motion.div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 border-t border-dark/10 pt-12 gap-8 lg:gap-12">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <span className="block text-4xl sm:text-5xl font-serif text-primary mb-2 sm:mb-3">2+</span>
                <span className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.2em] text-dark/50 font-bold">Years Experience</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <span className="block text-4xl sm:text-5xl font-serif text-primary mb-2 sm:mb-3">10+</span>
                <span className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.2em] text-dark/50 font-bold">Projects Built</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="col-span-2 md:col-span-1 border-t md:border-t-0 border-dark/10 pt-8 md:pt-0">
                <span className="block text-4xl sm:text-5xl font-serif text-primary mb-2 sm:mb-3">5+</span>
                <span className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.2em] text-dark/50 font-bold">Certifications</span>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
