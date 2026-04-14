import React from 'react';
import { motion } from 'framer-motion';
import SectionDivider from './SectionDivider';

interface Skill {
  name: string;
  category: 'technical' | 'soft';
}

const skills: Skill[] = [
  { name: 'Python', category: 'technical' },
  { name: 'HTML, CSS, JavaScript', category: 'technical' },
  { name: 'Git, GitHub', category: 'technical' },
  { name: 'Responsive Web Design', category: 'technical' },
  { name: 'AI Tools', category: 'technical' },
  { name: 'AWS Elastic Beanstalk', category: 'technical' },
  { name: 'Angular (Basics)', category: 'technical' },
  { name: 'Agile Methodologies', category: 'technical' },
  { name: 'SDLC & QA', category: 'technical' },
  { name: 'Algorithmic Thinking', category: 'technical' },
  { name: 'Problem-solving', category: 'soft' },
  { name: 'Technical Communication', category: 'soft' },
  { name: 'Team Collaboration', category: 'soft' },
  { name: 'Technology Trends Analysis', category: 'soft' }
];

interface SkillsProps {
  onSkillClick?: (skill: string) => void;
  selectedSkills?: string[];
}

const Skills: React.FC<SkillsProps> = ({ onSkillClick, selectedSkills = [] }) => {
  const technicalSkills = skills.filter(skill => skill.category === 'technical');
  const softSkills = skills.filter(skill => skill.category === 'soft');

  const SkillTag: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
    const isSelected = selectedSkills.includes(skill.name);

    return (
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05, duration: 0.4 }}
        onClick={() => onSkillClick && onSkillClick(skill.name)}
        className={`px-5 py-3 rounded-full text-sm font-sans border transition-all duration-300
          ${isSelected 
            ? 'bg-primary border-primary text-white' 
            : 'bg-transparent border-dark/20 text-dark/70 hover:border-primary hover:text-primary'}
        `}
      >
        {skill.name}
      </motion.button>
    );
  };

  return (
    <section id="skills" className="bg-light relative pb-20 lg:pb-32">
      <SectionDivider number="02" title="Technical Arsenal" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           className="mb-16 lg:mb-20 text-center sm:text-left"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-dark tracking-tight leading-none mb-4">
            Capabilities<span className="text-primary">.</span>
          </h2>
          <div className="w-12 h-px bg-primary/40 mx-auto sm:mx-0"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Technical Skills */}
          <div>
            <h3 className="text-xs font-sans uppercase tracking-[0.2em] font-semibold text-primary mb-8 border-b border-dark/10 pb-4">
              Technical Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, index) => (
                <SkillTag key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-xs font-sans uppercase tracking-[0.2em] font-semibold text-primary mb-8 border-b border-dark/10 pb-4">
              Professional Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <SkillTag key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;