import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionDivider from './SectionDivider';

interface Project {
  id: number;
  title: string;
  description: string;
  techTags: string[];
  imageUrl: string;
  repoUrl?: string;
  demoUrl?: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Webstore',
    description: 'Macyx Fashion – A modern, responsive e-commerce web store with sleek UI/UX, product showcase, cart, and search functionality',
    techTags: ['Python', 'Html', 'Css', 'Responsive Design'],
    imageUrl: 'https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=1200', // e-commerce theme
    repoUrl: 'https://github.com/Madhan-Tech-AI/Ecommerce-store',
    demoUrl: 'https://github.com/Madhan-Tech-AI/Ecommerce-store',
    category: 'Web Development'
  },
  {
    id: 2,
    title: 'Portfolio Architecture',
    description: 'High-performance interactive portfolio showcasing development expertise through smooth animations and premium UI.',
    techTags: ['React', 'Tailwind', 'Framer Motion'],
    imageUrl: 'https://i.pinimg.com/736x/ff/3d/cc/ff3dcc149c66c3dd87da6f50278c9aba.jpg',
    repoUrl: 'https://github.com/Madhan-Tech-AI/Portfolio',
    demoUrl: 'https://github.com/Madhan-Tech-AI/Portfolio',
    category: 'Web Development'
  },
  {
    id: 3,
    title: 'AI Customer Bot',
    description: 'Intelligent chatbot engineered for handling complex customer queries using Natural Language Processing.',
    techTags: ['NLP', 'Chatbot', 'Python'],
    imageUrl: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=1200',
    repoUrl: 'https://github.com/Madhan2407/AICHATBOT',
    demoUrl: 'https://github.com/Madhan2407/AICHATBOT',
    category: 'AI/ML'
  },
  {
    id: 4,
    title: 'LMS Platform',
    description: 'Comprehensive Learning Management System tailored for educational institutions with robust curriculum tracking.',
    techTags: ['React', 'Node.js', 'Database Architecture'],
    imageUrl: 'https://images.pexels.com/photos/5905497/pexels-photo-5905497.jpeg?auto=compress&cs=tinysrgb&w=1200', // education tech theme
    repoUrl: 'https://github.com/Madhan-Tech-AI/GOJAN-LMS-APP',
    demoUrl: 'https://github.com/Madhan-Tech-AI/GOJAN-LMS-APP',
    category: 'Web Development'
  },
  {
    id: 5,
    title: 'Admission Router',
    description: 'Streamlined college admission and appointment scheduling platform optimizing academic onboarding.',
    techTags: ['React', 'Appointment Tech', 'User Management'],
    imageUrl: 'https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=1200',
    repoUrl: 'https://github.com/Madhan-Tech-AI/Gojan-AD',
    demoUrl: 'https://github.com/Madhan-Tech-AI/Gojan-AD',
    category: 'Web Development'
  },
  {
    id: 6,
    title: 'Craftique Builder',
    description: 'Smart resume and portfolio architect designed to empower students and modern professionals.',
    techTags: ['React', 'PDF Gen', 'AI Agents'],
    imageUrl: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1200', // resume desk theme
    repoUrl: 'https://github.com/Madhan-Tech-AI/Craftique---RESUME-PORTFOLIO-BUILDER',
    demoUrl: 'https://github.com/Madhan-Tech-AI/Craftique---RESUME-PORTFOLIO-BUILDER',
    category: 'Web Development'
  }
];

