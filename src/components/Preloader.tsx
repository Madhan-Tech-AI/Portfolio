import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [typed, setTyped] = useState('');
  const [phase, setPhase] = useState<'typing' | 'zooming'>('typing');
  const text = 'Maddy';

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    
    if (phase === 'typing') {
      if (typed.length < text.length) {
        timeout = setTimeout(() => {
          setTyped(text.slice(0, typed.length + 1));
        }, 150); // Typing speed
      } else {
        timeout = setTimeout(() => {
          setPhase('zooming');
        }, 800); // Pause after typing completes
      }
    } else if (phase === 'zooming') {
      // Trigger onComplete after zoom animation finishes
      timeout = setTimeout(() => {
        onComplete();
      }, 1500); 
    }
    
    return () => clearTimeout(timeout);
  }, [typed, phase, text, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#FAF0E6] overflow-hidden pointer-events-none"
        initial={{ opacity: 1, scale: 1 }}
        animate={
          phase === 'zooming' 
            ? { opacity: 0, scale: 1.05 } 
            : { opacity: 1, scale: 1 }
        }
        transition={{ duration: 1.2, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
        onAnimationComplete={(definition) => {
          if (definition && typeof definition === 'object' && 'opacity' in definition && definition.opacity === 0) {
             // Fallback complete
          }
        }}
      >
        <motion.div
          animate={
            phase === 'zooming' 
              ? { scale: 40, opacity: 0, y: -50 } 
              : { scale: 1, opacity: 1, y: 0 }
          }
          transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
          className="text-primary font-serif text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tight flex items-center relative"
        >
          {typed}
          {phase === 'typing' && (
            <motion.span 
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              className="inline-block w-[4px] sm:w-[6px] h-[0.8em] bg-primary ml-3 sm:ml-5 align-middle"
            />
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;
