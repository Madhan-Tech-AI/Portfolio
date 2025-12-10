import React from 'react';
import { Calendar, MapPin, Building, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'AI & Full Stack Developer',
    company: 'Story Seed Studio',
    period: 'Dec 2025 – Present',
    location: 'Chennai',
    responsibilities: [
      'Spearheading the development of AI-driven products and full-stack solutions.',
      'Designing scalable architectures and automating workflows to enhance efficiency.',
      'Contributing to technical innovation and product strategy in a fast-paced environment.',
      'Implementing advanced AI features and optimizing user experience.'
    ],
    current: true
  },
  {
    title: 'Developer & Co-Ordinator',
    company: 'UNAI TECH',
    period: 'Jan 2024 – Present',
    location: 'Chennai',
    responsibilities: [
      'Delivered client websites, web apps, and portfolios with React, Node.js, Firebase, and Tailwind',
      'Led EVE platform with interactive UI and progress tracking',
      'Built scalable, performance-optimized solutions'
    ],
    current: false
  },
  {
    title: 'Intern',
    company: 'Xenovex Technologies Pvt. Ltd.',
    period: 'Jul 3, 2025 – Jul 24, 2025',
    location: 'Ekkatuthangal, Chennai',
    responsibilities: [
      'Learned and applied basics of HTML, CSS, and Java',
      'Introduced to JavaScript fundamentals including functions, mapping, filtering, and essential features',
      'Gained an overview of Angular framework and navigation techniques',
      'Developed a portfolio website application with a login screen, dashboard, and content management page'
    ],
    current: false
  },
  {
    title: 'Intern',
    company: 'Thirumoolar IT Solutions Pvt Ltd',
    period: 'Mar 2025 – May 2025',
    location: 'Remote',
    responsibilities: [
      'Built ML models for classification & prediction using Python and Scikit-learn',
      'Worked on NLP & Computer Vision tasks like text classification and object detection'
    ],
    current: false
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-light dark:bg-dark relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-dark dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-12 relative">
          {/* Timeline Line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 hidden sm:block"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-0 sm:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 w-8 h-8 rounded-full border-4 border-white dark:border-dark bg-primary hidden sm:flex items-center justify-center shadow-md z-10">
                <Briefcase className="w-3 h-3 text-white" />
              </div>

              <div
                className={`
                  relative bg-white dark:bg-dark-light p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800
                  transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group
                  ${exp.current ? 'ring-2 ring-primary/20' : ''}
                `}
              >
                {exp.current && (
                  <div className="absolute top-4 right-4">
                    <span className="flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-dark dark:text-white mb-2 group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-primary mb-2">
                      <Building className="w-5 h-5" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 mb-6 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-2 mb-2 sm:mb-0 bg-gray-50 dark:bg-gray-800/50 px-3 py-1 rounded-full">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-gray-50 dark:bg-gray-800/50 px-3 py-1 rounded-full">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li
                      key={idx}
                      className="flex items-start space-x-3 text-gray-700 dark:text-gray-300"
                    >
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                      <span className="leading-relaxed">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;