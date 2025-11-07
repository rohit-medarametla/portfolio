'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm' : 'py-4 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary-light dark:text-accent hover:opacity-80 transition-opacity">
            Rohit
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-all duration-300 relative ${
                  pathname === item.path
                    ? 'text-primary-light dark:text-accent'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100'
                }`}
              >
                {item.name}
                {pathname === item.path && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-light dark:bg-accent" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" aria-label="Toggle menu">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-4 space-y-2 bg-white/95 dark:bg-slate-900/95 border-t border-slate-200 dark:border-slate-700">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${pathname === item.path ? 'bg-primary-light/10 text-primary-light dark:text-accent' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
