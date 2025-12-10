import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

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
    techTags: ['Python', 'Html', 'Css', 'Responsive Web Design'],
    imageUrl: 'https://i.pinimg.com/736x/bc/40/24/bc40249986311b098c25f37db1a1c688.jpg',
    repoUrl: 'https://github.com/Madhan-Tech-AI/Ecommerce-store',
    demoUrl: 'https://github.com/Madhan-Tech-AI/Ecommerce-store',
    category: 'Web Development'
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'Responsive portfolio with project showcase.',
    techTags: ['React', 'Tailwind', 'Responsive Web Design'],
    imageUrl: 'https://i.pinimg.com/736x/a9/3f/08/a93f08415c4d2b1127b5b6780780cf5b.jpg',
    repoUrl: 'https://github.com/Madhan-Tech-AI/Portfolio',
    demoUrl: 'https://github.com/Madhan-Tech-AI/Portfolio',
    category: 'Web Development'
  },
  {
    id: 3,
    title: 'AI Customer Support Bot',
    description: 'Smart chatbot for handling customer queries.',
    techTags: ['NLP', 'Chatbot', 'Python'],
    imageUrl: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=600',
    repoUrl: 'https://github.com/Madhan2407/AICHATBOT',
    demoUrl: 'https://github.com/Madhan2407/AICHATBOT',
    category: 'AI/ML'
  },
  {
    id: 4,
    title: 'LMS APP',
    description: 'Comprehensive Learning Management System for educational institutions.',
    techTags: ['React', 'Node.js', 'Database Management', 'Responsive Web Design'],
    imageUrl: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=600',
    repoUrl: 'https://github.com/Madhan-Tech-AI/GOJAN-LMS-APP',
    demoUrl: 'https://github.com/Madhan-Tech-AI/GOJAN-LMS-APP',
    category: 'Web Development'
  },
  {
    id: 5,
    title: 'College Admission and Appointment Booking App',
    description: 'Streamlined college admission and appointment scheduling platform.',
    techTags: ['React', 'Appointment System', 'Database Management', 'User Management'],
    imageUrl: 'https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=600',
    repoUrl: 'https://github.com/Madhan-Tech-AI/Gojan-AD',
    demoUrl: 'https://github.com/Madhan-Tech-AI/Gojan-AD',
    category: 'Web Development'
  },
  {
    id: 6,
    title: 'Craftique (Resume and Portfolio Builder)',
    description: 'Smart resume and portfolio builder for students and professionals.',
    techTags: ['React', 'Template Engine', 'PDF Generation', 'AI Tools'],
    imageUrl: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600',
    repoUrl: 'https://github.com/Madhan-Tech-AI/Craftique---RESUME-PORTFOLIO-BUILDER',
    demoUrl: 'https://github.com/Madhan-Tech-AI/Craftique---RESUME-PORTFOLIO-BUILDER',
    category: 'Web Development'
  }
];

const Projects: React.FC = () => {
  const openInNewTab = (url?: string) => {
    if (!url) return;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-dark dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            Explore my portfolio of web applications, AI solutions, and innovative projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-dark-light rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all duration-300 group flex flex-col h-full"
            >
              {/* Image Area */}
              <div className="relative overflow-hidden h-48 bg-gray-200 dark:bg-gray-700">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4 backdrop-blur-sm">
                  {project.demoUrl && (
                    <button
                      onClick={() => openInNewTab(project.demoUrl)}
                      className="p-3 bg-white rounded-full text-dark hover:bg-primary hover:text-white transition-colors transform hover:-translate-y-1"
                      title="View Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  )}
                  {project.repoUrl && (
                    <button
                      onClick={() => openInNewTab(project.repoUrl)}
                      className="p-3 bg-white rounded-full text-dark hover:bg-black hover:text-white transition-colors transform hover:-translate-y-1"
                      title="View Code"
                    >
                      <Github className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-3">
                  <span className="text-xs font-semibold tracking-wider text-accent uppercase">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-dark dark:text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techTags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


