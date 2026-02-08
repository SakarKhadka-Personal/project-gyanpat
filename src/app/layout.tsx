import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GyanPath - School Management Software | Empowering Educational Institutions",
  description: "GyanPath provides comprehensive school management software solutions for schools and colleges. Streamline administration, enhance communication, and boost academic performance.",
  keywords: "school management software, college management system, education technology, student information system, school ERP, academic management, GyanPath",
  openGraph: {
    title: "GyanPath - School Management Software",
    description: "Comprehensive school management solutions for modern educational institutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
