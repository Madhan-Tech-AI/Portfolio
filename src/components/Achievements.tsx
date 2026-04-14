import React from 'react';
import { Trophy, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const achievements = [
  {
    title: 'Startup Winner – BizCanvas 2025',
    description: 'First place winner in startup competition validating innovative business strategies.',
    icon: Trophy,
  },
  {
    title: "Symposium Winner – TRIDENT '25",
    description: 'Awarded for innovation, startup strategy, and technical presentation excellence.',
    icon: Award,
  }
];

const Achievements: React.FC = () => {
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
            Honors & Awards<span className="text-primary">.</span>
          </h2>
          <div className="w-12 h-px bg-primary/40"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group flex flex-col items-start"
              >
                <div className="w-12 h-12 rounded-full border border-dark/10 flex items-center justify-center mb-6 text-dark group-hover:border-primary group-hover:text-primary group-hover:bg-primary/5 transition-colors">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-dark mb-4 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-dark/70 font-sans leading-relaxed text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;