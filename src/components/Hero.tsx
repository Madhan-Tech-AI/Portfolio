import React, { useEffect, useState } from 'react';
import { Github, Linkedin, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedText from './AnimatedText';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Parallax for the background image
  const bgY = useTransform(scrollY, [0, 1000], ['0%', '15%']);
  const contentY = useTransform(scrollY, [0, 800], [0, 150]);
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
      
      {/* Background Image Layer */}
      <motion.div 
        style={{ 
          y: bgY,
          x: mousePosition.x * -1.5,
          scale: 1.15 // slightly scaled to prevent edges showing during faster parallax
        }}
        className="absolute inset-0 z-0 w-full h-[110%] -top-[5%]"
      >
        <img
          src="/IMG_9561.JPG"
          alt="Madhan Kumar P."
          className="w-full h-full object-cover object-[center_30%] mt-10 md:mt-0 grayscale"
          loading="eager"
        />
        {/* Lighter Gradient Overlay to make the background much more visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-light via-light/20 to-transparent"></div>
      </motion.div>

      {/* Main Content Container */}
      <motion.div 
        style={{ y: contentY }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col h-full justify-between pt-32 pb-12 sm:pb-20 min-h-screen pointer-events-none"
      >

        {/* Center Typography */}
        <div className="flex-1 flex flex-col justify-center items-center mt-10 sm:mt-20 w-full">
          <div className="flex flex-col items-center text-center w-full gap-2 sm:gap-4">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1, ease: 'easeOut' }}
              className="text-[12vw] sm:text-[10vw] lg:text-[7.5rem] font-bold text-dark leading-[1] tracking-tight drop-shadow-sm pointer-events-auto"
              style={{ fontFamily: "'Segant', serif" }}
            >
              Madhan Kumar P.
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 1, ease: 'easeOut' }}
              className="text-[6vw] sm:text-[4vw] lg:text-[4rem] text-primary leading-[1] drop-shadow-sm pointer-events-auto"
              style={{ fontFamily: "'Anthela', serif" }}
            >
              Full Stack Developer
            </motion.h2>
          </div>
        </div>

        {/* Bottom Details Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-end md:items-center mt-auto gap-8 pt-10 pointer-events-auto">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-col gap-4 max-w-sm"
          >
            <p 
              className="text-dark/90 font-medium text-sm lg:text-base leading-relaxed tracking-wide"
              style={{ fontFamily: "'Anthela', serif" }}
            >
              An AI & Full Stack Developer bridging the gap between rigorous technical infrastructure and human-centric elegant aesthetics.
            </p>
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-primary"></div>
              <span className="text-dark font-sans font-bold text-xs uppercase tracking-widest bg-light/80 backdrop-blur-md px-3 py-1 rounded-full border border-primary/20 text-primary">
                <AnimatedText />
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-wrap items-center gap-4 lg:justify-end"
          >
            <a href="https://www.linkedin.com/in/madhan-kumar-p-759402324/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-light/80 text-dark hover:bg-primary hover:text-white transition-all duration-300 backdrop-blur-md shadow-sm">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/Madhan-Tech-AI" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-light/80 text-dark hover:bg-primary hover:text-white transition-all duration-300 backdrop-blur-md shadow-sm">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://drive.google.com/file/d/1DPBQCYdAfiemVt1XUWx1al7ILwrUn26a/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-8 py-4 bg-dark text-white hover:bg-primary transition-all duration-300 rounded-full font-serif font-medium text-sm tracking-wide shadow-xl">
              Explore Resume
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        
        </div>

      </motion.div>

      {/* Minimal Scroll Indicator centered at the absolute bottom */}
      <motion.div 
        style={{ opacity: scrollIndicatorOpacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-30 pointer-events-auto"
      >
        <button
          onClick={scrollToNext}
          className="group flex flex-col items-center gap-3 text-dark hover:text-primary transition-colors duration-300"
        >
          <span className="text-[9px] font-sans tracking-[0.2em] uppercase font-bold text-dark/70 group-hover:text-primary">Scroll</span>
          <div className="w-px h-8 bg-dark/20 relative overflow-hidden group-hover:bg-primary/30">
            <motion.div 
              animate={{ y: [-32, 32] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-full bg-primary"
            />
          </div>
        </button>
      </motion.div>

    </section>
  );
};

export default Hero;
