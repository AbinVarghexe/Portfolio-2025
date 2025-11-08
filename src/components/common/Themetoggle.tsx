'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle = ({ className = '' }: ThemeToggleProps) => {
  const [mounted, setMounted] = useState(false);
  const [isLightMode, setIsLightMode] = useState<boolean>(true);

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
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  if (!mounted) {
    return (
      <button
        className={`p-2 rounded-lg transition-all ${className}`}
        aria-label="Toggle theme"
      >
        <div className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-lg hover:bg-white/10 transition-all ${className}`}
      style={{ color: isLightMode ? '#111827' : '#ffffff' }}
      aria-label="Toggle theme"
    >
      {isLightMode ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
    </button>
  );
};
