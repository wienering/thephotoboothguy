'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Get a Quote', href: '/quote' },
  { name: 'Equipment', href: '/equipment' },
  { name: 'Templates', href: '/templates' },
  { name: 'Backdrops', href: '/backdrops' },
  { name: 'Contact', href: '/contact' },
];

const serviceLinks = [
  { name: 'Photo Booth Rental', href: '/photo-booth-rental-toronto' },
  { name: 'Glam Booth', href: '/glam-booth-toronto' },
  { name: 'Audio Guest Book', href: '/audio-guest-book-toronto' },
  { name: '360 Video Booth', href: '/360-booth-toronto' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

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
        scrolled ? 'bg-white border-b border-gray-200' : 'bg-white'
      }`}
    >
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center h-full">
            <Image
              src="/logo.webp"
              alt="The Photobooth Guy"
              width={300}
              height={90}
              className="h-16 md:h-20 w-auto object-contain"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-xs uppercase tracking-wider font-medium transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-black' : 'text-gray-700 hover:text-black'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`px-3 py-2 text-xs uppercase tracking-wider font-medium transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-black' : 'text-gray-700 hover:text-black'
                }`}
              >
                Services ▾
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 pt-2 w-56 z-50">
                  <div className="bg-white border border-gray-200 shadow-lg">
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-6 py-3 text-xs uppercase tracking-wider font-medium text-gray-700 hover:bg-black hover:text-white transition-all"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <Link
              href="/book"
              className={`border px-5 py-2 text-xs uppercase tracking-wider font-medium transition-all ml-2 ${
                scrolled 
                  ? 'border-black text-black hover:bg-black hover:text-white' 
                  : 'border-black text-black hover:bg-black hover:text-white'
              }`}
            >
              Book Now
            </Link>
          </div>

          <button
            className={`md:hidden focus:outline-none transition-colors ${
              scrolled ? 'text-black' : 'text-black'
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
                className="block text-sm uppercase tracking-wider font-medium py-2 transition-colors text-gray-700 hover:text-black"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Services Section */}
            <div className="border-t border-gray-200 pt-3 mt-3">
              <p className="text-xs uppercase tracking-wider font-medium text-gray-500 mb-2">Services</p>
              {serviceLinks.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block text-sm uppercase tracking-wider font-medium py-2 pl-4 transition-colors text-gray-700 hover:text-black"
                  onClick={() => setIsOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
            
            <Link
              href="/book"
              className="block border text-center px-6 py-3 text-sm uppercase tracking-wider font-medium transition-all border-black text-black hover:bg-black hover:text-white"
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
