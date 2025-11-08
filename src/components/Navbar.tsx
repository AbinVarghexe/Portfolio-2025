// Navbar component - responsive navigation with floating effect
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Main Navbar Wrapper */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <motion.nav
          initial={false}
          animate={{
            scale: 0.95,
            width: '75%',
            height: '80px',
            borderRadius: '60px',
            y: 40,
            borderWidth: '1px',
            borderColor: isLightMode
              ? 'rgba(0, 0, 0, 0.1)'
              : 'rgba(255, 255, 255, 0.1)',
          }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 30,
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
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`relative text-[18px] font-regular transition-all duration-200 group ${
                        pathname === link.href
                          ? 'font-semibold'
                          : ''
                      }`}
                      style={{ 
                        color: isLightMode ? '#111827' : '#ffffff',
                      }}
                      onMouseEnter={(e) => {
                        if (isLightMode) {
                          e.currentTarget.style.color = '#374151';
                        } else {
                          e.currentTarget.style.color = '#d1d5db';
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = isLightMode ? '#111827' : '#ffffff';
                      }}
                    >
                      {link.label}
                      {/* Underline animation */}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Right Section: Theme Toggle + Mobile Menu */}
              <div className="flex items-center gap-2">
                {/* Theme Toggle Button */}
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
                  style={{ color: isLightMode ? '#111827' : '#ffffff' }}
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

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden relative z-10 p-2 transition-colors"
                  style={{ color: isLightMode ? '#111827' : '#ffffff' }}
                  aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                >
                  {isMenuOpen ? (
                    <X className="w-6 h-6" style={{ color: isLightMode ? '#111827' : '#ffffff' }} />
                  ) : (
                    <Menu className="w-6 h-6" style={{ color: isLightMode ? '#111827' : '#ffffff' }} />
                  )}
                </button>
              </div>
          </div>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Slide-in Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[#ECECEC] dark:bg-[#0A0A0A] z-40 md:hidden transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } border-l border-gray-300 dark:border-gray-700 shadow-2xl`}
      >
        <div className="flex flex-col h-full pt-24 px-6">
          {/* Mobile Navigation Links */}
          <ul className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                className={`transform transition-all duration-300 ${
                  isMenuOpen
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <Link
                  href={link.href}
                  className={`block py-4 px-4 rounded-lg text-base font-medium transition-all duration-200 ${
                    pathname === link.href
                      ? isLightMode ? 'bg-gray-300' : 'bg-gray-800'
                      : isLightMode ? 'hover:bg-gray-200' : 'hover:bg-gray-800'
                  }`}
                  style={{ color: isLightMode ? '#111827' : '#ffffff' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Footer with Theme Toggle */}
          <div className="mt-auto pb-8">
            <div className="pt-6 border-t border-gray-300 dark:border-gray-700 space-y-4">
              {/* Theme Toggle in Mobile Menu */}
              <button
                onClick={toggleTheme}
                className={`w-full flex items-center justify-between py-3 px-4 rounded-lg transition-all ${
                  isLightMode ? 'hover:bg-gray-200' : 'hover:bg-gray-800'
                }`}
                style={{ color: isLightMode ? '#111827' : '#ffffff' }}
                aria-label="Toggle theme"
              >
                <span className="text-sm font-medium" style={{ color: isLightMode ? '#111827' : '#ffffff' }}>Theme</span>
                <div className="flex items-center gap-2">
                  {mounted && (
                    isLightMode ? (
                      <>
                        <span className="text-xs" style={{ color: '#374151' }}>Light</span>
                        <Moon className="w-5 h-5" style={{ color: '#111827' }} />
                      </>
                    ) : (
                      <>
                        <span className="text-xs" style={{ color: '#9ca3af' }}>Dark</span>
                        <Sun className="w-5 h-5" style={{ color: '#ffffff' }} />
                      </>
                    )
                  )}
                </div>
              </button>
              
              <p className="text-xs" style={{ color: isLightMode ? '#4b5563' : '#9ca3af' }}>
                © 2024 Portfolio. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
