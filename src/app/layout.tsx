import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GyanPat - School Management Software | Empowering Educational Institutions",
  description: "GyanPat provides comprehensive school management software solutions for schools and colleges. Streamline administration, enhance communication, and boost academic performance.",
  keywords: "school management software, college management system, education technology, student information system, school ERP, academic management",
  openGraph: {
    title: "GyanPat - School Management Software",
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
        {children}
      </body>
    </html>
  );
}
