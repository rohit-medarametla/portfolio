import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/lib/ThemeContext';
import Navbar from '@/components/layout/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rohit - Software Engineering Student',
  description: 'Portfolio website showcasing projects, skills, and experience in software development',
  keywords: ['software engineer', 'web developer', 'portfolio', 'Next.js', 'React'],
  authors: [{ name: 'Rohit' }],
  openGraph: {
    title: 'Rohit - Software Engineering Student',
    description: 'Portfolio website showcasing projects, skills, and experience',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 transition-colors duration-300`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
