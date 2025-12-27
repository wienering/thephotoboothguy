'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { revealOnScroll } from '@/lib/gsap';

interface PackageCardProps {
  name: string;
  price: string;
  duration: string;
  features: string[];
  highlight?: boolean;
  ctaText?: string;
}

export default function PackageCard({
  name,
  price,
  duration,
  features,
  highlight = false,
  ctaText = 'Book Now',
}: PackageCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      revealOnScroll(cardRef.current);
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative bg-white border transition-all duration-300 hover:shadow-2xl ${
        highlight 
          ? 'border-black border-2' 
          : 'border-gray-200'
      }`}
    >
      {highlight && (
        <div className="absolute -top-3 left-6 bg-black text-white px-4 py-1 text-xs font-medium uppercase tracking-wider">
          Most Popular
        </div>
      )}
      <div className="p-10">
        <div className="mb-8">
          <h3 className="text-3xl font-light text-black mb-3">{name}</h3>
          <div className="mb-6">
            <span className="text-5xl font-light text-black">{price}</span>
            <span className="text-lg text-gray-600 ml-2">/ {duration}</span>
          </div>
        </div>
        <ul className="space-y-4 mb-10">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-black mr-4 mt-1 font-light">—</span>
              <span className="text-gray-700 leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className={`block w-full text-center py-4 px-6 font-medium text-sm uppercase tracking-wider transition-all duration-300 ${
            highlight
              ? 'bg-black text-white hover:bg-gray-900'
              : 'bg-gray-100 text-black hover:bg-gray-200'
          }`}
        >
          {ctaText}
        </Link>
      </div>
    </div>
  );
}
