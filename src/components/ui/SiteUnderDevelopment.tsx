'use client';

import { Code, Wrench, Sparkles } from 'lucide-react';

export default function SiteUnderDevelopment() {
  return (
    <section className="relative py-20 md:py-32" style={{ backgroundColor: 'var(--color-bg-main)' }}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col items-center text-center">
          {/* Icon */}
          <div className="mb-6 w-16 h-16 rounded-full bg-[#0020d7] flex items-center justify-center">
            <Code className="w-8 h-8 text-white" />
          </div>

          {/* Heading */}
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4"
            style={{ color: 'var(--color-primary)' }}
          >
            Site Under Development
          </h2>

          {/* Description */}
          <p 
            className="text-base md:text-lg mb-8 max-w-2xl leading-relaxed"
            style={{ color: 'var(--color-text-body)' }}
          >
            We're currently working on building something amazing. Check back soon for updates!
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-12">
            {/* Feature 1 */}
            <div 
              className="p-6 rounded-xl border"
              style={{ 
                backgroundColor: 'var(--color-bg-card)',
                borderColor: 'var(--color-border-primary)'
              }}
            >
              <div className="w-12 h-12 rounded-lg bg-[#0020d7] flex items-center justify-center mb-4 mx-auto">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 
                className="font-semibold mb-2"
                style={{ color: 'var(--color-primary)' }}
              >
                Development
              </h3>
              <p 
                className="text-sm"
                style={{ color: 'var(--color-text-body)' }}
              >
                Actively building and improving features
              </p>
            </div>

            {/* Feature 2 */}
            <div 
              className="p-6 rounded-xl border"
              style={{ 
                backgroundColor: 'var(--color-bg-card)',
                borderColor: 'var(--color-border-primary)'
              }}
            >
              <div className="w-12 h-12 rounded-lg bg-[#0020d7] flex items-center justify-center mb-4 mx-auto">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <h3 
                className="font-semibold mb-2"
                style={{ color: 'var(--color-primary)' }}
              >
                Optimization
              </h3>
              <p 
                className="text-sm"
                style={{ color: 'var(--color-text-body)' }}
              >
                Fine-tuning performance and user experience
              </p>
            </div>

            {/* Feature 3 */}
            <div 
              className="p-6 rounded-xl border"
              style={{ 
                backgroundColor: 'var(--color-bg-card)',
                borderColor: 'var(--color-border-primary)'
              }}
            >
              <div className="w-12 h-12 rounded-lg bg-[#0020d7] flex items-center justify-center mb-4 mx-auto">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 
                className="font-semibold mb-2"
                style={{ color: 'var(--color-primary)' }}
              >
                Innovation
              </h3>
              <p 
                className="text-sm"
                style={{ color: 'var(--color-text-body)' }}
              >
                Creating unique and engaging experiences
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

