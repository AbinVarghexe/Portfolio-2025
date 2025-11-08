import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseTrail from "@/components/MouseTrail";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const vina = localFont({
  src: "../../public/fonts/vina.ttf",
  variable: "--font-vina",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your Name - Full-Stack Developer",
  description: "Portfolio website showcasing projects and skills in web development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${vina.variable} antialiased`}
      >
        {/* WebGL mouse trail with custom Figma-like cursor */}
        <MouseTrail
          colors={['#ffffff']}
          baseThickness={4}
          enableCustomCursor={true}
          enableFade={true}
        />
        <Navbar />
        <div className="pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
