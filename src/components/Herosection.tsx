'use client';

import { memo } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import SquaresBackground from './ui/SquaresBackground';
import RotatingText from './ui/RotatingText';

const Herosection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center" style={{ backgroundColor: 'var(--color-bg-main)' }}>
      {/* Squares Background - contained within hero section */}
      <div className="absolute inset-0">
        <SquaresBackground 
          squareSize={50}
          strokeWidth={1}
          maxOpacity={0.15}
          strokeColor="rgba(0, 0, 0, 0.1)"
          className="dark:opacity-50"
        />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32 max-w-4xl">
        <div className="flex flex-col items-center text-center">
          {/* Main Heading - ABIN */}
          <div className="relative mb-1">
            <h1 
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-black dark:text-white leading-none"
              style={{ fontFamily: 'Vina, sans-serif' }}
            >
              ABIN
            </h1>
          </div>

          {/* Main Heading - VARGHESE */}
          <div className="relative mb-12">
            <h1 
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-black dark:text-white leading-none"
              style={{ fontFamily: 'Vina, sans-serif' }}
            >
              VARGHESE
            </h1>
          </div>

          {/* Subtitle with Rotating Text */}
          <div className="flex items-center justify-center gap-2 mb-6 flex-wrap text-xl md:text-2xl">
            <span className="text-black dark:text-white">I'm a</span>
            <span className="inline-block px-3 py-1 rounded-md bg-[#0020d7] text-white min-w-[180px] text-center">
              <RotatingText
                words={['Developer', 'Designer', 'Creator', 'Builder']}
                interval={2500}
              />
            </span>
          </div>

          {/* Descriptive Paragraph */}
          <p className="text-base md:text-lg text-black dark:text-white mb-12 max-w-2xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            {/* Contact me Button */}
            <Link
              href="/contact"
              className="group flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-b from-[#484848] to-[#333333] text-white hover:opacity-90 transition-all"
            >
              <span>Contact me</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>

            {/* Resume Button */}
            <Link
              href="/resume"
              className="group flex items-center gap-2 px-6 py-3 rounded-full bg-[#0020d7] text-white hover:opacity-90 transition-all"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Herosection);