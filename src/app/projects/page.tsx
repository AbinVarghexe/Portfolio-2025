// Projects Page - Display portfolio projects from database
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';

// Define Project type (matches Prisma schema)
interface Project {
  id: string;
  title: string;
  description: string;
  content: string;
  imageUrl: string;
  demoUrl: string | null;
  githubUrl: string | null;
  tags: string[];
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

async function getProjects(): Promise<Project[]> {
  // Fetch from API route (uses Prisma)
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/projects`, {
    cache: 'no-store', // Always fetch fresh data
  });

  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  }

  return res.json();
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            A collection of projects I've built using modern web technologies.
            Each project showcases different aspects of full-stack development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-zinc-100 dark:bg-zinc-900">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                {project.featured && (
                  <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {projects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-zinc-600 dark:text-zinc-400">
              No projects found. Check back soon!
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
