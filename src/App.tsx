import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import FloatingContact from './components/FloatingContact';
import Preloader from './components/Preloader';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    if (!introDone) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [introDone]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'certifications', 'achievements', 'languages', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      {!introDone && <Preloader onComplete={() => setIntroDone(true)} />}
      <div className="min-h-screen bg-white transition-colors duration-300">
        <ScrollProgress />
        <ScrollToTop />
        <Navbar activeSection={activeSection} />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

        <FloatingContact />
      </div>
    </Router>
  );
}

export default App;