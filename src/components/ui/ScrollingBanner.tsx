'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollingBannerProps {
  items?: string[];
  speed?: number;
  className?: string;
}

const defaultItems = [
  'Web Developer',
  'Graphic Designer',
  'Video Editor',
  'VFX Artist',
  'Web Developer',
  'Graphic Designer',
  'Video Editor',
  'VFX Artist',
];

export const ScrollingBanner = ({
  items = defaultItems,
  speed = 30,
  className = '',
}: ScrollingBannerProps) => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const topBannerRef = useRef<HTMLDivElement>(null);
  const bottomBannerRef = useRef<HTMLDivElement>(null);
  const topContentRef = useRef<HTMLDivElement>(null);
  const bottomContentRef = useRef<HTMLDivElement>(null);
  
  // Add state to determine light/dark mode preference on client
  const [isLightMode, setIsLightMode] = useState<boolean>(true);

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

  useEffect(() => {
    if (!bannerRef.current || !topContentRef.current || !bottomContentRef.current || !topBannerRef.current || !bottomBannerRef.current) return;

    const topContent = topContentRef.current;
    const bottomContent = bottomContentRef.current;
    const topBanner = topBannerRef.current;
    const bottomBanner = bottomBannerRef.current;

    // Calculate the width of one set of items (1/4 of total since we quadrupled)
    const topWidth = topContent.scrollWidth / 4;
    const bottomWidth = bottomContent.scrollWidth / 4;

    // Set initial positions and rotation (fixed rotation)
    gsap.set(topBanner, { rotation: 8 });
    gsap.set(bottomBanner, { rotation: -8 });

    // Text scroll triggered by scroll - Top content moves left with infinite loop
    gsap.to(topContent, {
      x: -topWidth * 1,
      ease: 'none',
      modifiers: {
        x: gsap.utils.unitize(x => (parseFloat(x) % topWidth)),
      },
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 8, // Smooth scrubbing that reacts to scroll direction
      },
    });

    // Text scroll triggered by scroll - Bottom content moves right with infinite loop
    gsap.to(bottomContent, {
      x: bottomWidth * 1,
      ease: 'none',
      modifiers: {
        x: gsap.utils.unitize(x => (parseFloat(x) % bottomWidth)),
      },
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 8, // Smooth scrubbing that reacts to scroll direction
      },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [items, speed]);

  // Quadruple items for seamless infinite loop
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div    
      ref={bannerRef}
      className={`absolute top-1/2 left-0 right-0 w-full pointer-events-none ${className}`}
      style={{
        zIndex: 40,
        height: '200px',
        transform: 'translateY(-50%)',
      }}
    >
      {/* Top Banner - Rotated +8deg - Scrolls Left to Right */}
      <div 
        ref={topBannerRef}
        className="absolute top-1/2 left-1/2 w-[150%] overflow-hidden backdrop-blur-md shadow-lg"
        style={{
          transform: 'translate(-50%, -50%) rotateZ(8deg)',
          transformOrigin: 'center center',
          backgroundColor: isLightMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
          borderTop: `1px solid ${isLightMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'}`,
          borderBottom: `1px solid ${isLightMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'}`,
        }}
      >
        <div
          ref={topContentRef}
          className="inline-flex items-center px-8 py-4 font-medium text-2xl whitespace-nowrap will-change-transform"
        >
          {duplicatedItems.map((item, index) => (
            <span key={`top-${index}`} className="inline-flex items-center mx-8" style={{ color: isLightMode ? '#111827' : '#ffffff' }}>
              <span className="text-3xl mx-4" style={{ color: isLightMode ? '#111827' : '#ffffff' }}>✦</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Banner - Rotated -8deg - Scrolls Right to Left */}
      <div 
        ref={bottomBannerRef}
        className="absolute top-1/2 left-1/2 w-[150%] overflow-hidden backdrop-blur-md shadow-lg"
        style={{
          transform: 'translate(-50%, -50%) rotateZ(-8deg)',
          transformOrigin: 'center center',
          backgroundColor: isLightMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
          borderTop: `1px solid ${isLightMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'}`,
          borderBottom: `1px solid ${isLightMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'}`,
        }}
      >
        <div
          ref={bottomContentRef}
          className="inline-flex items-center px-8 py-4 font-medium text-2xl whitespace-nowrap will-change-transform"
          style={{ color: isLightMode ? '#111827' : '#ffffff' }}
        >
          {duplicatedItems.map((item, index) => (
            <span key={`bottom-${index}`} className="inline-flex items-center mx-8" style={{ color: isLightMode ? '#111827' : '#ffffff' }}>
              <span className="text-3xl mx-4" style={{ color: isLightMode ? '#111827' : '#ffffff' }}>✦</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingBanner;
