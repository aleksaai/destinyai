import React, { useEffect, useState } from 'react';
import { INDUSTRIES_DATA } from './constants';

const AnimatedIndustryLabel = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  
  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);
  
  useEffect(() => {
    const industry = INDUSTRIES_DATA[currentIndex].title;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < industry.length) {
          setCurrentText(industry.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % INDUSTRIES_DATA.length);
        } else {
          setCurrentText(currentText.slice(0, -1));
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex]);

  return (
    <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
      <span className="text-xl font-medium text-white">
        {currentText}
        <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
      </span>
    </div>
  );
};

export default AnimatedIndustryLabel;