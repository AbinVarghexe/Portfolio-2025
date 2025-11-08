// Navbar component - Desktop-only responsive navigation with floating effect
// Mobile uses MobileNav (top) and MobileDock (bottom) components instead
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

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
          initial={false}
          animate={{
            scale: 0.95,
            width: '75%',
            height: '80px',
            borderRadius: '60px',
            y: 60,
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

              {/* Right Section: Theme Toggle (Mobile menu removed - using MobileNav and MobileDock) */}
              <div className="flex items-center gap-2">
                {/* Theme Toggle Button - Desktop only (mobile uses MobileNav) */}
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

                {/* Mobile Menu Button - Removed (using MobileNav and MobileDock instead) */}
              </div>
          </div>
          </div>
        </motion.nav>
      </div>
    </>
  );
}
