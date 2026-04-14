import React from 'react';
import { motion } from 'framer-motion';
import SectionDivider from './SectionDivider';

const education = [
  {
    degree: 'B.Tech – Artificial Intelligence & Data Science',
    institution: 'Gojan School of Business and Technology',
    period: '2023 – Present',
    grade: '',
    current: true
  },
  {
    degree: 'Higher Secondary Education',
    institution: 'Good Shepherd Matriculation Higher Secondary School',
    period: '2022 – 2023',
    grade: '75%',
    current: false
  }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="bg-light relative pb-20 lg:pb-32">
      <SectionDivider number="05" title="Academic Foundation" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-32">
          {/* Header Column */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="sticky top-32 lg:text-right"
            >
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-dark tracking-tight leading-none mb-6">
                Academic<br/>
                <span className="text-primary italic">Foundation.</span>
              </h2>
              <div className="w-12 h-px bg-primary/40 mb-8 lg:ml-auto"></div>
              <p className="text-dark/60 font-sans text-sm leading-relaxed max-w-xs lg:ml-auto">
                Continuous learning shapes the core logic behind intelligent systems and effective engineering.
              </p>
            </motion.div>
          </div>

          {/* List Column */}
          <div className="lg:w-2/3 flex flex-col pt-4">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative border-b border-dark/10 pb-12 mb-12 last:mb-0 last:border-b-0"
              >
                
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                  <div className="flex items-center gap-4 mb-2 md:mb-0">
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-dark group-hover:text-primary transition-colors max-w-lg">
                      {edu.degree}
                    </h3>
                  </div>
                  
                  <div className="flex flex-col md:items-end flex-shrink-0 mt-4 md:mt-0">
                    <span className="text-dark/40 font-sans text-xs uppercase tracking-wider">{edu.period}</span>
                    {edu.current && (
                      <span className="mt-2 px-3 py-1 bg-primary/10 text-primary text-[10px] font-sans font-bold uppercase tracking-wider rounded-full">
                        In Progress
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-dark/70 font-sans font-medium text-lg">{edu.institution}</span>
                  {edu.grade && (
                    <span className="text-primary font-serif font-bold tracking-tight text-xl">{edu.grade}</span>
                  )}
                </div>

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

export default Education;