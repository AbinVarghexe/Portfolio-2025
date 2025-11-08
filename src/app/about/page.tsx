// About Page - Site Under Development
import type { Metadata } from 'next';
import SiteUnderDevelopment from '@/components/ui/SiteUnderDevelopment';

export const metadata: Metadata = {
  title: "About Me | Abin Varghese",
  description:
    "Learn about Abin Varghese's journey, education, and experience as a front-end developer and UI/UX designer. Discover skills, achievements, and background.",
  openGraph: {
    title: "About Me | Abin Varghese",
    description:
      "Learn about Abin's journey, education, and experience as a developer and designer.",
    url: "https://abinvarghese.me/about",
  },
};

export default function AboutPage() {
  return <SiteUnderDevelopment />;
}
