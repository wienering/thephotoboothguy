'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Hero from '@/components/Hero';
import PackageCard from '@/components/PackageCard';
import Testimonial from '@/components/Testimonial';
import { revealOnScroll } from '@/lib/gsap';

export default function HomeContent() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (aboutRef.current) revealOnScroll(aboutRef.current);
    if (featuresRef.current) revealOnScroll(featuresRef.current);
    if (ctaRef.current) revealOnScroll(ctaRef.current);
  }, []);

  const packages = [
    {
      name: 'Bronze',
      price: '$700',
      duration: '3 hours',
      features: [
        'Unlimited 4x6 or 2x6 professional color prints',
        'Choice of backdrops',
        'Tons of props',
        'Custom designed template to match your event',
        'Digital upload of all photos',
        'Instant upload to our Facebook page',
        'Friendly attendant on site',
      ],
    },
    {
      name: 'Silver',
      price: '$800',
      duration: '3 hours',
      features: [
        'Everything in Bronze, plus:',
        'iPad sharing station',
        'Hollywood red carpet treatment',
      ],
      highlight: false,
    },
    {
      name: 'Gold',
      price: '$950',
      duration: '3 hours',
      features: [
        'Everything in Silver, plus:',
        'Photo guest book with USB',
        'USB with all session photos',
      ],
      highlight: true,
    },
  ];

  const testimonials = [
    {
      name: 'Adrianna Collaku',
      text: 'I am so pleased with the exceptional level of service we received from Tomas. From everything in between to his prompt response to the day of the event! I would definitely recommend to everyone I know and would use again for future events! It was a hit for us as it was for our Staff Holiday Party, everyone loved it.. especially the variety of props. Thank you Tomas!',
      rating: 5,
    },
    {
      name: 'Sarah Johnson',
      text: 'The photo booth was the highlight of our wedding! The quality of the prints was amazing and our guests had so much fun. The custom template matched our theme perfectly.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      text: 'Professional service from start to finish. The equipment was top-notch and the attendant was friendly and helpful throughout the entire event.',
      rating: 5,
    },
  ];

  const features = [
    {
      icon: '📸',
      title: 'Professional Equipment',
      description: 'State-of-the-art cameras and printers for crystal-clear photos',
    },
    {
      icon: '🎨',
      title: 'Custom Templates',
      description: 'Personalized designs that match your event theme perfectly',
    },
    {
      icon: '🎭',
      title: 'Stunning Backdrops',
      description: 'Wide variety of elegant and fun backdrop options',
    },
    {
      icon: '🎪',
      title: 'Props & Accessories',
      description: 'Hundreds of props to make your photos unforgettable',
    },
    {
      icon: '⚡',
      title: 'Instant Prints',
      description: 'High-quality prints ready in seconds',
    },
    {
      icon: '📱',
      title: 'Digital Sharing',
      description: 'All photos available digitally and on social media',
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Trust Indicators */}
      <section className="w-full py-16 bg-white border-b border-gray-100">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-sm uppercase tracking-[0.2em] text-gray-600 font-medium">
              Rated 5 Stars by Our Clients
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="w-full py-32 bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-7xl font-light text-black mb-8 leading-tight">
              Our Mission
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light max-w-3xl">
              To provide the very best in customer service and the most fun and
              memorable experience for you and your guests. We believe every
              event deserves to be extraordinary, and we&apos;re here to make that
              happen with professional equipment, creative designs, and
              exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="w-full py-32 bg-gray-50">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-light text-black mb-4 leading-tight">
              Package Pricing
            </h2>
            <div className="mt-6">
              <p className="text-lg text-gray-600 font-light">
                Budget-friendly packages starting at $700 for 3 hours of fun
              </p>
              <p className="text-sm uppercase tracking-wider text-gray-500 mt-2 font-medium">
                NO HIDDEN FEES
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <PackageCard key={index} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="w-full py-32 bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-light text-black mb-4 leading-tight">
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl">
              Everything you need for an unforgettable photo booth experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group"
              >
                <div className="text-4xl mb-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-light text-black mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-32 bg-black text-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-light mb-4 leading-tight">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-400 font-light">
              Don&apos;t just take our word for it
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section ref={ctaRef} className="w-full py-32 bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-7xl font-light text-black mb-8 leading-tight">
              Ready to Make Your Event Unforgettable?
            </h2>
            <p className="text-xl text-gray-700 mb-12 leading-relaxed font-light max-w-2xl">
              Book your photo booth rental today and let us help you create
              memories that will last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-black text-white px-10 py-5 text-base font-medium hover:bg-gray-900 transition-all duration-300 uppercase tracking-wider"
              >
                Book Now
              </Link>
              <Link
                href="/equipment"
                className="inline-flex items-center justify-center border border-black text-black px-10 py-5 text-base font-medium hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-wider"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
