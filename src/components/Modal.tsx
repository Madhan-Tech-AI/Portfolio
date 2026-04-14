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
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="relative bg-light rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col border border-dark/10"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 sm:p-8 border-b border-dark/5">
                        <h3 className="text-2xl font-serif font-bold text-dark line-clamp-1 pr-4">
                            {title}
                        </h3>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-full bg-dark/5 text-dark/50 hover:bg-dark/10 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Body */}
                    <div className="p-6 sm:p-8 overflow-y-auto flex-1 custom-scrollbar">
                        {quote && (
                            <div className="mb-8 border-l-2 border-primary pl-6 py-2">
                                <p className="text-dark/70 font-serif italic text-lg leading-relaxed">"{quote}"</p>
                            </div>
                        )}

                        {imageSrc ? (
                            <div className="w-full h-full min-h-[300px] flex items-center justify-center rounded-xl overflow-hidden">
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
