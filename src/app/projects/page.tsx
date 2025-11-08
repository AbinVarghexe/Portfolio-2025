// Projects Page - Site Under Development
import type { Metadata } from 'next';
import SiteUnderDevelopment from '@/components/ui/SiteUnderDevelopment';

export const metadata: Metadata = {
  title: "Projects | Abin Varghese",
  description:
    "Discover web apps, AI integrations, and portfolio designs built with React and Next.js. Explore Abin Varghese's portfolio of front-end development projects.",
  openGraph: {
    title: "Projects | Abin Varghese",
    description:
      "Discover web apps, AI integrations, and portfolio designs built with React and Next.js.",
    url: "https://abinvarghese.me/projects",
  },
};

export default function ProjectsPage() {
  return <SiteUnderDevelopment />;
}
