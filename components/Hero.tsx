'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { heroTextReveal, fadeIn } from '@/lib/gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current && titleRef.current && subtitleRef.current && ctaRef.current) {
      heroTextReveal(titleRef.current);
      fadeIn(subtitleRef.current, 0.3);
      fadeIn(ctaRef.current, 0.6);
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center bg-black text-white overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Large text background element */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02]">
        <div className="text-[20rem] font-black tracking-tighter select-none">PHOTO</div>
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-5xl">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-[0.2em] text-gray-400 font-medium">
              Toronto&apos;s Best Photo Booth Experience
            </span>
          </div>
          <h1
            ref={titleRef}
            className="text-6xl md:text-8xl lg:text-9xl font-light mb-8 leading-[0.95] tracking-tight"
          >
            Create 
            <span className="block font-normal mt-2">Unforgettable </span>
            <span className="block font-light">Memories</span>
          </h1>
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl leading-relaxed font-light"
          >
            We bring professional equipment, beautiful backdrops, and custom designs 
            to make your event something people will talk about.
          </p>
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-black px-12 py-6 text-base font-medium hover:bg-gray-100 transition-all duration-300 uppercase tracking-wider"
            >
              Book Your Event
            </Link>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center border border-white text-white px-12 py-6 text-base font-medium hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-wider"
            >
              View Pricing
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-gray-500">Scroll</span>
          <svg
            className="w-5 h-5 text-gray-500 animate-bounce"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
