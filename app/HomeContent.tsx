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
      name: 'Essential',
      price: '$550',
      duration: '2 hours',
      features: [
        'Professional attendant on site',
        'Physical prints on custom template (2x6 or 4x6 size)',
        'Backdrop selection',
        'Props collection',
        'Digital image delivery to guests by SMS or email',
        'Digital gallery after the event',
      ],
    },
    {
      name: 'Signature',
      price: '$750',
      duration: '3 hours',
      features: [
        'Professional attendant on site',
        'Physical prints on custom template (2x6 or 4x6 size)',
        'Backdrop selection',
        'Props collection',
        'Digital image delivery to guests by SMS or email',
        'Digital gallery after the event',
      ],
      highlight: false,
    },
    {
      name: 'Premium',
      price: '$950',
      duration: '4 hours',
      features: [
        'Professional attendant on site',
        'Physical prints on custom template (2x6 or 4x6 size)',
        'Backdrop selection',
        'Props collection',
        'Digital image delivery to guests by SMS or email',
        'Digital gallery after the event',
      ],
      highlight: true,
    },
  ];

  const testimonials = [
    {
      name: 'Sherry',
      text: 'Dennis was extremely prompt and polite with answering any questions on the phone or via email. The booking process felt easy and the service was exceptional.',
      rating: 5,
    },
    {
      name: 'Rachael',
      text: 'Great company to work with. They responded to every message very quickly and answered all of our questions. Our guests had a great experience at our wedding! Highly recommend!',
      rating: 5,
    },
    {
      name: 'Cyrus',
      text: "Dennis's team was absolutely fantastic! The team was extremely responsive, competitively priced, and very professional. It was a pleasure being part of our event.",
      rating: 5,
    },
  ];

  const features = [
    {
      icon: '📸',
      title: 'Professional DSLR Camera',
      description: 'Professional DSLR cameras with high-quality lenses and optimal lighting to capture stunning, high-resolution photos at your GTA event',
    },
    {
      icon: '🖨️',
      title: 'Instant Prints',
      description: 'Dye-sublimation printer delivers vibrant, waterproof 4x6 or 2x6 instant prints on custom templates within seconds',
    },
    {
      icon: '🎨',
      title: 'Custom Templates',
      description: 'Personalized print templates designed to match your event theme, colors, and style at no extra charge',
    },
    {
      icon: '🎭',
      title: 'Backdrop & Props',
      description: 'Choose from our collection of stunning backdrops and fun props to create memorable photos for your guests',
    },
    {
      icon: '👤',
      title: 'Professional Attendant',
      description: 'Trained on-site attendant ensures smooth operation, assists guests, and maintains the photo booth throughout your event',
    },
    {
      icon: '📱',
      title: 'Digital Copies',
      description: 'All photos sent instantly to guests via SMS or email, plus complete digital gallery delivered after your event',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <Hero />

      {/* About Section */}
      <section ref={aboutRef} className="w-full py-20 bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-light text-black mb-6 leading-tight">
              Professional Photo Booth Rental Across the GTA
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light max-w-3xl mb-6">
              We provide professional photo booth services throughout <Link href="/photo-booth-rental-toronto" className="text-black underline hover:no-underline">Toronto</Link>, <Link href="/photo-booth-rental-mississauga" className="text-black underline hover:no-underline">Mississauga</Link>, <Link href="/photo-booth-rental-brampton" className="text-black underline hover:no-underline">Brampton</Link>, <Link href="/photo-booth-rental-vaughan" className="text-black underline hover:no-underline">Vaughan</Link>, and <Link href="/photo-booth-rental-markham" className="text-black underline hover:no-underline">Markham</Link>. Every event receives our premium equipment including professional DSLR cameras, dye-sublimation printers for instant prints, custom templates designed for your event, stunning backdrops, fun props, and a trained professional attendant on site. Digital copies are sent instantly to guests via SMS or email.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-light max-w-3xl">
              Whether you&apos;re planning a wedding, corporate gala, birthday party, anniversary celebration, or any special event across the Greater Toronto Area, we deliver exceptional photo booth experiences with professional lighting, high-quality prints, and outstanding service.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="pricing" className="w-full py-20 bg-gray-50">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-black mb-4 leading-tight">
              Package Pricing
            </h2>
            <p className="text-lg text-gray-600 font-light">
              Packages starting at $550 for 2 hours
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <PackageCard key={index} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="w-full py-20 bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-black mb-4 leading-tight">
              Why Choose Us
            </h2>
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

      {/* Service Areas Section */}
      <section className="w-full py-20 bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-black mb-6 leading-tight">
              Serving the Greater Toronto Area
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed font-light">
              We provide professional photo booth rental services throughout the GTA, including:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              href="/photo-booth-rental-toronto"
              className="border border-gray-200 p-8 hover:border-black transition-all duration-300 group"
            >
              <h3 className="text-2xl font-light text-black mb-3 group-hover:translate-x-2 transition-transform">
                Toronto →
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Photo booth services in <Link href="/photo-booth-rental-toronto" className="text-black underline hover:no-underline">Toronto</Link> including <Link href="/photo-booth-rental-toronto" className="text-black underline hover:no-underline">Downtown</Link>, <Link href="/photo-booth-rental-north-york" className="text-black underline hover:no-underline">North York</Link>, <Link href="/photo-booth-rental-scarborough" className="text-black underline hover:no-underline">Scarborough</Link>, and <Link href="/photo-booth-rental-etobicoke" className="text-black underline hover:no-underline">Etobicoke</Link>
              </p>
            </Link>
            <Link
              href="/photo-booth-rental-mississauga"
              className="border border-gray-200 p-8 hover:border-black transition-all duration-300 group"
            >
              <h3 className="text-2xl font-light text-black mb-3 group-hover:translate-x-2 transition-transform">
                Mississauga →
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Professional photo booth rental in <Link href="/photo-booth-rental-mississauga" className="text-black underline hover:no-underline">Mississauga</Link>, Port Credit, and Streetsville
              </p>
            </Link>
            <Link
              href="/photo-booth-rental-brampton"
              className="border border-gray-200 p-8 hover:border-black transition-all duration-300 group"
            >
              <h3 className="text-2xl font-light text-black mb-3 group-hover:translate-x-2 transition-transform">
                Brampton →
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Photo booth services in <Link href="/photo-booth-rental-brampton" className="text-black underline hover:no-underline">Brampton</Link>, Bramalea, and Heart Lake areas
              </p>
            </Link>
            <Link
              href="/photo-booth-rental-vaughan"
              className="border border-gray-200 p-8 hover:border-black transition-all duration-300 group"
            >
              <h3 className="text-2xl font-light text-black mb-3 group-hover:translate-x-2 transition-transform">
                Vaughan →
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Photo booth rental in <Link href="/photo-booth-rental-vaughan" className="text-black underline hover:no-underline">Vaughan</Link>, Woodbridge, Concord, and Thornhill
              </p>
            </Link>
            <Link
              href="/photo-booth-rental-markham"
              className="border border-gray-200 p-8 hover:border-black transition-all duration-300 group"
            >
              <h3 className="text-2xl font-light text-black mb-3 group-hover:translate-x-2 transition-transform">
                Markham →
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Professional photo booth services in <Link href="/photo-booth-rental-markham" className="text-black underline hover:no-underline">Markham</Link>, Unionville, and Milliken
              </p>
            </Link>
            <Link
              href="/equipment"
              className="border border-gray-200 p-8 hover:border-black transition-all duration-300 group bg-gray-50"
            >
              <h3 className="text-2xl font-light text-black mb-3 group-hover:translate-x-2 transition-transform">
                Our Services →
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Learn more about our photo booths, glam booth, audio guest book, and 360 video booth
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-20 bg-black text-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-light mb-4 leading-tight">
              What Our Clients Say
            </h2>
          </div>
          
          {/* Trust Indicators */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-sm uppercase tracking-[0.2em] text-gray-300 font-medium">
              Rated 5 Stars by Our Clients
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
      <section ref={ctaRef} className="w-full py-20 bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-light text-black mb-6 leading-tight">
              Ready to Make Your Event Unforgettable?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed font-light max-w-2xl">
              Get in touch today and let&apos;s make your event something people will remember.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className="inline-flex items-center justify-center bg-black text-white px-10 py-5 text-base font-medium hover:bg-gray-900 transition-all duration-300 uppercase tracking-wider"
              >
                Book Now
              </Link>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center border border-black text-black px-10 py-5 text-base font-medium hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-wider"
              >
                Get a Quote
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
