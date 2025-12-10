import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Achievements from '../components/Achievements';
import Certifications from '../components/Certifications';
import Languages from '../components/Languages';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Achievements />
      <Certifications />
      <Languages />
      <Contact />
    </>
  );
};

export default Home;
