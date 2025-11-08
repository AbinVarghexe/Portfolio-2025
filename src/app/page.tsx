// Home Page - Hero section with profile, CTA, and social links
import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-zinc-200 dark:border-zinc-800 shadow-lg">
            <Image
              src="/profile.jpg"
              alt="Profile picture"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Your Name</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-medium">
              Full-Stack Developer & UI/UX Enthusiast
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
              I build modern web applications with clean code and beautiful interfaces.
              Passionate about creating seamless user experiences and scalable solutions.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link
              href="/projects"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-zinc-300 dark:border-zinc-700 hover:border-blue-600 dark:hover:border-blue-400 rounded-lg font-medium transition-colors"
            >
              Get in Touch
            </Link>
          </div>
          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-3 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-zinc-200 dark:border-zinc-800 shadow-lg">
            <Image
              src="/profile.jpg"
              alt="Profile picture"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Your Name</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-medium">
              Full-Stack Developer & UI/UX Enthusiast
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
              I build modern web applications with clean code and beautiful interfaces.
              Passionate about creating seamless user experiences and scalable solutions.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link
              href="/projects"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-zinc-300 dark:border-zinc-700 hover:border-blue-600 dark:hover:border-blue-400 rounded-lg font-medium transition-colors"
            >
              Get in Touch
            </Link>
          </div>
          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-3 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
