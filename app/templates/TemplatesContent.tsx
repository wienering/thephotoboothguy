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
        className="w-full py-32 bg-black text-white"
      >
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight">
              Custom Photo Templates
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed font-light">
              Personalized photo templates that make your event photos truly
              unique. Every design is crafted to match your event&apos;s theme and
              style.
            </p>
          </div>
        </div>
      </section>

      {/* Template Gallery */}
      <section ref={galleryRef} className="w-full py-32 bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-light text-black mb-4 leading-tight">
              Template Gallery
            </h2>
            <p className="text-lg text-gray-600 font-light">
              Browse our collection of stunning template designs
            </p>
          </div>
          <Gallery images={templateImages} columns={3} />
          <div className="mt-12">
            <p className="text-gray-600 font-light text-lg">
              Don&apos;t see exactly what you&apos;re looking for? We can create
              a completely custom design just for you!
            </p>
          </div>
        </div>
      </section>

      {/* Customization Info */}
      <section ref={customizationRef} className="w-full py-32 bg-gray-50">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-light text-black mb-4 leading-tight">
              Endless Customization Options
            </h2>
            <p className="text-lg text-gray-600 font-light">
              Make your template uniquely yours with our customization features
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {customizationOptions.map((option, index) => (
              <div
                key={index}
                className="group"
              >
                <div className="text-4xl mb-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  {option.icon}
                </div>
                <h3 className="text-2xl font-light text-black mb-3">
                  {option.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section ref={processRef} className="w-full py-32 bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-light text-black mb-4 leading-tight">
              Our Design Process
            </h2>
            <p className="text-lg text-gray-600 font-light">
              Simple steps to get your perfect custom template
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative border-l-2 border-black pl-8 py-4"
              >
                <div className="absolute -left-4 top-4 w-8 h-8 bg-black text-white flex items-center justify-center text-sm font-medium">
                  {step.number}
                </div>
                <h3 className="text-2xl font-light text-black mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-700 leading-relaxed font-light">{step.description}</p>
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
              Ready for a Custom Template?
            </h2>
            <p className="text-xl mb-12 text-gray-300 max-w-2xl leading-relaxed font-light">
              Let&apos;s work together to create the perfect template for your
              event
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-black px-10 py-5 text-base font-medium hover:bg-gray-100 transition-all duration-300 uppercase tracking-wider"
            >
              Request Custom Template
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