const Projects: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const openUrl = (url?: string) => {
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  };

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="projects" className="bg-light relative pb-20 lg:pb-32 overflow-hidden">
      <SectionDivider number="03" title="Selected Works" />

      {/* Floating Image cursor tracker */}
      <AnimatePresence>
        {hoveredIndex !== null && window.innerWidth > 1024 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 w-[400px] aspect-[4/3] pointer-events-none z-50 overflow-hidden rounded-3xl shadow-2xl"
            style={{
              x: mousePos.x - 200,
              y: mousePos.y - 150,
            }}
          >
            <img
              src={projects[hoveredIndex].imageUrl}
              alt="Project Preview"
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 lg:mb-24 flex flex-col md:flex-row justify-start items-end gap-10 md:gap-16"
        >
          <div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-dark tracking-tighter leading-[0.9]">
              Selected<br /><span className="text-primary italic font-light">Works.</span>
            </h2>
            <div className="w-12 h-px bg-primary/40 mt-6 md:hidden"></div>
          </div>
          <p className="max-w-xs text-dark/60 font-sans text-xs sm:text-sm tracking-wide leading-relaxed uppercase border-l border-primary/30 pl-6 pb-2">
            A curated collection of digital experiences, structural systems, and intelligent applications.
          </p>
        </motion.div>

        {/* Brutalist Editorial List */}
        <div className="flex flex-col border-t border-dark/10">
          {projects.map((project, index) => {
            const isExpanded = expandedIndex === index;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group border-b border-dark/10 flex flex-col"
              >
                {/* Header Row (Clickable) */}
                <div
                  className={`w-full py-8 lg:py-12 px-2 lg:px-4 flex items-center justify-between cursor-pointer transition-colors duration-500 hover:bg-dark/5 ${isExpanded ? 'bg-dark/5' : ''}`}
                  onClick={() => toggleExpand(index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="flex items-center gap-6 lg:gap-12 w-full lg:w-auto">
                    <span className={`text-sm tracking-[0.2em] font-sans font-bold transition-colors duration-300 ${isHovered || isExpanded ? 'text-primary' : 'text-dark/30'}`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className={`text-4xl sm:text-5xl lg:text-7xl font-serif font-bold tracking-tighter transition-all duration-300 ${isHovered || isExpanded ? 'text-dark transform translate-x-4' : 'text-dark/70'}`}>
                      {project.title}
                    </h3>
                  </div>
                  <div className="hidden lg:block text-right">
                    <span className={`text-sm uppercase tracking-widest font-sans transition-colors duration-300 ${isHovered || isExpanded ? 'text-dark' : 'text-dark/40'}`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Expanded Content (Accordion) */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 p-4 lg:p-12 lg:pl-32 pb-16">

                        {/* Details */}
                        <div className="w-full lg:w-1/2 flex flex-col justify-center">
                          <p className="text-xl sm:text-2xl text-dark/80 font-serif leading-relaxed mb-8">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-10">
                            {project.techTags.map(tag => (
                              <span key={tag} className="px-3 py-1 bg-white text-dark text-xs font-medium uppercase tracking-wider rounded-full shadow-sm border border-dark/5">
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center gap-6">
                            {project.demoUrl && (
                              <button
                                onClick={() => openUrl(project.demoUrl)}
                                className="flex items-center gap-2 text-sm font-sans font-bold uppercase tracking-wider text-white bg-dark px-6 py-3 rounded-full hover:bg-primary transition-colors group/btn"
                              >
                                Live Demo
                                <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                              </button>
                            )}
                            {project.repoUrl && (
                              <button
                                onClick={() => openUrl(project.repoUrl)}
                                className="flex items-center gap-2 p-3 rounded-full border border-dark/10 text-dark hover:bg-primary shadow-sm hover:text-white hover:border-primary transition-all group/repo"
                                title="View Code Repository"
                              >
                                <Github className="w-5 h-5 group-hover/repo:scale-110 transition-transform" />
                              </button>
                            )}
                          </div>
                        </div>

                        {/* Mobile/Tablet Inline Image (Visible when expanded on smaller screens, or as a secondary structural graphic on larger screens) */}
                        <div className="w-full lg:w-1/2">
                          <div className="w-full aspect-[4/3] lg:aspect-video rounded-3xl overflow-hidden shadow-2xl relative group/img">
                            <img
                              src={project.imageUrl}
                              alt={project.title}
                              className="w-full h-full object-cover lg:grayscale group-hover/img:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-dark/10 group-hover/img:bg-transparent transition-colors duration-500"></div>
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;
