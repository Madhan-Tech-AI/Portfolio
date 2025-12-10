import React, { useState } from 'react';
import { AlignCenterVertical as Certificate, ExternalLink, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import Modal from './Modal';

// Mock data enriched with images for demo (using placeholders if real images aren't available yet)
const certifications = [
  {
    title: 'UI/UX Design',
    provider: 'Coursera/Udemy',
    type: 'Course Completion',
    date: '2024',
    skills: ['UI/UX Design', 'User Research', 'Prototyping'],
    certificateUrl: 'https://drive.google.com/file/d/1UWphdDanx5usL49tRBxHHg57GFCO54ln/view?usp=sharing',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg',
    descriptionPoints: [
      'Mastered user-centered design principles.',
      'Completed multiple hands-on projects involving prototyping.',
      'Learned about user research and usability testing methodologies.'
    ],
    quote: "Design is not just what it looks like and feels like. Design is how it works."
  },
  {
    title: 'Basics of Python',
    provider: 'Infosys Springboard',
    type: 'Certificate',
    date: '2024',
    skills: ['Python', 'Programming Fundamentals'],
    certificateUrl: 'https://drive.google.com/file/d/19qTooIaCICzMZ-TgOzANuJ9gzm0JGskm/view?usp=sharing',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg',
    descriptionPoints: [
      'Learned core Python syntax and data structures.',
      'Developed basic scripts to automate tasks.',
      'Understood object-oriented programming concepts.'
    ],
    quote: "The joy of coding Python should be in seeing short, concise, readable classes that express a lot of action in a small amount of clear code."
  },
  {
    title: 'Global Startup Club',
    provider: 'Global Startup Club',
    type: 'Membership',
    date: 'Active',
    skills: ['Entrepreneurship', 'Networking', 'Business Development'],
    descriptionPoints: [
      'Engaged with a community of entrepreneurs.',
      'Participated in workshops on business strategy.',
      'Networking with industry leaders and mentors.'
    ],
    image: 'https://static.wixstatic.com/media/c7c940_2ffb94816dd54b118bb96783f5ccec85~mv2.jpg/v1/crop/x_0,y_58,w_840,h_343/fill/w_470,h_192,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/GSS%20Logo%20%26%20Delhi%20Summit%20Logos%20%20(1280%20x%20640%20px)_pdf%20(3).jpg',
    quote: "Innovation distinguishes between a leader and a follower."
  }
];

const virtualExperiences = [
  {
    title: 'AWS APAC Solutions Architecture',
    provider: 'Forage',
    date: 'August 2025',
    descriptionPoints: [
      'Designed a scalable hosting architecture.',
      'Utilized AWS Elastic Beanstalk for deployment.',
      'Learned best practices for cloud infrastructure.'
    ],
    skills: ['AWS', 'Architecture Design', 'Cloud'],
    certificateUrl: 'https://drive.google.com/file/d/1ZHKEYH7itTvgJ5Pc74b129baGvEpJkGV/view?usp=sharing',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    quote: "Cloud computing is not only the future of IT, but the present."
  },
  {
    title: 'Accenture Developer Programme',
    provider: 'Forage',
    date: 'August 2025',
    descriptionPoints: [
      'Researched current DevOps trends and tools.',
      'Compared Agile vs Waterfall methodologies.',
      'Debugged and optimized Python code snippets.'
    ],
    skills: ['SDLC', 'DevOps', 'Agile'],
    certificateUrl: 'https://drive.google.com/file/d/1kO9-0NKIL3aIiZIbwn7YQ7YToRpX8sku/view?usp=sharing',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg',
    quote: "Continuous improvement is better than delayed perfection."
  },
  {
    title: 'Python 101 for Data Science',
    provider: 'IBM',
    date: 'Dec 8, 2024',
    descriptionPoints: [
      'Fundamentals of Python for data analysis.',
      'Allocating data types and structures.',
      'Introduction to Pandas and NumPy.'
    ],
    skills: ['Python', 'Data Science'],
    certificateUrl: 'https://drive.google.com/file/d/1mF6e0pu0FJfLqLzsp8O1nTzBWZSEcjLo/view?usp=sharing',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    quote: "Data is the new oil."
  },
  {
    title: 'Career Essentials in Generative AI',
    provider: 'Microsoft',
    date: 'Dec 13, 2024',
    descriptionPoints: [
      'Explored applications of Generative AI.',
      'Discussed ethical considerations in AI.',
      'Learned about prompt engineering techniques.'
    ],
    skills: ['AI', 'Ethics', 'GenAI'],
    certificateUrl: 'https://drive.google.com/file/d/1VSUoRCQom55BWz1RXuCVCKkpRjucSZZB/view?usp=sharing',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
    quote: "AI will not replace you. A person using AI will."
  },
  {
    title: 'Deloitte Data Analytics',
    provider: 'Forage',
    date: 'August 2025',
    descriptionPoints: [
      'Completed a comprehensive job simulation.',
      'Analyzed datasets to find actionable insights.',
      'Visualized data using Tableau and Excel.'
    ],
    skills: ['Data Analysis', 'Tableau', 'Excel'],
    certificateUrl: 'https://drive.google.com/file/d/11G4rmstRcqg4AI9f4NJL6vGWj3EVB1tK/view?usp=sharing',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Logo_of_Deloitte.svg/500px-Logo_of_Deloitte.svg.png',
    quote: "Without data, you're just another person with an opinion."
  },
  {
    title: 'Google Virtual Experience',
    provider: 'Google',
    date: '2024',
    descriptionPoints: [
      'Explored Google Cloud Platform services.',
      'Understood the basics of cloud security.',
      'Learned about digital transformation strategies.'
    ],
    skills: ['Google Cloud', 'Digital Innovation'],
    certificateUrl: 'https://drive.google.com/file/d/1ULRO7VlfKP3xY1nNrTXNzxGXEnH7bdB8/view?usp=sharing',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    quote: "Focus on the user and all else will follow."
  }
];

const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<any>(null);

  const getEmbedUrl = (url?: string) => {
    if (!url) return null;
    if (url.includes('drive.google.com')) {
      return url.replace('/view?usp=sharing', '/preview');
    }
    return url;
  };

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-dark dark:text-white mb-4">
            Certifications & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Showcasing continuous learning and professional milestones.
          </p>
        </motion.div>

        {/* Combined Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...certifications, ...virtualExperiences].map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedCert(cert)}
              className="bg-gray-50 dark:bg-dark-light rounded-xl overflow-hidden shadow-lg cursor-pointer group border border-gray-100 dark:border-gray-800"
            >
              <div className="h-48 bg-white relative overflow-hidden flex items-center justify-center p-6 border-b border-gray-100 dark:border-gray-700">
                {/* Logo or Fallback */}
                {(cert as any).image ? (
                  <img
                    src={(cert as any).image}
                    alt={cert.provider}
                    className="w-4/5 h-4/5 object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
                    <Certificate className="w-16 h-16 text-white/80 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                  <span className="px-4 py-2 bg-white/90 text-primary rounded-full font-medium text-sm shadow-sm transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    View Certificate
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {cert.provider}
                  </span>
                  <div className="flex items-center text-gray-400 text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    {cert.date}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-dark dark:text-white mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>

                <div className="flex flex-wrap gap-2 mt-4">
                  {cert.skills.slice(0, 3).map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-white dark:bg-dark text-xs text-gray-600 dark:text-gray-300 rounded border border-gray-200 dark:border-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Render Modal */}
        {selectedCert && (
          <Modal
            isOpen={!!selectedCert}
            onClose={() => setSelectedCert(null)}
            title=""
            quote=""
          >
            <div className="flex flex-col items-center w-full">
              {/* Centered Heading */}
              <h3 className="text-2xl font-bold text-dark dark:text-white mb-2 text-center">
                CERTIFICATE
              </h3>

              {/* Centered Quote */}
              <div className="mb-6 text-center italic text-gray-500 font-medium px-4 border-l-4 border-primary/30 pl-4 py-1">
                "{selectedCert.quote || 'Learning is a treasure that will follow its owner everywhere.'}"
              </div>

              {/* Embed Placeholder/Iframe */}
              <div className="w-full aspect-[4/3] max-w-3xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden mb-6 border border-gray-200 dark:border-gray-700 relative">
                {selectedCert.certificateUrl ? (
                  <iframe
                    src={getEmbedUrl(selectedCert.certificateUrl) ?? undefined}
                    className="w-full h-full"
                    title="Certificate Preview"
                    allow="autoplay"
                  ></iframe>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-gray-400">
                    <Award className="w-16 h-16 mb-2 opacity-50" />
                    <span>Certificate Preview Unavailable</span>
                  </div>
                )}
              </div>

              {/* 3 Point Description */}
              <div className="w-full bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg mb-6">
                <h4 className="text-sm font-semibold text-dark dark:text-white mb-2 uppercase tracking-wide">Key Takeaways</h4>
                <ul className="space-y-2">
                  {selectedCert.descriptionPoints ? (
                    selectedCert.descriptionPoints.map((point: string, idx: number) => (
                      <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        {point}
                      </li>
                    ))
                  ) : (
                    <>
                      <li className="text-sm text-gray-600 dark:text-gray-400 flex items-start"><span className="mr-2 text-primary">•</span> Completed comprehensive training in {selectedCert.title}.</li>
                      <li className="text-sm text-gray-600 dark:text-gray-400 flex items-start"><span className="mr-2 text-primary">•</span> Gained hands-on experience through practical exercises.</li>
                      <li className="text-sm text-gray-600 dark:text-gray-400 flex items-start"><span className="mr-2 text-primary">•</span> Demonstrated proficiency in key subject areas.</li>
                    </>
                  )}
                </ul>
              </div>

              {selectedCert.certificateUrl && (
                <a
                  href={selectedCert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors shadow-lg shadow-primary/30 w-full justify-center sm:w-auto"
                >
                  <span>Verify Original</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default Certifications;
