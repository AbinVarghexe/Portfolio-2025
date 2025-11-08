// Contact Page - Site Under Development
import type { Metadata } from 'next';
import SiteUnderDevelopment from '@/components/ui/SiteUnderDevelopment';

export const metadata: Metadata = {
  title: "Contact | Abin Varghese",
  description:
    "Get in touch with Abin Varghese for freelance work, collaborations, or internship opportunities. Front-end developer and UI/UX designer available for projects.",
  openGraph: {
    title: "Contact | Abin Varghese",
    description:
      "Get in touch with Abin for freelance work, collaborations, or internship opportunities.",
    url: "https://abinvarghese.me/contact",
  },
};

export default function ContactPage() {
  return <SiteUnderDevelopment />;
}
