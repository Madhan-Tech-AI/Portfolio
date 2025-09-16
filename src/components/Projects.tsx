import React, { useState } from 'react';
import { ExternalLink, Github, Filter, X } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Project {
  id: number;
  title: string;
  description: string;
  detail?: string;
  techTags: string[];
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Webstore',
    description: 'Macyx Fashion – A modern, responsive e-commerce web store with sleek UI/UX, product showcase, cart, and search functionality',
    detail: 'E-Commerce Web Store – Macyx Fashion. A modern, responsive e-commerce platform featuring sleek product showcase, cart management, search functionality, and clean UI/UX for a seamless shopping experience.',
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
    detail: 'A personal portfolio website showcasing projects, skills, and experience with a modern responsive design, smooth navigation, and clean UI/UX for a professional online presence.',
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
    detail: 'An intelligent chatbot powered by AI to handle customer queries, provide instant responses, and improve support efficiency with natural language understanding and 24/7 availability.',
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
    detail: 'A full-featured Learning Management System designed for educational institutions, providing course management, student enrollment, assignment tracking, grade management, and interactive learning tools for enhanced educational experience.',
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
    detail: 'A comprehensive platform for college admissions and appointment booking, featuring application management, document upload, interview scheduling, real-time status tracking, and automated notifications for a seamless admission process.',
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
    detail: 'An intelligent resume and portfolio builder that allows students and professionals to create stunning resumes and portfolios by simply filling in their details. Features smart templates, real-time preview, export options, and AI-powered suggestions for content optimization.',
    techTags: ['React', 'Template Engine', 'PDF Generation', 'AI Tools'],
    imageUrl: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600',
    repoUrl: 'https://github.com/Madhan-Tech-AI/Craftique---RESUME-PORTFOLIO-BUILDER',
    demoUrl: 'https://github.com/Madhan-Tech-AI/Craftique---RESUME-PORTFOLIO-BUILDER',
    category: 'Web Development'
  }
];

const Projects: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [flippedIds, setFlippedIds] = useState<Set<number>>(new Set());

  const allTechTags = Array.from(new Set(projects.flatMap(project => project.techTags)));
  const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))];

  const filterProjects = (tech: string | null = selectedTech, category: string = selectedCategory) => {
    let filtered = projects;

    if (category !== 'All') {
      filtered = filtered.filter(project => project.category === category);
    }

    if (tech) {
      filtered = filtered.filter(project => project.techTags.includes(tech));
    }

    setFilteredProjects(filtered);
  };

  const handleTechFilter = (tech: string) => {
    const newTech = selectedTech === tech ? null : tech;
    setSelectedTech(newTech);
    filterProjects(newTech, selectedCategory);
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    filterProjects(selectedTech, category);
  };

  const clearFilters = () => {
    setSelectedTech(null);
    setSelectedCategory('All');
    setFilteredProjects(projects);
  };

  const toggleFlip = (id: number) => {
    setFlippedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const openInNewTab = (url?: string) => {
    if (!url) return;
    window.open(url, '_blank', 'noopener,noreferrer');
  };


  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-teal-600 mx-auto rounded-full mb-6"></div>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
              Explore my portfolio of web applications, AI solutions, and innovative projects
            </p>
          </div>

          {/* Filter Controls */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 px-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-500" />
                <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Filter by:</span>
              </div>
              
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => handleCategoryFilter(category)}
                    className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all hover:scale-105 ${
                      selectedCategory === category
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Tech Tag Filters */}
            <div className="flex flex-wrap gap-2 mb-4 px-4">
              {allTechTags.map(tech => (
                <button
                  key={tech}
                  onClick={() => handleTechFilter(tech)}
                  className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium transition-all hover:scale-105 ${
                    selectedTech === tech
                      ? 'bg-teal-600 text-white'
                      : 'bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 hover:bg-teal-200 dark:hover:bg-teal-900/50'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>

            {/* Clear Filters */}
            {(selectedTech || selectedCategory !== 'All') && (
              <div className="px-4">
                <button
                onClick={clearFilters}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                <X className="w-4 h-4" />
                  <span className="text-sm">Clear Filters</span>
                </button>
              </div>
            )}
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`flip-card ${flippedIds.has(project.id) ? 'flipped' : ''} bg-transparent rounded-2xl animate-fade-in-up h-[360px] overflow-hidden`}
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                <div className={`flip-card-inner rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 h-full`}>
                  {/* Front */}
                  <div className="flip-card-front bg-white dark:bg-gray-800 rounded-2xl overflow-hidden h-full flex flex-col">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                        <button onClick={() => openInNewTab(project.demoUrl)} className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors" aria-label="Open demo">
                          <ExternalLink className="w-5 h-5" />
                        </button>
                        <button onClick={() => openInNewTab(project.repoUrl)} className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors" aria-label="Open repository">
                          <Github className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white line-clamp-1">
                          {project.title}
                        </h3>
                        <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs rounded-full flex-shrink-0 ml-2">
                          {project.category}
                        </span>
                      </div>

                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                        {project.techTags.map(tag => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between mt-auto">
                        <button onClick={() => toggleFlip(project.id)} className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium text-sm transition-colors">
                          Project Details
                        </button>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => openInNewTab(project.demoUrl)}
                            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                            aria-label="View demo"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => openInNewTab(project.repoUrl)}
                            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                            aria-label="View repository"
                          >
                            <Github className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="flip-card-back bg-white dark:bg-gray-800 rounded-2xl overflow-hidden p-6 flex flex-col h-full">
                    <div className="flex-1 overflow-y-auto pr-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                        {project.detail || project.description}
                      </p>
                      <div>
                        <div className="text-xs font-medium text-gray-700 dark:text-gray-300">Highlights</div>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {project.techTags.map(tag => (
                            <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-3">
                      <div className="flex space-x-2">
                        {project.demoUrl && (
                          <button onClick={() => openInNewTab(project.demoUrl)} className="inline-flex items-center space-x-1 px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md text-sm hover:bg-gray-200 dark:hover:bg-gray-600">
                            <ExternalLink className="w-4 h-4" />
                            <span>Demo</span>
                          </button>
                        )}
                        {project.repoUrl && (
                          <button onClick={() => openInNewTab(project.repoUrl)} className="inline-flex items-center space-x-1 px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md text-sm hover:bg-gray-200 dark:hover:bg-gray-600">
                            <Github className="w-4 h-4" />
                            <span>Repo</span>
                          </button>
                        )}
                      </div>
                      <button onClick={() => toggleFlip(project.id)} className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium text-sm">
                        Back
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Filter className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                No projects found
              </h3>
              <p className="text-gray-500 dark:text-gray-500 mb-4">
                Try adjusting your filters or browse all projects
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};


export default Projects;


