// Services Page - Display services offered
'use client';

import { motion } from 'framer-motion';
import { Code, Palette, Smartphone, Database, Zap, Globe } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks like React, Next.js, and TypeScript. Responsive, fast, and user-friendly.',
    features: [
      'Full-stack development',
      'RESTful API design',
      'Performance optimization',
      'SEO-friendly architecture',
    ],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces that provide exceptional user experiences. From wireframes to pixel-perfect designs.',
    features: [
      'User research & analysis',
      'Wireframing & prototyping',
      'Design systems',
      'Accessibility compliance',
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android. Built with React Native or Flutter for maximum reach.',
    features: [
      'iOS & Android apps',
      'Cross-platform solutions',
      'App store optimization',
      'Push notifications',
    ],
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Robust server-side solutions with scalable architecture. Database design, API development, and cloud infrastructure.',
    features: [
      'API development',
      'Database design',
      'Cloud deployment',
      'Security & authentication',
    ],
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Speed up your applications with performance audits, code optimization, and infrastructure improvements.',
    features: [
      'Performance audits',
      'Code optimization',
      'Caching strategies',
      'Load time reduction',
    ],
  },
  {
    icon: Globe,
    title: 'Consulting & Strategy',
    description: 'Technical consulting to help you make informed decisions about technology stack, architecture, and development processes.',
    features: [
      'Technology consulting',
      'Architecture planning',
      'Code reviews',
      'Team mentoring',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen py-20 pt-32">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Services
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Comprehensive development and design services to bring your ideas to life.
            From concept to deployment, I've got you covered.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start text-sm text-zinc-700 dark:text-zinc-300"
                    >
                      <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help bring your vision to life. Get in touch
              and let's create something amazing together.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

