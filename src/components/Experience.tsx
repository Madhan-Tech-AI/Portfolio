import React from 'react';
import { motion } from 'framer-motion';
import SectionDivider from './SectionDivider';

const experiences = [
  {
    title: 'AI & Full Stack Developer',
    company: 'Story Seed Studio',
    period: 'Dec 2025 – Present',
    location: 'Chennai',
    responsibilities: [
      'Spearheading the development of AI-driven products and full-stack solutions.',
      'Designing scalable architectures and automating workflows to enhance efficiency.',
      'Contributing to technical innovation and product strategy in a fast-paced environment.'
    ],
    current: true
  },
  {
    title: 'Developer & Co-Ordinator',
    company: 'UNAI TECH',
    period: 'Jan 2024 – Present',
    location: 'Chennai',
    responsibilities: [
      'Delivered client websites, web apps, and portfolios with React, Node.js, and Tailwind.',
      'Led internal platforms with interactive UI and progress tracking systems.',
      'Built scalable, performance-optimized digital solutions.'
    ],
    current: true
  },
  {
    title: 'Software Intern',
    company: 'Xenovex Technologies',
    period: 'Jul 2025 – Jul 2025',
    location: 'Chennai',
    responsibilities: [
      'Developed a portfolio application with authentication and content management features.',
      'Gained applied experience with Angular frameworks and system architecture.'
    ],
    current: false
  },
  {
    title: 'AI Intern',
    company: 'Thirumoolar IT Solutions',
    period: 'Mar 2025 – May 2025',
    location: 'Remote',
    responsibilities: [
      'Built ML models for classification & prediction using Python and Scikit-learn.',
      'Focused heavily on NLP and Computer Vision tasks like token classification.'
    ],
    current: false
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="bg-light relative pb-20 lg:pb-32">
      <SectionDivider number="04" title="Professional Experience" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          {/* Header Column */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="sticky top-32"
            >
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-dark tracking-tight leading-none mb-6">
                Professional<br/>
                <span className="text-primary italic">Journey.</span>
              </h2>
              <div className="w-12 h-px bg-primary/40 mb-8"></div>
              <p className="text-dark/60 font-sans text-sm leading-relaxed max-w-xs">
                A timeline of my professional roles, combining engineering logic with strategic business value.
              </p>
            </motion.div>
          </div>

          {/* List Column */}
          <div className="lg:w-2/3 flex flex-col pt-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative border-b border-dark/10 pb-16 mb-16 last:mb-0 last:border-b-0"
              >
                
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-8">
                  <div className="flex items-center gap-4 mb-2 md:mb-0">
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-dark group-hover:text-primary transition-colors">
                      {exp.company}
                    </h3>
                    {exp.current && (
                      <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-sans font-bold uppercase tracking-wider rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  
                  <div className="flex flex-col md:items-end">
                    <span className="text-dark font-sans font-medium">{exp.title}</span>
                    <span className="text-dark/40 font-sans text-xs uppercase tracking-wider mt-1">{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-4">
                  {exp.responsibilities.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-dark/70 font-sans text-sm sm:text-base leading-relaxed max-w-2xl">
                      <span className="text-primary mt-1.5 opacity-50 text-xs">◆</span>
                      {req}
                    </li>
                  ))}
                </ul>

                {/* Subtle Hover Reveal line */}
                <div className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-700 group-hover:w-full"></div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;