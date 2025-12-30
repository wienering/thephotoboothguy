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
      src: '/Backdrops/1759969973685-Midnight20Luxe203.webp',
      alt: 'Midnight Luxe backdrop with gold geometric lines for elegant Toronto photo booth rental',
      title: 'Midnight Luxe',
    },
    {
      src: '/Backdrops/1759971392814-Neon20Tunnel20Backdrop.webp',
      alt: 'Infinity Light Tunnel backdrop with illuminated corridor lines for modern photo booth events',
      title: 'Infinity Light Tunnel',
    },
    {
      src: '/Backdrops/1759971826284-Silver20Sequin.webp',
      alt: 'Silver Luxe Sequin backdrop with sleek silver mosaic pattern for corporate photo booth Toronto',
      title: 'Silver Luxe Sequin',
    },
    {
      src: '/Backdrops/1759972991300-WHITE20GOLD.webp',
      alt: 'White Gold Marble backdrop for luxury wedding photo booth rental',
      title: 'White Gold Marble',
    },
    {
      src: '/Backdrops/1759973042930-Cracked20Marble20Geometric20Design.webp',
      alt: 'Cracked Marble Geometric Design backdrop for modern corporate photo booth rental',
      title: 'Cracked Marble Geometric',
    },
    {
      src: '/Backdrops/1759967747847-IMG_5318.webp',
      alt: 'Black Pillowcase backdrop with deep matte black finish for editorial photo booth',
      title: 'Black Pillowcase',
    },
    {
      src: '/Backdrops/1759972728136-IMG_6348.webp',
      alt: 'Blush Floral Cascade backdrop with soft ivory and blush blooms for romantic photo booth',
      title: 'Blush Floral Cascade',
    },
    {
      src: '/Backdrops/1759972766639-IMG_6349.webp',
      alt: 'White Geo Art Deco backdrop with fine gold geometric lines for luxury wedding photo booth',
      title: 'White Geo Art Deco',
    },
    {
      src: '/Backdrops/1759972802301-IMG_6350.webp',
      alt: 'Midnight Luxe backdrop with gold geometric lines for elegant Toronto photo booth rental',
      title: 'Midnight Luxe',
    },
    {
      src: '/Backdrops/1759972824673-IMG_6351.webp',
      alt: 'Rustic Wood Light backdrop with warm wood planks and string lights for rustic photo booth',
      title: 'Rustic Wood Light',
    },
    {
      src: '/Backdrops/1759972854715-IMG_6352.webp',
      alt: 'Champagne Glow backdrop with dreamy printed bokeh effect for elegant photo booth rental',
      title: 'Champagne Glow',
    },
    {
      src: '/Backdrops/1759972876577-IMG_6354.webp',
      alt: 'Midnight Glow backdrop with dramatic black-and-gold bokeh print for nighttime photo booth',
      title: 'Midnight Glow',
    },
    {
      src: '/Backdrops/1760021647373-8de821fd-3536-4dbf-a9fb-6dbf83e82b4c.webp',
      alt: 'White Marble Luxe backdrop for elegant photo booth rental',
      title: 'White Marble Luxe',
    },
    {
      src: '/Backdrops/1760021686462-abd2d27e-018d-4df7-a349-3a72226201dc.webp',
      alt: 'Rustic Wood Light backdrop with warm wood planks and string lights for rustic photo booth',
      title: 'Rustic Wood Light',
    },
    {
      src: '/Backdrops/1760021811082-bad77596-b451-4581-aa52-404e55e0be44.webp',
      alt: 'Pink Blossom Wood backdrop for romantic photo booth rental',
      title: 'Pink Blossom Wood',
    },
    {
      src: '/Backdrops/1760565027729-IMG_6529.webp',
      alt: 'Gold Luxe Sequin backdrop with rich printed gold mosaic design for luxury photo booth events',
      title: 'Gold Luxe Sequin',
    },
    {
      src: '/Backdrops/1763415660893-0CE3C950-46FA-40C1-B962-FC5EB698DA19.webp',
      alt: 'Festive Fireplace backdrop with warm glowing fire and wrapped gifts for winter photo booth',
      title: 'Festive Fireplace',
    },
    {
      src: '/Backdrops/1763415726355-69283668-A44B-4224-8478-BAF33DA1A1C9.webp',
      alt: 'Winter Sleigh backdrop with bright geometric design in red and green for winter photo booth',
      title: 'Winter Sleigh',
    },
  ];

  const categories = [
    {
      name: 'Elegant',
      description: 'Sophisticated backdrops perfect for weddings and formal events',
      count: '9 options',
    },
    {
      name: 'Modern',
      description: 'Contemporary designs with clean lines and bold patterns',
      count: '3 options',
    },
    {
      name: 'Themed',
      description: 'Specialty backdrops for holidays, seasons, and unique themes',
      count: '4 options',
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
                Can't find what you're looking for? We can design and print a custom backdrop that matches exactly what you have in mind. Whether it's for a corporate event with your branding, a themed celebration, or something totally unique, we can make it happen.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
                <div>
                  <h3 className="text-xl font-light text-black mb-6">
                    Custom Design Process:
                  </h3>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-black mr-4 mt-1 font-light">-</span>
                      <span className="leading-relaxed font-light">We'll talk with you to understand what you want</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-black mr-4 mt-1 font-light">-</span>
                      <span className="leading-relaxed font-light">We'll create a professional design for you</span>
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
