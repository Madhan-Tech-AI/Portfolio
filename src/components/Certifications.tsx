import React, { useRef, useState } from 'react';
import { ExternalLink, Camera } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Modal from './Modal';
import SectionDivider from './SectionDivider';

// Mock data enriched with images for gallery display
const certifications = [
  {
    title: 'UI/UX Design Masterclass',
    provider: 'Coursera / Udemy',
    type: 'Course Completion',
    date: '2024',
    certificateUrl: 'https://drive.google.com/file/d/1UWphdDanx5usL49tRBxHHg57GFCO54ln/view?usp=sharing',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg', // conceptual high res image
  },
  {
    title: 'Python Core Systems',
    provider: 'Infosys Springboard',
    type: 'Certificate',
    date: '2024',
    certificateUrl: 'https://drive.google.com/file/d/19qTooIaCICzMZ-TgOzANuJ9gzm0JGskm/view?usp=sharing',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg',
  },
  {
    title: 'Global Startup Club',
    provider: 'Entrepreneurial Network',
    type: 'Membership',
    date: 'Active',
    image: 'https://static.wixstatic.com/media/c7c940_2ffb94816dd54b118bb96783f5ccec85~mv2.jpg/v1/crop/x_0,y_58,w_840,h_343/fill/w_470,h_192,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/GSS%20Logo%20%26%20Delhi%20Summit%20Logos%20%20(1280%20x%20640%20px)_pdf%20(3).jpg',
  },
  {
    title: 'AWS APAC Solutions',
    provider: 'Forage',
    type: 'Virtual Experience',
    date: 'Aug 2025',
    certificateUrl: 'https://drive.google.com/file/d/1ZHKEYH7itTvgJ5Pc74b129baGvEpJkGV/view?usp=sharing',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
  },
  {
    title: 'Accenture Dev Program',
    provider: 'Forage',
    type: 'Simulation',
    date: 'Aug 2025',
    certificateUrl: 'https://drive.google.com/file/d/1kO9-0NKIL3aIiZIbwn7YQ7YToRpX8sku/view?usp=sharing',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg',
  },
  {
    title: 'Data Science 101',
    provider: 'IBM',
    type: 'Certification',
    date: 'Dec 2024',
    certificateUrl: 'https://drive.google.com/file/d/1mF6e0pu0FJfLqLzsp8O1nTzBWZSEcjLo/view?usp=sharing',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
  },
  {
    title: 'Career Essentials in Generative AI',
    provider: 'Microsoft',
    type: 'Certification',
    date: 'Dec 13, 2024',
    certificateUrl: 'https://drive.google.com/file/d/1VSUoRCQom55BWz1RXuCVCKkpRjucSZZB/view?usp=sharing',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
  },
  {
    title: 'Deloitte Data Analytics',
    provider: 'Forage',
    type: 'Simulation',
    date: 'August 2025',
    certificateUrl: 'https://drive.google.com/file/d/11G4rmstRcqg4AI9f4NJL6vGWj3EVB1tK/view?usp=sharing',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Logo_of_Deloitte.svg/500px-Logo_of_Deloitte.svg.png',
  },
  {
    title: 'Google Virtual Experience',
    provider: 'Google',
    type: 'Simulation',
    date: '2024',
    certificateUrl: 'https://drive.google.com/file/d/1ULRO7VlfKP3xY1nNrTXNzxGXEnH7bdB8/view?usp=sharing',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  }
];

