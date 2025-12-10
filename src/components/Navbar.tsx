import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

interface NavbarProps {
    activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDark, setIsDark] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    const isHomePage = location.pathname === '/';

    // Theme toggle logic
    useEffect(() => {
        // Check system preference or local storage
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDark(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
            setIsDark(true);
        }
    };

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'experience', label: 'Experience' },
        { id: 'education', label: 'Education' },
        { id: 'certifications', label: 'Gallery' },
        { id: 'contact', label: 'Contact' }
    ];

    const handleNavigation = (id: string) => {
        setIsMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Fallback for home page navigation logic if we were on another page, 
            // but now we are single page so this is simple
            navigate('/', { state: { scrollTo: id } });
        }
    };

    // navigateToGallery removed as it is now part of navItems for scrolling

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
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/80 dark:bg-dark/80 backdrop-blur-md shadow-md py-2'
                : 'bg-transparent py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div
                        className="flex items-center space-x-2 font-bold text-xl text-primary cursor-pointer hover:text-primary-hover transition-colors"
                        onClick={() => handleNavigation('hero')}
                    >
                        <span className="text-2xl">MKP</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-6">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleNavigation(item.id)}
                                className={`text-sm font-medium transition-colors hover:text-primary relative group ${activeSection === item.id
                                    ? 'text-primary'
                                    : 'text-gray-600 dark:text-gray-300'
                                    }`}
                            >
                                {item.label}
                                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`}></span>
                            </button>
                        ))}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none"
                            aria-label="Toggle theme"
                        >
                            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>

                        <button
                            onClick={handleResumeDownload}
                            className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5"
                        >
                            <Download className="w-4 h-4" />
                            <span className="text-sm font-medium">Resume</span>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center space-x-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none"
                        >
                            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>

                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                            aria-label="Open menu"
                        >
                            <Menu className="w-6 h-6" />
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
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-3/4 max-w-xs bg-white dark:bg-dark-light z-50 shadow-2xl lg:hidden flex flex-col"
                        >
                            <div className="p-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
                                <span className="font-bold text-xl text-primary">Menu</span>
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto py-4 px-4 space-y-2">
                                {navItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => handleNavigation(item.id)}
                                        className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isHomePage && activeSection === item.id
                                            ? 'bg-primary/10 text-primary'
                                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                            }`}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>

                            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                                <button
                                    onClick={handleResumeDownload}
                                    className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors"
                                >
                                    <Download className="w-4 h-4" />
                                    <span className="text-sm font-medium">Download Resume</span>
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
