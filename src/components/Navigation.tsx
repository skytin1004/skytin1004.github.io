'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const homeLinks = [
  { href: '#work', label: 'Work' },
  { href: '#writing', label: 'Writing' },
  { href: '#journey', label: 'Journey' },
  { href: '#connect', label: 'Connect' },
];

const innerLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/speaking', label: 'Speaking' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const pathname = usePathname();
  const links = pathname === '/' ? homeLinks : innerLinks;

  return (
    <header className="site-header">
      <nav className="site-nav">
        <div className="site-nav-row">
          <Link className="brand-link" href="/">
            <span className="brand-mark">MS</span>
            <span className="brand-name">MINSEOK SONG</span>
          </Link>

          <div className="nav-links">
            {links.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
