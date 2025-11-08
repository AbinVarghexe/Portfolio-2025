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
              ? 'rgba(255, 255, 255, 0.3)'
              : 'rgba(255, 255, 255, 0.2)',
          }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 30,
          }}
          className="w-full pointer-events-auto shadow-lg"
          style={{
            borderStyle: 'solid',
            backgroundColor: 'rgba(217, 217, 217, 0.3)',
            backdropFilter: 'blur(16px) saturate(180%)',
            WebkitBackdropFilter: 'blur(16px) saturate(180%)',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-18 h-full">
            <div className="flex items-center justify-between h-full">
              {/* Logo */}
              <Link
                href="/"
                className="relative text-xl md:text-2xl font-bold text-black hover:text-gray-800 transition-colors z-10"
              >
                <span className="text-black font-['Vina'] text-4xl">
                  ABIN
                </span>
              </Link>

              {/* Desktop Navigation Links - Centered */}
              <ul className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`relative text-[18px] font-regular transition-all duration-200 hover:text-gray-800 group ${
                        pathname === link.href
                          ? 'text-black font-semibold'
                          : 'text-black'
                      }`}
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
                  className="p-2 rounded-lg text-black hover:text-gray-800 hover:bg-gray-200 transition-all"
                  aria-label="Toggle theme"
                >
                  {mounted && (
                    isLightMode ? (
                      <Moon className="w-7 h-7" />
                    ) : (
                      <Sun className="w-7 h-7" />
                    )
                  )}
                </button>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden relative z-10 p-2 text-black hover:text-gray-800 transition-colors"
                  aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                >
                  {isMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
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
        className={`fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white dark:bg-black z-40 md:hidden transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } border-l border-zinc-200 dark:border-zinc-800 shadow-2xl`}
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
                      ? 'bg-gray-200 text-black'
                      : 'text-black hover:bg-gray-100'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Footer with Theme Toggle */}
          <div className="mt-auto pb-8">
            <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 space-y-4">
              {/* Theme Toggle in Mobile Menu */}
              <button
                onClick={toggleTheme}
                className="w-full flex items-center justify-between py-3 px-4 rounded-lg text-black hover:bg-gray-100 transition-all"
                aria-label="Toggle theme"
              >
                <span className="text-sm font-medium">Theme</span>
                <div className="flex items-center gap-2">
                  {mounted && (
                    isLightMode ? (
                      <>
                        <span className="text-xs text-gray-600">Light</span>
                        <Moon className="w-5 h-5" />
                      </>
                    ) : (
                      <>
                        <span className="text-xs text-gray-600">Dark</span>
                        <Sun className="w-5 h-5" />
                      </>
                    )
                  )}
                </div>
              </button>
              
              <p className="text-xs text-gray-600">
                © 2024 Portfolio. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
