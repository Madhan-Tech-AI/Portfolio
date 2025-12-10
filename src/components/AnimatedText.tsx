import React, { useState, useEffect } from 'react';

const AnimatedText: React.FC = () => {
  const texts = [
    'AI and Full Stack Developer at Story Seed Studio',
    'Developer & Co-ordinator at Unai Tech',
    'Artificial Intelligence and Data Science Enthusiast'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsVisible(true);
      }, 500); // Half second fade out
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <span
      className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'
        }`}
    >
      {texts[currentIndex]}
    </span>
  );
};

export default AnimatedText;