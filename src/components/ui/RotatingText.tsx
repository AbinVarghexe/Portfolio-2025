'use client';

import { useEffect, useState } from 'react';

interface RotatingTextProps {
  words: string[];
  interval?: number;
  className?: string;
}

const RotatingText = ({ words, interval = 2000, className = '' }: RotatingTextProps) => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIndex((current) => (current + 1) % words.length);
        setIsAnimating(false);
      }, 300);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span
      className={`inline-block transition-all duration-300 ${
        isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
      } ${className}`}
    >
      {words[index]}
    </span>
  );
};

export default RotatingText;
