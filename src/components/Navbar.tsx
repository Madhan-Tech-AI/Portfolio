import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { SketchyNav } from './SketchyNav';

interface NavbarProps {
    activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    const isHomePage = location.pathname === '/';

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'about', name: 'About' },
        { id: 'skills', name: 'Skills' },
        { id: 'projects', name: 'Projects' },
        { id: 'experience', name: 'Experience' },
        { id: 'education', name: 'Education' },
        { id: 'certifications', name: 'Gallery' },
        { id: 'contact', name: 'Contact' }
    ];

    const handleNavigation = (id: string) => {
        setIsMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate('/', { state: { scrollTo: id } });
        }
    };

    // Handle cross-page scrolling
    useEffect(() => {
        if (isHomePage && location.state && (location.state as any).scrollTo) {
            const sectionId = (location.state as any).scrollTo;
            const element = document.getElementById(sectionId);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
            window.history.replaceState({}, document.title);
        }
    }, [location, isHomePage]);

    const handleResumeDownload = () => {
        const link = document.createElement('a');
        link.href = 'https://drive.google.com/file/d/1DPBQCYdAfiemVt1XUWx1al7ILwrUn26a/view?usp=sharing';
        link.download = 'Madhan_Kumar_P_Resume.pdf';
        link.click();
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? 'bg-light/90 backdrop-blur-xl border-b border-dark/5 py-4'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="cursor-pointer flex items-center justify-center transition-all duration-300"
                        onClick={() => handleNavigation('hero')}
                    >
                        <img 
                            src="/Fashions (4).png" 
                            alt="Logo" 
                            className="h-10 md:h-12 w-auto object-contain" 
                        />
                    </motion.div>

                    {/* Desktop Navigation - SketchyNav */}
                    <div className="hidden lg:flex items-center">
                        <SketchyNav
                            items={navItems}
                            activeTab={activeSection}
                            onNavigate={handleNavigation}
                            isScrolled={true} // Forced true because bg is light 
                        />
                    </div>

                    {/* Desktop Resume Button */}
                    <div className="hidden lg:flex items-center">
                        <motion.button
                            whileHover={{ scale: 1.03, y: -1 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={handleResumeDownload}
                            className="flex items-center space-x-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 bg-primary/10 text-primary hover:bg-primary hover:text-white border border-primary/20"
                        >
                            <Download className="w-4 h-4" />
                            <span>Resume</span>
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="p-2.5 rounded-full bg-primary/5 text-primary hover:bg-primary/10 transition-colors"
                            aria-label="Open menu"
                        >
                            <Menu className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0 bg-dark/20 backdrop-blur-sm z-40 lg:hidden"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 28, stiffness: 250 }}
                            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-light z-50 shadow-2xl lg:hidden flex flex-col"
                        >
                            <div className="p-6 flex items-center justify-between border-b border-dark/5">
                                <span className="font-serif text-2xl font-bold text-dark">
                                    Menu<span className="text-primary italic">.</span>
                                </span>
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="p-2 rounded-full hover:bg-dark/5 text-dark/50 transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto py-8 px-6 space-y-2">
                                {navItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => handleNavigation(item.id)}
                                        className={`w-full text-left px-5 py-4 rounded-2xl text-lg transition-all duration-200 ${isHomePage && activeSection === item.id
                                            ? 'bg-primary/5 text-primary font-medium'
                                            : 'text-dark/70 hover:bg-dark/5 hover:text-dark'
                                            }`}
                                    >
                                        {item.name}
                                    </button>
                                ))}
                            </div>

                            <div className="p-6 border-t border-dark/5">
                                <button
                                    onClick={handleResumeDownload}
                                    className="flex items-center justify-center space-x-2 w-full px-4 py-4 bg-primary text-white rounded-2xl hover:bg-primary-hover transition-colors font-medium shadow-lg shadow-primary/20"
                                >
                                    <Download className="w-5 h-5" />
                                    <span>Download Resume</span>
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navbar;
