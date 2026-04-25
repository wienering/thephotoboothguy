'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { heroTextReveal, fadeIn } from '@/lib/gsap';

interface HeroProps {
  /** Optional background image path (e.g. from /photos/). Shown with dark overlay for readability. */
  backgroundImage?: string;
  /** Alt text for the hero image. */
  alt?: string;
  /** Main H1 (single focus line for key landing pages). */
  headline?: string;
  /** Supporting line under the H1. */
  subhead?: string;
  /** Optional line above the H1. Omit or pass null to hide. */
  eyebrow?: string | null;
}

export default function Hero({
  backgroundImage,
  alt,
  headline = 'Toronto Photo Booth Rental',
  subhead = 'Weddings, corporate events, and private parties across Toronto and the GTA. Packages from $550.',
  eyebrow = null,
}: HeroProps) {
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
      className="relative -mt-20 pt-20 min-h-[100vh] flex items-center justify-center bg-black text-white overflow-hidden"
    >
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt={alt ?? 'Photo booth setup for a Toronto and GTA event'}
            fill
            className="object-cover object-top"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/60" aria-hidden />
        </>
      )}
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Large text background element */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02]">
        <div className="text-[20rem] font-black tracking-tighter select-none">PHOTO</div>
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-5xl">
          {eyebrow && (
            <div className="mb-6">
              <span className="text-sm uppercase tracking-[0.2em] text-gray-400 font-medium">
                {eyebrow}
              </span>
            </div>
          )}
          <h1
            ref={titleRef}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light mb-8 leading-[1.05] tracking-tight max-w-4xl"
          >
            {headline}
          </h1>
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl leading-relaxed font-light"
          >
            {subhead}
          </p>
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
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
