'use client';

import { useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { revealOnScroll } from '@/lib/gsap';
import { getImagesForPage } from '@/lib/content-images';

export default function EquipmentContent() {
  const heroRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);

  const { heroImage, contentImage } = useMemo(() => getImagesForPage('equipment'), []);

  useEffect(() => {
    if (heroRef.current) revealOnScroll(heroRef.current);
    if (showcaseRef.current) revealOnScroll(showcaseRef.current);
    if (techRef.current) revealOnScroll(techRef.current);
    if (benefitsRef.current) revealOnScroll(benefitsRef.current);
  }, []);

  const equipmentItems = [
    {
      title: 'Professional DSLR Camera',
      description: 'Our professional DSLR cameras capture stunning high-resolution images with exceptional clarity and detail for your GTA events',
      specs: ['24MP sensor for high-resolution images', 'Full HD video capability', 'Professional lighting integration for optimal photo quality'],
    },
    {
      title: 'Dye-Sublimation Printer',
      description: "Professional dye-sublimation printer produces vibrant, waterproof instant prints that won't smudge or fade over time",
      specs: ['4x6 and 2x6 print sizes on custom templates', 'Waterproof, durable prints', 'Instant drying technology - prints ready in seconds'],
    },
    {
      title: 'Touchscreen Interface',
      description: 'Large, intuitive touchscreen interface makes it easy for guests to operate the photo booth and customize their photos',
      specs: ['Large format display for easy viewing', 'Intuitive controls with simple navigation', 'Custom branding options for corporate events'],
    },
    {
      title: 'Professional Lighting',
      description: 'Professional studio-grade lighting ensures everyone looks amazing in their photos with flattering, consistent illumination',
      specs: ['Adjustable brightness for different venues', 'Color temperature control for optimal skin tones', 'Flattering light distribution that minimizes shadows'],
    },
  ];

  const techHighlights = [
    {
      icon: '📷',
      title: 'DSLR Camera Quality',
      description: "Professional DSLR cameras capture sharp, high-resolution photos with exceptional detail that you'll want to display and treasure",
    },
    {
      icon: '🖨️',
      title: 'Print Technology',
      description: 'Dye-sublimation printing process delivers vibrant colors and produces durable, waterproof prints that last for years',
    },
    {
      icon: '💻',
      title: 'Software Features',
      description: 'Advanced software allows us to create custom templates, add digital overlays, and instantly share photos with guests via SMS or email',
    },
    {
      icon: '💡',
      title: 'Lighting System',
      description: 'Professional studio lighting creates the perfect ambiance and ensures flattering photos with optimal brightness and color accuracy',
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
        className="relative w-full pt-32 pb-20 bg-black text-white overflow-hidden"
      >
        {heroImage && (
          <>
            <Image src={heroImage.src} alt="" fill className="object-cover object-center" sizes="100vw" priority />
            <div className="absolute inset-0 bg-black/60" aria-hidden />
          </>
        )}
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-4xl pt-16">
            <h1 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
              Professional 
              Photo 
              Booth 
              Equipment 
              in 
              Toronto 
              & 
              GTA
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed font-light">
              We use top-quality professional equipment including DSLR cameras, dye-sublimation printers, and professional lighting to deliver exceptional photo booth experiences at events across <Link href="/photo-booth-rental-toronto" className="text-white underline hover:no-underline">Toronto</Link>, <Link href="/photo-booth-rental-mississauga" className="text-white underline hover:no-underline">Mississauga</Link>, <Link href="/photo-booth-rental-brampton" className="text-white underline hover:no-underline">Brampton</Link>, <Link href="/photo-booth-rental-vaughan" className="text-white underline hover:no-underline">Vaughan</Link>, and <Link href="/photo-booth-rental-markham" className="text-white underline hover:no-underline">Markham</Link>.
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
          {contentImage && (
            <div className="relative aspect-[2/1] max-w-2xl mx-auto mb-12 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={contentImage.src}
                alt={contentImage.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 672px"
              />
            </div>
          )}
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
              Professional Equipment for GTA Events
            </h2>
            <p className="text-lg mb-8 text-gray-300 max-w-2xl leading-relaxed font-light">
              Bring our professional photo booth equipment to your next event in <Link href="/photo-booth-rental-toronto" className="text-white underline hover:no-underline">Toronto</Link>, <Link href="/photo-booth-rental-mississauga" className="text-white underline hover:no-underline">Mississauga</Link>, <Link href="/photo-booth-rental-brampton" className="text-white underline hover:no-underline">Brampton</Link>, <Link href="/photo-booth-rental-vaughan" className="text-white underline hover:no-underline">Vaughan</Link>, or <Link href="/photo-booth-rental-markham" className="text-white underline hover:no-underline">Markham</Link> and see the difference quality makes
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
