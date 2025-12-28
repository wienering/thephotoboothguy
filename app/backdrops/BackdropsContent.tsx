'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Gallery from '@/components/Gallery';
import { revealOnScroll } from '@/lib/gsap';

export default function BackdropsContent() {
  const heroRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const customRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) revealOnScroll(heroRef.current);
    if (galleryRef.current) revealOnScroll(galleryRef.current);
    if (categoriesRef.current) revealOnScroll(categoriesRef.current);
    if (customRef.current) revealOnScroll(customRef.current);
  }, []);

  const backdropImages = [
    {
      src: '/api/placeholder/400/400',
      alt: 'Elegant Gold Backdrop',
      title: 'Elegant Gold',
    },
    {
      src: '/api/placeholder/400/400',
      alt: 'Floral Garden Backdrop',
      title: 'Floral Garden',
    },
    {
      src: '/api/placeholder/400/400',
      alt: 'Modern Geometric Backdrop',
      title: 'Modern Geometric',
    },
    {
      src: '/api/placeholder/400/400',
      alt: 'Vintage Retro Backdrop',
      title: 'Vintage Retro',
    },
    {
      src: '/api/placeholder/400/400',
      alt: 'Tropical Paradise Backdrop',
      title: 'Tropical Paradise',
    },
    {
      src: '/api/placeholder/400/400',
      alt: 'City Skyline Backdrop',
      title: 'City Skyline',
    },
    {
      src: '/api/placeholder/400/400',
      alt: 'Rustic Wood Backdrop',
      title: 'Rustic Wood',
    },
    {
      src: '/api/placeholder/400/400',
      alt: 'Sparkle Glamour Backdrop',
      title: 'Sparkle Glamour',
    },
    {
      src: '/api/placeholder/400/400',
      alt: 'Nature Forest Backdrop',
      title: 'Nature Forest',
    },
  ];

  const categories = [
    {
      name: 'Elegant',
      description: 'Sophisticated backdrops perfect for weddings and formal events',
      count: '12+ options',
    },
    {
      name: 'Fun & Playful',
      description: 'Colorful and vibrant backdrops that add energy to any celebration',
      count: '15+ options',
    },
    {
      name: 'Themed',
      description: 'Specialty backdrops for holidays, seasons, and unique themes',
      count: '20+ options',
    },
    {
      name: 'Modern',
      description: 'Contemporary designs with clean lines and bold patterns',
      count: '10+ options',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="w-full pt-32 pb-20 bg-black text-white"
      >
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl pt-16">
            <h1 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
              Stunning Backdrop Collection
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed font-light">
              We have a huge collection of professional backdrops to choose from. Whether you want something elegant or fun, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Backdrop Gallery */}
      <section ref={galleryRef} className="w-full py-20 bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-black mb-4 leading-tight">
              Our Backdrop Collection
            </h2>
          </div>
          <Gallery images={backdropImages} columns={3} />
        </div>
      </section>

      {/* Backdrop Categories */}
      <section ref={categoriesRef} className="w-full py-20 bg-gray-50">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-black mb-4 leading-tight">
              Backdrop Categories
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {categories.map((category, index) => (
              <div
                key={index}
                className="border border-gray-200 p-12 hover:border-black transition-colors duration-300"
              >
                <h3 className="text-4xl font-light text-black mb-6">
                  {category.name}
                </h3>
                <p className="text-gray-700 mb-8 leading-relaxed font-light">{category.description}</p>
                <p className="text-black font-medium text-sm uppercase tracking-wider">
                  {category.count} available
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Backdrop Option */}
      <section ref={customRef} className="w-full py-20 bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <div className="border border-gray-200 p-12">
              <h2 className="text-3xl md:text-4xl font-light text-black mb-6">
                Need Something Custom?
              </h2>
              <p className="text-lg text-gray-700 mb-10 leading-relaxed font-light">
                Can\'t find what you\'re looking for? We can design and print a custom backdrop that matches exactly what you have in mind. Whether it\'s for a corporate event with your branding, a themed celebration, or something totally unique, we can make it happen.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
                <div>
                  <h3 className="text-xl font-light text-black mb-6">
                    Custom Design Process:
                  </h3>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-black mr-4 mt-1 font-light">-</span>
                      <span className="leading-relaxed font-light">We\'ll talk with you to understand what you want</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-black mr-4 mt-1 font-light">-</span>
                      <span className="leading-relaxed font-light">We\'ll create a professional design for you</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-black mr-4 mt-1 font-light">-</span>
                      <span className="leading-relaxed font-light">We print it using high quality materials</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-black mr-4 mt-1 font-light">-</span>
                      <span className="leading-relaxed font-light">We deliver and set it up for you</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-light text-black mb-6">
                    Perfect For:
                  </h3>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-black mr-4 mt-1 font-light">•</span>
                      <span className="leading-relaxed font-light">Corporate events with branding</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-black mr-4 mt-1 font-light">•</span>
                      <span className="leading-relaxed font-light">Unique themed celebrations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-black mr-4 mt-1 font-light">•</span>
                      <span className="leading-relaxed font-light">Special milestone events</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-black mr-4 mt-1 font-light">•</span>
                      <span className="leading-relaxed font-light">Any event requiring a one-of-a-kind look</span>
                    </li>
                  </ul>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-black text-white px-10 py-5 text-base font-medium hover:bg-gray-900 transition-all duration-300 uppercase tracking-wider"
              >
                Inquire About Custom Backdrops
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-black text-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
              Ready to Choose Your Backdrop?
            </h2>
            <p className="text-lg mb-8 text-gray-300 max-w-2xl leading-relaxed font-light">
              Get in touch to talk about backdrop options for your event or to set up a consultation
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-black px-10 py-5 text-base font-medium hover:bg-gray-100 transition-all duration-300 uppercase tracking-wider"
              >
                Book Consultation
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-white text-white px-10 py-5 text-base font-medium hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-wider"
              >
                View All Backdrops
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
