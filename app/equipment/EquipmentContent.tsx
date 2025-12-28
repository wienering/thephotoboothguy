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
      description: 'Our cameras capture all the details and give you really clear photos',
      specs: ['24MP sensor', 'Full HD video capability', 'Professional lighting integration'],
    },
    {
      title: 'Dye-Sublimation Printer',
      description: "The printer we use makes colorful prints that dry instantly and won't smudge",
      specs: ['4x6 and 2x6 print sizes', 'Waterproof prints', 'Instant drying technology'],
    },
    {
      title: 'Touchscreen Interface',
      description: 'Easy to use touchscreen that makes everything simple for your guests',
      specs: ['Large format display', 'Intuitive controls', 'Custom branding options'],
    },
    {
      title: 'Professional Lighting',
      description: 'Professional lighting that makes sure everyone looks great in their photos',
      specs: ['Adjustable brightness', 'Color temperature control', 'Flattering light distribution'],
    },
  ];

  const techHighlights = [
    {
      icon: '📷',
      title: 'Camera Quality',
      description: "Professional cameras that take sharp, clear photos you'll want to frame",
    },
    {
      icon: '🖨️',
      title: 'Print Technology',
      description: 'Our printing process gives you bright colors and prints that hold up over time',
    },
    {
      icon: '💻',
      title: 'Software Features',
      description: 'Our software lets us customize templates and share photos instantly with your guests',
    },
    {
      icon: '💡',
      title: 'Lighting System',
      description: 'Professional lighting that sets the right mood and makes photos look amazing',
    },
  ];

  const benefits = [
    {
      title: 'Reliability',
      description: 'We keep our equipment in great shape and test it before every event so nothing goes wrong',
    },
    {
      title: 'Quality',
      description: 'Using professional equipment means your guests get really high quality photos',
    },
    {
      title: 'Innovation',
      description: 'We keep up with new technology so we can give you the best experience possible',
    },
    {
      title: 'Support',
      description: 'Our attendants are there the whole time to make sure everything goes smoothly',
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
              Professional Equipment
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed font-light">
              We use top quality equipment that gives you great photos every time
            </p>
          </div>
        </div>
      </section>

      {/* Equipment Showcase */}
      <section ref={showcaseRef} className="w-full py-20 bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-black mb-4 leading-tight">
              Our Equipment
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {equipmentItems.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 p-12 hover:border-black transition-colors duration-300"
              >
                <h3 className="text-3xl font-light text-black mb-6">
                  {item.title}
                </h3>
                <p className="text-gray-700 mb-8 leading-relaxed font-light">{item.description}</p>
                <ul className="space-y-3">
                  {item.specs.map((spec, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-black mr-4 mt-1 font-light">-</span>
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
      <section ref={techRef} className="w-full py-20 bg-gray-50">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-black mb-4 leading-tight">
              Technology Highlights
            </h2>
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
      <section ref={benefitsRef} className="w-full py-20 bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-black mb-4 leading-tight">
              Why Our Equipment Matters
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="border-l-2 border-black pl-10 py-6"
              >
                <h3 className="text-3xl font-light text-black mb-6">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed font-light">{benefit.description}</p>
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
              Experience the Difference
            </h2>
            <p className="text-lg mb-8 text-gray-300 max-w-2xl leading-relaxed font-light">
              Let us bring our equipment to your next event and see the difference it makes
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
