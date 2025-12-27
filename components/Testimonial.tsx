'use client';

import { useEffect, useRef } from 'react';
import { revealOnScroll } from '@/lib/gsap';

interface TestimonialProps {
  name: string;
  text: string;
  rating?: number;
}

export default function Testimonial({ name, text, rating = 5 }: TestimonialProps) {
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (testimonialRef.current) {
      revealOnScroll(testimonialRef.current);
    }
  }, []);

  return (
    <div
      ref={testimonialRef}
      className="bg-white/5 border border-white/10 p-8 transition-all duration-300 hover:bg-white/10"
    >
      <div className="flex items-center mb-6">
        {[...Array(rating)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-white mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-300 mb-6 leading-relaxed font-light italic text-lg">
        &quot;{text}&quot;
      </p>
      <p className="text-white font-medium">— {name}</p>
    </div>
  );
}
