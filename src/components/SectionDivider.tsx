import React from 'react';
import { motion } from 'framer-motion';

interface SectionDividerProps {
  number: string;
  title: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ number, title }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="w-full relative py-16 lg:py-24 flex items-center justify-center pointer-events-none"
    >
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-dark/10"></div>
      </div>
      <div className="relative flex justify-center">
        <span className="bg-light px-8 text-[11px] sm:text-xs uppercase tracking-[0.3em] lg:tracking-[0.5em] text-dark/40 font-bold font-sans">
          [ {number} &mdash; <span className="text-primary">{title}</span> ]
        </span>
      </div>
    </motion.div>
  );
};

export default SectionDivider;
