import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/src/components/Navigation";
import FooterSection from "@/src/components/FooterSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://learn-with-mugdho.vercel.app"),
  title: {
    default: "Learn With Mugdho | HSC & Medical Admission Guide",
    template: "%s | Learn With Mugdho",
  },
  description: "Join Mugdho on his journey from a small town to a top-tier medical college. Expert tips, study resources, and honest insights for HSC and Medical aspirants in Bangladesh.",
  keywords: ["Medical Admission", "HSC Bangladesh", "Study Tips", "Mugdho Medical", "Medical Student Blog", "Bamondanga", "SSMC", "Admission Preparation", "Learn With Mugdho"],
  authors: [{ name: "Mugdho" }],
  creator: "Mugdho",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://learn-with-mugdho.vercel.app/",
    title: "Learn With Mugdho",
    description: "Join Mugdho on his journey from a small town to a top-tier medical college.",
    siteName: "Learn With Mugdho",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "Learn With Mugdho",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn With Mugdho",
    description: "From a small town to medical college: Study tips and resources for HSC students.",
    images: ["/image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navigation />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
