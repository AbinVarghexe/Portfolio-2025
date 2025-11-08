'use client';

import React, { useState, useEffect } from 'react';
import { motion as m } from 'framer-motion';
import { ThemeToggle } from '../common/Themetoggle';

interface MobileNavProps {
  className?: string;
}

export const MobileNav = ({ className = '' }: MobileNavProps) => {
  const [isLightMode, setIsLightMode] = useState(false);

  // Check theme state
  useEffect(() => {
    const checkTheme = () => {
      setIsLightMode(!document.documentElement.classList.contains('dark'));
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  // Create a reference to force usage of motion import
  const MotionDiv = m.div;

  return (
    <div className={`fixed top-10 left-1/2 transform -translate-x-1/2 z-50 ${className}`}>
      <MotionDiv
        className="flex items-center justify-between gap-6 px-6! py-3! rounded-full shadow-lg min-w-[350px]"
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: 0, 
          opacity: 1,
          borderWidth: '1px',
          borderColor: isLightMode
            ? 'rgba(0, 0, 0, 0.1)'
            : 'rgba(255, 255, 255, 0.1)',
        }}
        transition={{ 
          type: 'spring', 
          stiffness: 400, 
          damping: 25,
          delay: 0.2 
        }}
        style={{
          borderStyle: 'solid',
          backgroundColor: isLightMode 
            ? 'rgba(236, 236, 236, 0.7)' 
            : 'rgba(10, 10, 10, 0.7)',
          backdropFilter: 'blur(16px) saturate(180%)',
          WebkitBackdropFilter: 'blur(16px) saturate(180%)',
        }}
      >
        {/* Logo */}
        <MotionDiv
          className="flex items-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: 'spring', 
            stiffness: 400, 
            damping: 25,
            delay: 0.4 
          }}
        >
          <span 
            className="font-bold text-2xl font-['Vina'] tracking-wide"
            style={{ color: isLightMode ? '#111827' : '#ffffff' }}
          >
            ABIN
          </span>
        </MotionDiv>

        {/* Theme Toggle Button */}
        <ThemeToggle className="p-2!" />
      </MotionDiv>
    </div>
  );
};
