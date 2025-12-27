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

  // Placeholder images - replace with actual backdrop images
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
      color: 'from-gold-400 to-yellow-500',
    },
    {
      name: 'Fun & Playful',
      description: 'Colorful and vibrant backdrops that add energy to any celebration',
      count: '15+ options',
      color: 'from-pink-400 to-purple-500',
    },
    {
      name: 'Themed',
      description: 'Specialty backdrops for holidays, seasons, and unique themes',
      count: '20+ options',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      name: 'Modern',
      description: 'Contemporary designs with clean lines and bold patterns',
      count: '10+ options',
      color: 'from-gray-400 to-slate-500',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="py-32 bg-gradient-to-br from-pink-600 to-orange-600 text-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Stunning Backdrop Collection
          </h1>
          <p className="text-xl md:text-2xl text-pink-100 max-w-3xl mx-auto">
            Transform your photo booth experience with our extensive collection
            of professional backdrops. From elegant to playful, we have the
            perfect backdrop for every event.
          </p>
        </div>
      </section>

      {/* Backdrop Gallery */}
      <section ref={galleryRef} className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Backdrop Collection
            </h2>
            <p className="text-xl text-gray-600">
              Choose from our wide selection of professional backdrops
            </p>
          </div>
          <Gallery images={backdropImages} columns={3} />
        </div>
      </section>

      {/* Backdrop Categories */}
      <section ref={categoriesRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Backdrop Categories
            </h2>
            <p className="text-xl text-gray-600">
              Find the perfect style for your event
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div
                  className={`h-32 bg-gradient-to-r ${category.color} flex items-center justify-center`}
                >
                  <h3 className="text-3xl font-bold text-white">
                    {category.name}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{category.description}</p>
                  <p className="text-blue-600 font-semibold">
                    {category.count} available
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Backdrop Option */}
      <section ref={customRef} className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl p-8 md:p-12 border-l-4 border-pink-600">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Need Something Custom?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Can&apos;t find the perfect backdrop in our collection? We offer
                custom backdrop design and printing services to match your exact
                vision. Whether you need a branded backdrop for a corporate
                event, a themed backdrop for a special celebration, or something
                completely unique, our team can bring your ideas to life.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Custom Design Process:
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-pink-600 mr-2">✓</span>
                      <span>Consultation to understand your vision</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-600 mr-2">✓</span>
                      <span>Professional design creation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-600 mr-2">✓</span>
                      <span>High-quality printing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-600 mr-2">✓</span>
                      <span>Delivery and setup</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Perfect For:
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-pink-600 mr-2">•</span>
                      <span>Corporate events with branding</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-600 mr-2">•</span>
                      <span>Unique themed celebrations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-600 mr-2">•</span>
                      <span>Special milestone events</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-600 mr-2">•</span>
                      <span>Any event requiring a one-of-a-kind look</span>
                    </li>
                  </ul>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-block bg-pink-600 text-white px-6 py-3 rounded-full font-bold hover:bg-pink-700 transition-colors duration-300"
              >
                Inquire About Custom Backdrops
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Choose Your Backdrop?
          </h2>
          <p className="text-xl mb-8 text-pink-100 max-w-2xl mx-auto">
            Contact us to discuss backdrop options for your event or schedule a
            consultation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 hover:text-pink-900 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Book Consultation
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              View All Backdrops
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

