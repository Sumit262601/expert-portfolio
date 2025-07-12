import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import ContactFormModal from "@/components/contact-form-modal";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sumit | Portfolio",
  description:
    "Sumit's front-end developer portfolio featuring innovative projects, modern web technologies, and a passion for clean, user-friendly design. Explore expertise in React, Next.js, Tailwind CSS, and more.",
  keywords: [
    "Front-End Developer",
    "Web Developer",
    "React Developer",
    "JavaScript Developer",
    "Responsive Web Design",
  ],
  authors: [{ name: "SumitxDev", url: "https://expert-portfolio.vercel.app/" }],
  openGraph: {
    title: "Sumit's Portfolio",
    description:
      "Explore Sumit's cutting-edge front-end development projects, utilizing modern frameworks like React, Next.js, and Tailwind CSS.",
    url: "https://expert-portfolio.vercel.app/",
    siteName: "Sumit | Portfolio",
    images: [
      {
        url: "https://expert-portfolio.vercel.app/preview.png",
        width: 1200,
        height: 630,
        alt: "Sumit Portfolio Preview",
      },
    ],
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("font-sans antialiased relative", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children} {/* Main Page Content */}
          <Footer />
          <ContactFormModal />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
