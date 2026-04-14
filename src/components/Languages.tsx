import React from 'react';
import { Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const languages = [
  {
    name: 'English',
    proficiency: 'Professional Working Proficiency',
    level: 90
  },
  {
    name: 'Tamil',
    proficiency: 'Native or Bilingual Proficiency',
    level: 100
  }
];

const Languages: React.FC = () => {
  return (
    <section className="py-20 bg-light border-y border-dark/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-dark tracking-tight leading-none mb-6">
            Linguistics<span className="text-primary">.</span>
          </h2>
          <div className="w-12 h-px bg-primary/40"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {languages.map((language, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group flex flex-col"
              >
                <div className="flex items-end justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-primary" />
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-dark">
                      {language.name}
                    </h3>
                  </div>
                  <span className="text-xs font-sans uppercase tracking-[0.1em] text-dark/70 font-bold">
                    {language.level}%
                  </span>
                </div>
                
                <p className="text-dark/50 text-xs font-sans uppercase tracking-[0.1em] mb-6 block">
                  {language.proficiency}
                </p>

                <div className="w-full bg-dark/5 rounded-full h-px relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${language.level}%` }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-0 left-0 h-px bg-primary"
                  />
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;