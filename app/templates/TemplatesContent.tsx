'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Gallery from '@/components/Gallery';
import { revealOnScroll } from '@/lib/gsap';

export default function TemplatesContent() {
  const heroRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const customizationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) revealOnScroll(heroRef.current);
    if (galleryRef.current) revealOnScroll(galleryRef.current);
    if (processRef.current) revealOnScroll(processRef.current);
    if (customizationRef.current) revealOnScroll(customizationRef.current);
  }, []);

  // Placeholder images - replace with actual template images
  const templateImages = [
    {
      src: '/api/placeholder/400/400',
      alt: 'Elegant Wedding Template',
      title: 'Elegant Wedding',
    },
    {
      src: '/api/placeholder/400/400',
      alt: 'Birthday Party Template',
      title: 'Birthday Celebration',
    },
    {
      src: '/api/placeholder/400/400',
      alt: 'Corporate Event Template',
      title: 'Corporate Event',
    },
    {
      src: '/api/placeholder/400/400',
      alt: 'Graduation Template',
      title: 'Graduation',
    },
    {
      src: '/api/placeholder/400/400',
      alt: 'Holiday Party Template',
      title: 'Holiday Party',
    },
    {
      src: '/api/placeholder/400/400',
      alt: 'Anniversary Template',
      title: 'Anniversary',
    },
  ];

  const customizationOptions = [
    {
      icon: '🎨',
      title: 'Color Matching',
      description: 'We match your template colors to your event theme perfectly',
    },
    {
      icon: '✏️',
      title: 'Custom Text',
      description: 'Add your event name, date, or personalized messages',
    },
    {
      icon: '🖼️',
      title: 'Logo Integration',
      description: 'Include your company or event logo seamlessly',
    },
    {
      icon: '🎭',
      title: 'Theme Design',
      description: 'Create templates that match any theme or style',
    },
  ];

  const processSteps = [
    {
      number: '1',
      title: 'Share Your Vision',
      description: 'Tell us about your event theme, colors, and style preferences',
    },
    {
      number: '2',
      title: 'Design Creation',
      description: 'Our team creates a custom template that perfectly matches your event',
    },
    {
      number: '3',
      title: 'Review & Approve',
      description: 'Review the design and request any adjustments before your event',
    },
    {
      number: '4',
      title: 'Enjoy Your Event',
      description: 'Your custom template is ready to use at your event',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="py-32 bg-gradient-to-br from-purple-600 to-pink-600 text-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Custom Photo Templates
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
            Personalized photo templates that make your event photos truly
            unique. Every design is crafted to match your event&apos;s theme and
            style.
          </p>
        </div>
      </section>

      {/* Template Gallery */}
      <section ref={galleryRef} className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Template Gallery
            </h2>
            <p className="text-xl text-gray-600">
              Browse our collection of stunning template designs
            </p>
          </div>
          <Gallery images={templateImages} columns={3} />
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Don&apos;t see exactly what you&apos;re looking for? We can create
              a completely custom design just for you!
            </p>
          </div>
        </div>
      </section>

      {/* Customization Info */}
      <section ref={customizationRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Endless Customization Options
            </h2>
            <p className="text-xl text-gray-600">
              Make your template uniquely yours with our customization features
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {customizationOptions.map((option, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-5xl mb-4">{option.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {option.title}
                </h3>
                <p className="text-gray-600">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section ref={processRef} className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Design Process
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to get your perfect custom template
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-600"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 mt-4">
                  {step.title}
                </h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for a Custom Template?
          </h2>
          <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
            Let&apos;s work together to create the perfect template for your
            event
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 hover:text-purple-900 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Request Custom Template
          </Link>
        </div>
      </section>
    </div>
  );
}