const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  // Framer Motion specific horizontal scroll magic
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Translates vertical scroll to horizontal movement
  // Extended range since there are now 9 cards.
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-80%"]);

  const getEmbedUrl = (url?: string) => {
    if (!url) return null;
    if (url.includes('drive.google.com')) return url.replace('/view?usp=sharing', '/preview');
    return url;
  };

  return (
    <>
      <div className="bg-light w-full">
        <SectionDivider number="06" title="Exhibition Gallery" />
      </div>

      <section ref={targetRef} id="certifications" className="h-[400vh] bg-light relative">

        <div className="sticky top-0 h-screen flex flex-col overflow-hidden pt-24 pb-12">

          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full shrink-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 lg:mb-12 flex flex-col md:flex-row justify-between items-end gap-10"
            >
              <div>
                <h2 className="text-4xl sm:text-5xl font-serif font-bold text-dark tracking-tight leading-none mb-6">
                  Gallery &<br />
                  <span className="text-primary italic">Certificates.</span>
                </h2>
                <div className="w-12 h-px bg-primary/40"></div>
              </div>
              <p className="max-w-xs text-dark/50 font-sans text-xs tracking-[0.2em] uppercase font-bold text-right pt-4 border-t border-dark/10 md:border-none md:pt-0">
                A visual curation of milestones, certifications, and structural aesthetics.
              </p>
            </motion.div>
          </div>

          {/* Cinematic Horizontal Strip */}
          <div className="flex-1 overflow-hidden relative w-full flex items-center">
            <motion.div style={{ x }} className="flex gap-6 lg:gap-10 px-6 sm:px-12 w-max items-center">
              {certifications.map((item, index) => {
                
                return (
                  <div
                    key={index}
                    onClick={() => setSelectedItem(item)}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-white aspect-square w-[280px] sm:w-[320px] md:w-[350px] lg:w-[400px] cursor-pointer flex-shrink-0 shadow-sm border border-dark/5 transition-all duration-500 hover:shadow-2xl hover:-translate-y-4"
                  >
                    {/* Clean Top Area for Logo */}
                    <div className="relative w-full flex-1 flex items-center justify-center p-12 lg:p-16 bg-white overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-w-full max-h-full object-contain mix-blend-multiply opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      />
                    </div>

                    {/* Refined Details Plaque */}
                    <div className="relative w-full bg-[#f8f9fa] border-t border-dark/5 p-6 md:p-8 z-10 flex flex-col items-start justify-end transition-all duration-500 transform translate-y-3 group-hover:translate-y-0">
                      <span className="text-[10px] md:text-xs font-sans uppercase tracking-[0.2em] font-bold text-primary mb-2 block">
                        {item.provider}
                      </span>
                      <h3 className="text-dark font-serif text-xl sm:text-2xl mb-1 leading-tight">{item.title}</h3>
                      <span className="text-dark/50 text-[10px] sm:text-xs font-sans mt-3 block tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        View Details &rarr;
                      </span>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </section>

      {/* Selected Modal */}
      <Modal
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        title=""
      >
        {selectedItem && (
          <div className="flex flex-col items-center w-full px-4">
            <span className="text-xs font-sans uppercase tracking-[0.2em] font-bold text-primary mb-4 block text-center">
              {selectedItem.provider}
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-dark mb-8 text-center leading-tight">
              {selectedItem.title}
            </h3>

            <div className="w-full max-w-2xl bg-dark/5 aspect-[4/3] rounded-3xl overflow-hidden mb-12 relative flex items-center justify-center shadow-lg border border-dark/10">
              {selectedItem.certificateUrl ? (
                <iframe
                  src={getEmbedUrl(selectedItem.certificateUrl) ?? undefined}
                  className="w-full h-full"
                  title="Certificate"
                />
              ) : (
                <div className="text-center">
                  <Camera className="w-12 h-12 text-dark/20 mx-auto mb-4" />
                  <p className="text-dark/40 font-sans text-sm uppercase tracking-widest">No Certificate Document</p>
                </div>
              )}
            </div>

            {selectedItem.certificateUrl && (
              <a
                href={selectedItem.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-primary text-white font-sans text-xs uppercase tracking-wider font-bold rounded-full hover:bg-dark shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-3 transform hover:-translate-y-1"
              >
                Verify Original <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        )}
      </Modal>
    </>
  );
};

export default Gallery;
