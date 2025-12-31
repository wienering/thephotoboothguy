import Link from 'next/link';
import Image from 'next/image';
import { getEasternYear } from '@/lib/timezone';

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white border-t border-gray-900">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <Image
                src="/logo.webp"
                alt="The Photobooth Guy"
                width={300}
                height={90}
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>
            <p className="mb-8 text-gray-400 leading-relaxed font-light max-w-md">
              Professional photo booth rental services across the Greater Toronto Area. Serving weddings, corporate events, and parties with premium equipment and exceptional service.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/photoboothguys.toronto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/photoboothguys.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-light mb-6 text-sm uppercase tracking-wider">Service Areas</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/photo-booth-rental-toronto"
                  className="text-gray-400 hover:text-white transition-colors font-light"
                >
                  Toronto
                </Link>
              </li>
              <li>
                <Link
                  href="/photo-booth-rental-mississauga"
                  className="text-gray-400 hover:text-white transition-colors font-light"
                >
                  Mississauga
                </Link>
              </li>
              <li>
                <Link
                  href="/photo-booth-rental-brampton"
                  className="text-gray-400 hover:text-white transition-colors font-light"
                >
                  Brampton
                </Link>
              </li>
              <li>
                <Link
                  href="/photo-booth-rental-vaughan"
                  className="text-gray-400 hover:text-white transition-colors font-light"
                >
                  Vaughan
                </Link>
              </li>
              <li>
                <Link
                  href="/photo-booth-rental-markham"
                  className="text-gray-400 hover:text-white transition-colors font-light"
                >
                  Markham
                </Link>
              </li>
            </ul>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-light mb-6 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors font-light"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/equipment"
                  className="text-gray-400 hover:text-white transition-colors font-light"
                >
                  Equipment
                </Link>
              </li>
              <li>
                <Link
                  href="/templates"
                  className="text-gray-400 hover:text-white transition-colors font-light"
                >
                  Templates
                </Link>
              </li>
              <li>
                <Link
                  href="/backdrops"
                  className="text-gray-400 hover:text-white transition-colors font-light"
                >
                  Backdrops
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors font-light"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h4 className="text-white font-light mb-6 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4 text-gray-400 font-light">
              <li>
                <a
                  href="tel:647-378-5332"
                  className="hover:text-white transition-colors"
                >
                  647-378-5332
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@thephotoboothguy.ca"
                  className="hover:text-white transition-colors"
                >
                  contact@thephotoboothguy.ca
                </a>
              </li>
              <li className="pt-2 text-sm">
                <p className="mb-1">Greater Toronto Area</p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Serving Toronto, Mississauga, Brampton, Vaughan, Markham, Richmond Hill, Oakville, Burlington, and surrounding areas
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8">
          <p className="text-gray-500 text-sm font-light text-center">
            &copy; {getEasternYear()} The Photobooth Guy. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
