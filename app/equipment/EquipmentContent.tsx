'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { revealOnScroll } from '@/lib/gsap';

export default function EquipmentContent() {
  const heroRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) revealOnScroll(heroRef.current);
    if (showcaseRef.current) revealOnScroll(showcaseRef.current);
    if (techRef.current) revealOnScroll(techRef.current);
    if (benefitsRef.current) revealOnScroll(benefitsRef.current);
  }, []);

  const equipmentItems = [
    {
      title: 'Professional DSLR Camera',
      description: 'High-resolution camera system that captures every detail with stunning clarity',
      specs: ['24MP sensor', 'Full HD video capability', 'Professional lighting integration'],
    },
    {
      title: 'Dye-Sublimation Printer',
      description: 'Industry-leading printer that produces vibrant, smudge-proof prints in seconds',
      specs: ['4x6 and 2x6 print sizes', 'Waterproof prints', 'Instant drying technology'],
    },
    {
      title: 'Touchscreen Interface',
      description: 'User-friendly touchscreen system that makes the photo booth experience seamless',
      specs: ['Large format display', 'Intuitive controls', 'Custom branding options'],
    },
    {
      title: 'Professional Lighting',
      description: 'Studio-quality lighting setup that ensures perfect photos every time',
      specs: ['Adjustable brightness', 'Color temperature control', 'Flattering light distribution'],
    },
  ];

  const techHighlights = [
    {
      icon: '📷',
      title: 'Camera Quality',
      description: 'Professional-grade DSLR cameras ensure every photo is crisp, clear, and ready to frame',
    },
    {
      icon: '🖨️',
      title: 'Print Technology',
      description: 'Dye-sublimation printing delivers vibrant colors and professional-quality prints that last',
    },
    {
      icon: '💻',
      title: 'Software Features',
      description: 'Advanced software with custom templates, instant sharing, and seamless social media integration',
    },
    {
      icon: '💡',
      title: 'Lighting System',
      description: 'Professional lighting rigs that create the perfect ambiance for stunning photos',
    },
  ];

  const benefits = [
    {
      title: 'Reliability',
      description: 'Our equipment is regularly maintained and tested to ensure flawless performance at every event',
    },
    {
      title: 'Quality',
      description: 'Professional-grade equipment means your guests get the highest quality photos possible',
    },
    {
      title: 'Innovation',
      description: 'We stay up-to-date with the latest technology to provide the best experience',
    },
    {
      title: 'Support',
      description: 'Our trained attendants are always on-site to ensure everything runs smoothly',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="w-full py-32 bg-black text-white"
      >
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight">
              Professional Equipment
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed font-light">
              State-of-the-art photo booth technology designed to deliver
              exceptional results at every event
            </p>
          </div>
        </div>
      </section>

      {/* Equipment Showcase */}
      <section ref={showcaseRef} className="w-full py-32 bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-light text-black mb-4 leading-tight">
              Our Equipment
            </h2>
            <p className="text-lg text-gray-600 font-light">
              Professional-grade technology for professional results
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {equipmentItems.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 p-10 hover:border-black transition-colors duration-300"
              >
                <h3 className="text-3xl font-light text-black mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed font-light">{item.description}</p>
                <ul className="space-y-3">
                  {item.specs.map((spec, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-black mr-4 mt-1 font-light">—</span>
                      <span className="text-gray-600 leading-relaxed">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Highlights */}
      <section ref={techRef} className="w-full py-32 bg-gray-50">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-light text-black mb-4 leading-tight">
              Technology Highlights
            </h2>
            <p className="text-lg text-gray-600 font-light">
              Cutting-edge features that set us apart
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {techHighlights.map((highlight, index) => (
              <div
                key={index}
                className="group"
              >
                <div className="text-4xl mb-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  {highlight.icon}
                </div>
                <h3 className="text-2xl font-light text-black mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Equipment */}
      <section ref={benefitsRef} className="w-full py-32 bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-light text-black mb-4 leading-tight">
              Why Our Equipment Matters
            </h2>
            <p className="text-lg text-gray-600 font-light">
              Professional equipment makes all the difference
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="border-l-2 border-black pl-8 py-4"
              >
                <h3 className="text-3xl font-light text-black mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed font-light">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-32 bg-black text-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-7xl font-light mb-8 leading-tight">
              Experience the Difference
            </h2>
            <p className="text-xl mb-12 text-gray-300 max-w-2xl leading-relaxed font-light">
              See our professional equipment in action at your next event
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-black px-10 py-5 text-base font-medium hover:bg-gray-100 transition-all duration-300 uppercase tracking-wider"
            >
              Book Your Event
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
