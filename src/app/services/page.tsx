// Services Page - Site Under Development
import type { Metadata } from 'next';
import SiteUnderDevelopment from '@/components/ui/SiteUnderDevelopment';

export const metadata: Metadata = {
  title: "Services | Abin Varghese",
  description:
    "Explore web development, UI/UX design, mobile development, and consulting services offered by Abin Varghese. Front-end developer and designer available for projects.",
  openGraph: {
    title: "Services | Abin Varghese",
    description:
      "Explore web development, UI/UX design, mobile development, and consulting services.",
    url: "https://abinvarghese.me/services",
  },
};

export default function ServicesPage() {
  return <SiteUnderDevelopment />;
}

