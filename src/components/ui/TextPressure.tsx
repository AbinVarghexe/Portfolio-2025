'use client';

import React, { useRef, useEffect, useState } from 'react';

interface TextPressureProps {
  text: string;
  className?: string;
  maxScale?: number;
  minScale?: number;
  radius?: number;
  strength?: number;
}

const TextPressure: React.FC<TextPressureProps> = ({
  text,
  className = '',
  maxScale = 1.5,
  minScale = 1,
  radius = 100,
  strength = 0.3,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const calculateCharacterScale = (charIndex: number, totalChars: number) => {
    if (!isHovering || !containerRef.current) return minScale;

    const chars = containerRef.current.querySelectorAll('.char');
    const char = chars[charIndex] as HTMLElement;
    if (!char) return minScale;

    const charRect = char.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    
    const charCenterX = charRect.left - containerRect.left + charRect.width / 2;
    const charCenterY = charRect.top - containerRect.top + charRect.height / 2;

    const distance = Math.sqrt(
      Math.pow(mousePosition.x - charCenterX, 2) +
      Math.pow(mousePosition.y - charCenterY, 2)
    );

    if (distance > radius) return minScale;

    const scale = 1 - (distance / radius);
    const finalScale = minScale + (maxScale - minScale) * scale * strength;

    return Math.max(minScale, Math.min(maxScale, finalScale));
  };

  const characters = text.split('');

  return (
    <div ref={containerRef} className={`inline-flex ${className}`}>
      {characters.map((char, index) => {
        const scale = calculateCharacterScale(index, characters.length);
        return (
          <span
            key={index}
            className="char inline-block transition-transform duration-100 ease-out"
            style={{
              transform: `scale(${scale})`,
              transformOrigin: 'center',
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        );
      })}
    </div>
  );
};

export default TextPressure;
