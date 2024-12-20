"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'bg-white/10' : '';
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 hover:opacity-80 transition-opacity"
          >
            MS.Song
          </Link>
          <div className="flex space-x-4">
            <Link 
              href="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition ${isActive('/')}`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition ${isActive('/about')}`}
            >
              About
            </Link>
            <Link 
              href="/projects" 
              className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition ${isActive('/projects')}`}
            >
              Projects
            </Link>
            <Link 
              href="/speaking" 
              className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition ${isActive('/speaking')}`}
            >
              Speaking
            </Link>
            <Link 
              href="/contact" 
              className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition ${isActive('/contact')}`}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
