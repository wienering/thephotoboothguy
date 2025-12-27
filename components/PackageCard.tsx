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
      className={`relative bg-white rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
        highlight ? 'border-4 border-yellow-400 scale-105' : 'border border-gray-200'
      }`}
    >
      {highlight && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
          Most Popular
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold text-blue-600">{price}</span>
          <span className="text-gray-600 ml-2">/ {duration}</span>
        </div>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg
              className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className={`block w-full text-center py-3 px-6 rounded-full font-bold transition-all duration-300 ${
          highlight
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-100 text-gray-900 hover:bg-blue-600 hover:text-white'
        }`}
      >
        {ctaText}
      </Link>
    </div>
  );
}

