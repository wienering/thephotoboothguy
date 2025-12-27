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
        className="py-32 bg-gradient-to-br from-blue-600 to-purple-600 text-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Professional Equipment
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            State-of-the-art photo booth technology designed to deliver
            exceptional results at every event
          </p>
        </div>
      </section>

      {/* Equipment Showcase */}
      <section ref={showcaseRef} className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Equipment
            </h2>
            <p className="text-xl text-gray-600">
              Professional-grade technology for professional results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {equipmentItems.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.specs.map((spec, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-600">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Highlights */}
      <section ref={techRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Technology Highlights
            </h2>
            <p className="text-xl text-gray-600">
              Cutting-edge features that set us apart
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {techHighlights.map((highlight, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-5xl mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Equipment */}
      <section ref={benefitsRef} className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Our Equipment Matters
            </h2>
            <p className="text-xl text-gray-600">
              Professional equipment makes all the difference
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border-l-4 border-blue-600"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience the Difference
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            See our professional equipment in action at your next event
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 hover:text-blue-900 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Book Your Event
          </Link>
        </div>
      </section>
    </div>
  );
}

