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
      alt: 'Elegant wedding photo booth template with custom design for Toronto weddings',
      title: 'Elegant Wedding',
    },
    {
      src: '/api/placeholder/400/400',
      alt: 'Birthday party photo booth template with instant prints for GTA celebrations',
      title: 'Birthday Celebration',
    },
    {
      src: '/api/placeholder/400/400',
      alt: 'Corporate event photo booth template with company branding for Toronto businesses',
      title: 'Corporate Event',
    },
    {
      src: '/api/placeholder/400/400',
      alt: 'Graduation photo booth template with custom text for GTA graduates',
      title: 'Graduation',
    },
    {
      src: '/api/placeholder/400/400',
      alt: 'Holiday party photo booth template with festive design for Toronto events',
      title: 'Holiday Party',
    },
    {
      src: '/api/placeholder/400/400',
      alt: 'Anniversary photo booth template with elegant design for milestone celebrations',
      title: 'Anniversary',
    },
  ];

  const customizationOptions = [
    {
      icon: '🎨',
      title: 'Color Matching',
      description: "We'll match the colors to fit your event theme",
    },
    {
      icon: '✏️',
      title: 'Custom Text',
      description: 'We can add your event name, date, or any message you want',
    },
    {
      icon: '🖼️',
      title: 'Logo Integration',
      description: 'We can add your company or event logo to the template',
    },
    {
      icon: '🎭',
      title: 'Theme Design',
      description: 'We can make templates that work with any theme or style you have in mind',
    },
  ];

  const processSteps = [
    {
      number: '1',
      title: 'Share Your Vision',
      description: 'Just tell us about your event theme, colors, and what style you like',
    },
    {
      number: '2',
      title: 'Design Creation',
      description: "We'll create a custom template that fits your event perfectly",
    },
    {
      number: '3',
      title: 'Review & Approve',
      description: 'Take a look at the design and let us know if you want any changes',
    },
    {
      number: '4',
      title: 'Enjoy Your Event',
      description: 'Your custom template will be all set for your event',
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
              Custom Photo Templates
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed font-light">
              We create custom photo templates that match your event perfectly. Each design is made just for you. Available for events throughout the <Link href="/photo-booth-rental-toronto" className="text-white underline hover:no-underline">GTA</Link> including <Link href="/photo-booth-rental-toronto" className="text-white underline hover:no-underline">Toronto</Link>, <Link href="/photo-booth-rental-mississauga" className="text-white underline hover:no-underline">Mississauga</Link>, <Link href="/photo-booth-rental-brampton" className="text-white underline hover:no-underline">Brampton</Link>, <Link href="/photo-booth-rental-vaughan" className="text-white underline hover:no-underline">Vaughan</Link>, and <Link href="/photo-booth-rental-markham" className="text-white underline hover:no-underline">Markham</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Template Gallery */}
      <section ref={galleryRef} className="w-full py-20 bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-black mb-4 leading-tight">
              Template Gallery
            </h2>
          </div>
          
          {/* Template Embed */}
          <div className="mb-12 w-full overflow-hidden rounded-lg shadow-lg">
            <iframe
              srcDoc="Loading..."
              onLoad={(e) => {
                const target = e.target as HTMLIFrameElement;
                target.removeAttribute('srcdoc');
              }}
              src="https://templatesbooth.com/widget-embed/?key=NDQ3NQ%3D%3D"
              scrolling="yes"
              width="100%"
              height="2200px"
              frameBorder="0"
              className="w-full"
              style={{ minHeight: '2200px' }}
            />
          </div>
          
          <div className="mt-8">
            <p className="text-gray-600 font-light">
              Don't see what you need? We can design something completely custom for your event.
            </p>
          </div>
        </div>
      </section>

      {/* Customization Info */}
      <section ref={customizationRef} className="w-full py-20 bg-gray-50">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-black mb-4 leading-tight">
              Customization Options
            </h2>
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
      <section ref={processRef} className="w-full py-20 bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-black mb-4 leading-tight">
              Our Design Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative border-l-2 border-black pl-10 py-6"
              >
                <div className="absolute -left-4 top-4 w-8 h-8 bg-black text-white flex items-center justify-center text-sm font-medium">
                  {step.number}
                </div>
                <h3 className="text-2xl font-light text-black mb-6">
                  {step.title}
                </h3>
                <p className="text-gray-700 leading-relaxed font-light">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-black text-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
              Ready for a Custom Template?
            </h2>
            <p className="text-lg mb-8 text-gray-300 max-w-2xl leading-relaxed font-light">
              Let's work together to create the perfect template for your event
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
