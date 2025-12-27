'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { gsap } from '@/lib/gsap';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Equipment', href: '/equipment' },
  { name: 'Contact', href: '/contact' },
  { name: 'Templates', href: '/templates' },
  { name: 'Backdrops', href: '/backdrops' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white border-b border-gray-200' : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className={`text-lg font-light tracking-wider transition-colors ${
            scrolled ? 'text-black' : 'text-white'
          }`}>
            The Photo Booth Guy
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs uppercase tracking-wider font-medium transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-black' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`border px-5 py-2 text-xs uppercase tracking-wider font-medium transition-all ${
                scrolled 
                  ? 'border-black text-black hover:bg-black hover:text-white' 
                  : 'border-white text-white hover:bg-white hover:text-black'
              }`}
            >
              Book Now
            </Link>
          </div>

          <button
            className={`md:hidden focus:outline-none transition-colors ${
              scrolled ? 'text-black' : 'text-white'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-sm uppercase tracking-wider font-medium py-2 transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-black' : 'text-white hover:text-white/80'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`block border text-center px-6 py-3 text-sm uppercase tracking-wider font-medium transition-all ${
                scrolled 
                  ? 'border-black text-black hover:bg-black hover:text-white' 
                  : 'border-white text-white hover:bg-white hover:text-black'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
