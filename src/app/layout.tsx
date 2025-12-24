import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    default: "Mugdho's Medical Journey | HSC & Medical Admission Guide",
    template: "%s | Mugdho's Medical Journey",
  },
  description: "Join Mugdho on his journey from a small town to a top-tier medical college. Expert tips, study resources, and honest insights for HSC and Medical aspirants in Bangladesh.",
  keywords: ["Medical Admission", "HSC Bangladesh", "Study Tips", "Mugdho Medical", "Medical Student Blog", "Bamondanga", "SSMC", "Admission Preparation"],
  authors: [{ name: "Mugdho" }],
  creator: "Mugdho",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://learn-with-mugdho.vercel.app/",
    title: "Mugdho's Medical Journey",
    description: "Personal brand and educational platform for HSC & Medical admission seekers.",
    siteName: "Mugdho's Medical Journey",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "Mugdho's Medical Journey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mugdho's Medical Journey",
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
        {children}
      </body>
    </html>
  );
}
