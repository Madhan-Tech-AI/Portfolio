import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingContact: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    className="fixed bottom-8 right-8 z-40"
                >
                    <motion.div
                        className="relative"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {/* Tooltip */}
                        <AnimatePresence>
                            {isHovered && (
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white dark:bg-dark-light text-dark dark:text-white px-3 py-1.5 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap border border-gray-100 dark:border-gray-700"
                                >
                                    Let's Talk!
                                    {/* Arrow */}
                                    <div className="absolute top-1/2 -translate-y-1/2 -right-1 w-2 h-2 bg-white dark:bg-dark-light transform rotate-45 border-t border-r border-gray-100 dark:border-gray-700"></div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <button
                            onClick={scrollToContact}
                            className="flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full shadow-lg hover:bg-primary-hover transition-colors shadow-primary/30"
                        >
                            <MessageCircle className="w-7 h-7" />
                        </button>
                        <span className="absolute top-0 right-0 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                        </span>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FloatingContact;
