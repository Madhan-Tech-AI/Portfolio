import React from 'react';
import { Github, Linkedin, View, ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedText from './AnimatedText';
import Waves from './Waves';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1DPBQCYdAfiemVt1XUWx1al7ILwrUn26a/view?usp=sharing';
    link.download = 'Madhan_Kumar_P_Resume.pdf';
    link.click();
  };

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-teal-50 dark:from-dark dark:via-dark dark:to-gray-900">
      {/* Animated Waves Background */}
      <Waves
        lineColor="rgba(108, 99, 255, 0.15)"
        backgroundColor="transparent"
        waveSpeedX={0.015}
        waveSpeedY={0.008}
        waveAmpX={25}
        waveAmpY={15}
        friction={0.92}
        tension={0.008}
        maxCursorMove={80}
        xGap={15}
        yGap={40}
      />

      {/* Animated Background Elements (Parallax) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div style={{ y: y1 }} className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></motion.div>
        <motion.div style={{ y: y2 }} className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 sm:space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center space-x-2 bg-white/80 dark:bg-dark-light/80 backdrop-blur-sm border border-indigo-100 dark:border-gray-800 text-primary px-4 py-2 rounded-full text-sm font-medium shadow-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span>Available for opportunities</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark dark:text-white leading-tight">
                <span className="block">MADHAN KUMAR P</span>
              </h1>

              <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-medium h-8">
                <AnimatedText />
              </h2>

              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-lg mx-auto lg:mx-0">

                Building impactful, user-focused digital solutions.
              </p>

              {/* Quick Links */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 pt-6">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/madhan-kumar-p-759402324/"
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover shadow-lg shadow-primary/25 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/Madhan-Tech-AI"
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3 bg-dark text-white dark:bg-white dark:text-dark rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 shadow-lg transition-all"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </motion.a>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleResumeDownload}
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3 border-2 border-primary text-primary hover:bg-primary/5 dark:text-white dark:border-white dark:hover:bg-white/10 rounded-lg transition-all"
                >
                  <View className="w-5 h-5" />
                  <span>Resume</span>
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Profile Image - Removed as per request */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2 relative"
          >
            <div className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[32rem] lg:h-[32rem] rounded-full p-2 bg-white/30 dark:bg-white/10 backdrop-blur-md border border-white/50 shadow-2xl overflow-hidden relative z-10">
              <img
                src="/Madhan.jpeg"
                alt="Madhan Kumar P"
                className="w-full h-full object-cover object-center rounded-full transform transition-transform duration-700 hover:scale-110"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          style={{ opacity }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={scrollToNext}
            className="flex flex-col items-center space-y-2 text-gray-400 hover:text-primary transition-colors group"
          >
            <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
