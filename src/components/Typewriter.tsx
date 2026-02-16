'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TypewriterProps {
  words: string[];
  delay?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ words, delay = 3000 }) => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[index];
      
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        setTypingSpeed(150);
        
        if (displayText === currentWord) {
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        setTypingSpeed(75);
        
        if (displayText === '') {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, words, typingSpeed, delay]);

  return (
    <span className="relative font-mono normal-case font-normal">
      <span className="text-primary">{displayText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-[4px] h-[0.8em] bg-primary ml-1 align-middle"
      />
    </span>
  );
};

export default Typewriter;
