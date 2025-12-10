import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    imageSrc?: string;
    quote?: string;
    children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, imageSrc, quote, children }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                />

                {/* Modal Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="relative bg-white dark:bg-dark-light rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-100 dark:border-gray-800">
                        <h3 className="text-xl font-bold text-dark dark:text-white line-clamp-1 pr-4">
                            {title}
                        </h3>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Body */}
                    <div className="p-6 overflow-y-auto flex-1">
                        {quote && (
                            <div className="mb-6 bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
                                <p className="text-gray-700 dark:text-gray-300 italic">"{quote}"</p>
                            </div>
                        )}

                        {imageSrc ? (
                            <div className="w-full h-full min-h-[300px] flex items-center justify-center bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden">
                                <img
                                    src={imageSrc}
                                    alt={title}
                                    className="max-w-full max-h-[60vh] object-contain"
                                />
                            </div>
                        ) : (
                            children
                        )}
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default Modal;
