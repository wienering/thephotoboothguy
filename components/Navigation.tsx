'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const serviceLinks = [
  { name: 'Photo Booth Rental', href: '/photo-booth-rental-toronto' },
  { name: 'Glam Booth', href: '/glam-booth-toronto' },
  { name: 'Audio Guest Book', href: '/audio-guest-book-toronto' },
  { name: '360 Video Booth', href: '/360-booth-toronto' },
];

const galleryLinks = [
  { name: 'Equipment', href: '/equipment' },
  { name: 'Templates', href: '/templates' },
  { name: 'Backdrops', href: '/backdrops' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);

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

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/"
              className={`px-3 py-2 text-xs uppercase tracking-wider font-medium transition-colors ${
                scrolled ? 'text-gray-700 hover:text-black' : 'text-gray-700 hover:text-black'
              }`}
            >
              Home
            </Link>
            
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

            {/* Browse Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setGalleryOpen(true)}
              onMouseLeave={() => setGalleryOpen(false)}
            >
              <button
                className={`px-3 py-2 text-xs uppercase tracking-wider font-medium transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-black' : 'text-gray-700 hover:text-black'
                }`}
              >
                Browse ▾
              </button>
              
              {galleryOpen && (
                <div className="absolute top-full left-0 pt-2 w-48 z-50">
                  <div className="bg-white border border-gray-200 shadow-lg">
                    {galleryLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-6 py-3 text-xs uppercase tracking-wider font-medium text-gray-700 hover:bg-black hover:text-white transition-all"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className={`px-3 py-2 text-xs uppercase tracking-wider font-medium transition-colors ${
                scrolled ? 'text-gray-700 hover:text-black' : 'text-gray-700 hover:text-black'
              }`}
            >
              Contact
            </Link>
            
            <div className="flex items-center gap-2 ml-2">
              <Link
                href="/quote"
                className={`border px-4 py-2 text-xs uppercase tracking-wider font-medium transition-all ${
                  scrolled 
                    ? 'border-gray-300 text-gray-700 hover:border-black hover:text-black' 
                    : 'border-gray-300 text-gray-700 hover:border-black hover:text-black'
                }`}
              >
                Get Quote
              </Link>
              <Link
                href="/book"
                className={`border px-5 py-2 text-xs uppercase tracking-wider font-medium transition-all ${
                  scrolled 
                    ? 'border-black text-black hover:bg-black hover:text-white' 
                    : 'border-black text-black hover:bg-black hover:text-white'
                }`}
              >
                Book Now
              </Link>
            </div>
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
            <Link
              href="/"
              className="block text-sm uppercase tracking-wider font-medium py-2 transition-colors text-gray-700 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            
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

            {/* Mobile Browse Section */}
            <div className="border-t border-gray-200 pt-3">
              <p className="text-xs uppercase tracking-wider font-medium text-gray-500 mb-2">Browse</p>
              {galleryLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm uppercase tracking-wider font-medium py-2 pl-4 transition-colors text-gray-700 hover:text-black"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <Link
              href="/contact"
              className="block text-sm uppercase tracking-wider font-medium py-2 transition-colors text-gray-700 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            
            <div className="flex flex-col gap-3 mt-4">
              <Link
                href="/quote"
                className="block border text-center px-6 py-3 text-sm uppercase tracking-wider font-medium transition-all border-gray-300 text-gray-700 hover:border-black hover:text-black"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </Link>
              <Link
                href="/book"
                className="block border text-center px-6 py-3 text-sm uppercase tracking-wider font-medium transition-all border-black text-black hover:bg-black hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
