// Navbar component - Desktop-only responsive navigation with floating effect
// Mobile uses MobileNav (top) and MobileDock (bottom) components instead
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  isLightMode: boolean;
}

function NavLink({ href, label, isActive, isLightMode }: NavLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li>
      <Link
        href={href}
        className={`relative text-[18px] font-regular transition-all duration-200 group ${
          isActive ? 'font-semibold' : ''
        }`}
        style={{ 
          color: isLightMode ? '#111827' : '#ffffff',
        }}
        onMouseEnter={(e) => {
          setIsHovered(true);
          if (isLightMode) {
            e.currentTarget.style.color = '#374151';
          } else {
            e.currentTarget.style.color = '#d1d5db';
          }
        }}
        onMouseLeave={(e) => {
          setIsHovered(false);
          e.currentTarget.style.color = isLightMode ? '#111827' : '#ffffff';
        }}
      >
        <motion.span
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 17,
          }}
          className="inline-block"
        >
          {label}
        </motion.span>
        {/* Hover dot indicator - only shows on hover */}
        {!isActive && (
          <motion.span
            className="absolute -bottom-1 left-1/2 w-1.5 h-1.5 rounded-full"
            style={{
              backgroundColor: isLightMode ? '#111827' : '#ffffff',
            }}
            initial={{ 
              scale: 0,
              x: '-50%',
              opacity: 0,
            }}
            animate={{ 
              scale: isHovered ? 1 : 0,
              opacity: isHovered ? 1 : 0,
              x: '-50%',
            }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 17,
            }}
          />
        )}
      </Link>
    </li>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [isLightMode, setIsLightMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  // Check theme state
  useEffect(() => {
    setMounted(true);
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

  // Toggle theme
  const toggleTheme = () => {
    const html = document.documentElement;
    const isDark = html.classList.contains('dark');
    
    if (isDark) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <>
      {/* Main Navbar Wrapper - Desktop only */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <motion.nav
          initial={{ 
            opacity: 0,
            y: -100,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: 60,
            scale: 0.95,
            width: '75%',
            height: '80px',
            borderRadius: '60px',
            borderWidth: '1px',
            borderColor: isLightMode
              ? 'rgba(0, 0, 0, 0.1)'
              : 'rgba(255, 255, 255, 0.1)',
          }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 30,
            opacity: { duration: 0.5 },
          }}
          className="w-full pointer-events-auto shadow-lg text-gray-900 dark:text-white"
          style={{
            borderStyle: 'solid',
            backgroundColor: isLightMode 
              ? 'rgba(236, 236, 236, 0.7)' 
              : 'rgba(10, 10, 10, 0.7)',
            backdropFilter: 'blur(16px) saturate(180%)',
            WebkitBackdropFilter: 'blur(16px) saturate(180%)',
            color: isLightMode ? '#111827' : '#ffffff',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-18 h-full">
            <div className="flex items-center justify-between h-full">
              {/* Logo */}
              <Link
                href="/"
                className="relative text-xl md:text-2xl font-bold transition-colors z-10 hover:opacity-80"
                style={{ color: isLightMode ? '#111827' : '#ffffff' }}
              >
                <span className="font-['Vina'] text-4xl" style={{ color: isLightMode ? '#111827' : '#ffffff' }}>
                  ABIN
                </span>
              </Link>

              {/* Desktop Navigation Links - Centered */}
              <ul className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <NavLink
                      key={link.href}
                      href={link.href}
                      label={link.label}
                      isActive={isActive}
                      isLightMode={isLightMode}
                    />
                  );
                })}
              </ul>

              {/* Right Section: Theme Toggle (Mobile menu removed - using MobileNav and MobileDock) */}
              <div className="flex items-center gap-2">
                {/* Theme Toggle Button - Desktop only (mobile uses MobileNav) */}
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg transition-all"
                  style={{ 
                    color: isLightMode ? '#111827' : '#ffffff',
                    backgroundColor: 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    if (isLightMode) {
                      e.currentTarget.style.backgroundColor = 'rgba(229, 231, 235, 0.8)'; // light grey
                    } else {
                      e.currentTarget.style.backgroundColor = 'rgba(31, 41, 55, 0.8)'; // dark grey
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                  aria-label="Toggle theme"
                >
                  {mounted && (
                    isLightMode ? (
                      <Moon className="w-7 h-7" style={{ color: '#111827' }} />
                    ) : (
                      <Sun className="w-7 h-7" style={{ color: '#ffffff' }} />
                    )
                  )}
                </button>

                {/* Mobile Menu Button - Removed (using MobileNav and MobileDock instead) */}
              </div>
          </div>
          </div>
        </motion.nav>
      </div>
    </>
  );
}
