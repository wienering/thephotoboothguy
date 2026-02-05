'use client';

import { useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PackageCard from '@/components/PackageCard';
import Testimonial from '@/components/Testimonial';
import { revealOnScroll, heroTextReveal, fadeIn } from '@/lib/gsap';
import { getImagesForServicePage } from '@/lib/content-images';

export interface ServiceLocationData {
  serviceName: string;
  serviceSlug: string;
  city: string;
  heroTitle: string;
  heroSubtitle: string;
  description: string;
  venues: string[];
  features: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  packages: Array<{
    name: string;
    price: string;
    duration: string;
    features: string[];
    highlight?: boolean;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  relatedServices?: Array<{
    name: string;
    href: string;
  }>;
}

export default function ServiceLocationPage({ data }: { data: ServiceLocationData }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const venuesRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const { heroImage, contentImages } = useMemo(
    () => getImagesForServicePage(data.serviceSlug, data.city),
    [data.serviceSlug, data.city]
  );

  const isAudioGuestBook = data.serviceSlug === 'audio-guest-book';

  useEffect(() => {
    if (titleRef.current) heroTextReveal(titleRef.current);
    if (subtitleRef.current) fadeIn(subtitleRef.current, 0.3);
    if (ctaRef.current) fadeIn(ctaRef.current, 0.6);
    if (aboutRef.current) revealOnScroll(aboutRef.current);
    if (featuresRef.current) revealOnScroll(featuresRef.current);
    if (venuesRef.current) revealOnScroll(venuesRef.current);
    if (faqRef.current) revealOnScroll(faqRef.current);
  }, []);

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

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center justify-center bg-black text-white overflow-hidden"
      >
        {heroImage && (
          <>
            <Image
              src={heroImage.src}
              alt=""
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-black/55" aria-hidden />
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
          ></div>
        </div>

        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 py-20">
          <div className="max-w-5xl">
            <div className="mb-6">
              <span className="text-sm uppercase tracking-[0.2em] text-gray-400 font-medium">
                {data.city}, Ontario
              </span>
            </div>
            <h1
              ref={titleRef}
              className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-[0.95] tracking-tight"
            >
              {data.heroTitle.split(' ').map((word, index, array) => (
                <span key={index}>
                  {index < array.length - 1 ? word + ' ' : word}
                </span>
              ))}
            </h1>
            <p
              ref={subtitleRef}
              className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl leading-relaxed font-light"
            >
              {data.heroSubtitle}
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
      </section>

      {/* About Section - image beside text on sm and up */}
      <section ref={aboutRef} className="w-full py-20 bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className={`flex flex-col sm:flex-row gap-8 lg:gap-12 ${contentImages[0] ? '' : ''} items-start`}>
            <div className="flex-1 min-w-0">
              <h2 className="text-4xl md:text-5xl font-light text-black mb-6 leading-tight">
                {data.serviceName} in {data.city}
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light max-w-3xl">
                {data.description}
              </p>
            </div>
            {contentImages[0] && (
              <div className="relative aspect-[4/3] w-full sm:w-64 lg:w-80 flex-shrink-0 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={contentImages[0].src}
                  alt={contentImages[0].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 320px"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Popular Venues Section - image beside text on sm and up */}
      <section ref={venuesRef} className="w-full py-20 bg-gray-50">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className={`flex flex-col sm:flex-row gap-8 lg:gap-12 items-start`}>
            {contentImages[1] && (
              <div className="relative aspect-[3/4] w-full sm:w-56 lg:w-72 flex-shrink-0 rounded-xl overflow-hidden shadow-lg order-2 sm:order-1">
                <Image
                  src={contentImages[1].src}
                  alt={contentImages[1].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 288px"
                />
              </div>
            )}
            <div className="flex-1 min-w-0 order-1 sm:order-2">
              <h2 className="text-4xl md:text-5xl font-light text-black mb-6 leading-tight">
                Serving {data.city} Venues
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed font-light">
                We&apos;ve provided our professional photo booth services at many premier venues throughout {data.city}, including:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.venues.map((venue, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-gray-700 font-light"
                  >
                    <svg
                      className="w-5 h-5 text-black flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {venue}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="w-full py-20 bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-black mb-4 leading-tight">
              What&apos;s Included
            </h2>
          </div>
          <div className={`flex flex-col ${isAudioGuestBook ? 'lg:flex-row' : ''} gap-12`}>
            <div className={`grid grid-cols-1 md:grid-cols-2 ${isAudioGuestBook ? 'lg:grid-cols-2 flex-1' : 'lg:grid-cols-3'} gap-12`}>
              {data.features.map((feature, index) => (
                <div key={index} className="group">
                  <div className="text-4xl mb-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-light text-black mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-light">{feature.description}</p>
                </div>
              ))}
            </div>
            {isAudioGuestBook && contentImages[2] && (
              <div className="relative aspect-[3/4] w-full lg:w-72 flex-shrink-0 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={contentImages[2].src}
                  alt={contentImages[2].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 288px"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="pricing" className="w-full py-20 bg-gray-50">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-light text-black mb-4 leading-tight">
              Packages & Pricing
            </h2>
            <p className="text-lg text-gray-600 font-light">
              Professional {data.serviceName.toLowerCase()} services for your {data.city} event
            </p>
          </div>
          
          {data.packages.length === 1 ? (
            // Single package - centered prominent layout
            <div className="max-w-2xl mx-auto">
              <div className="bg-white border-2 border-black shadow-xl">
                <div className="bg-black text-white py-4 px-8 text-center">
                  <span className="text-sm uppercase tracking-wider font-medium">All-Inclusive Package</span>
                </div>
                <div className="p-10 text-center">
                  <h3 className="text-3xl font-light text-black mb-2">{data.packages[0].name}</h3>
                  <div className="mb-8">
                    <span className="text-6xl font-light text-black">{data.packages[0].price}</span>
                    <span className="text-xl text-gray-600 ml-2">/ {data.packages[0].duration}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left">
                    {data.packages[0].features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-black flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/book"
                      className="inline-flex items-center justify-center bg-black text-white px-10 py-4 text-base font-medium hover:bg-gray-900 transition-all duration-300 uppercase tracking-wider"
                    >
                      Book Now
                    </Link>
                    <Link
                      href="/quote"
                      className="inline-flex items-center justify-center border-2 border-black text-black px-10 py-4 text-base font-medium hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-wider"
                    >
                      Get a Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Multiple packages - grid layout
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {data.packages.map((pkg, index) => (
                <PackageCard key={index} {...pkg} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="w-full py-20 bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className={`flex flex-col ${isAudioGuestBook ? 'lg:flex-row' : ''} gap-12`}>
            <div className={isAudioGuestBook ? 'flex-1' : 'max-w-4xl'}>
              <h2 className="text-4xl md:text-5xl font-light text-black mb-12 leading-tight">
                Frequently Asked Questions
              </h2>
              <div className="space-y-8">
                {data.faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-8 last:border-0">
                    <h3 className="text-2xl font-light text-black mb-4">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed font-light">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
            {isAudioGuestBook && contentImages[3] && (
              <div className="relative aspect-[3/4] w-full lg:w-80 flex-shrink-0 rounded-xl overflow-hidden shadow-lg self-start sticky top-24">
                <Image
                  src={contentImages[3].src}
                  alt={contentImages[3].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 320px"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-20 bg-black text-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-light mb-4 leading-tight">
              What Our {data.city} Clients Say
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

          <div className={`flex flex-col ${isAudioGuestBook ? 'lg:flex-row' : ''} gap-8`}>
            <div className={`grid grid-cols-1 ${isAudioGuestBook ? 'lg:grid-cols-2 flex-1' : 'lg:grid-cols-3'} gap-8`}>
              {testimonials.map((testimonial, index) => (
                <Testimonial key={index} {...testimonial} />
              ))}
            </div>
            {isAudioGuestBook && contentImages[4] && (
              <div className="relative aspect-[3/4] w-full lg:w-64 flex-shrink-0 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={contentImages[4].src}
                  alt={contentImages[4].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 256px"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {data.relatedServices && data.relatedServices.length > 0 && (
        <section className="w-full py-20 bg-gray-50">
          <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
            <div className={`flex flex-col ${isAudioGuestBook ? 'sm:flex-row' : ''} gap-8 lg:gap-12`}>
              <div className={isAudioGuestBook ? 'flex-1' : 'max-w-4xl'}>
                <h2 className="text-4xl md:text-5xl font-light text-black mb-8 leading-tight">
                  Other Services in {data.city}
                </h2>
                <div className="flex flex-wrap gap-4">
                  {data.relatedServices.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="inline-flex items-center justify-center border border-black text-black px-8 py-4 text-sm font-medium hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-wider"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              {isAudioGuestBook && contentImages[5] && (
                <div className="relative aspect-[4/3] w-full sm:w-64 lg:w-80 flex-shrink-0 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={contentImages[5].src}
                    alt={contentImages[5].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 320px"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      <section className="w-full py-20 bg-black text-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
              Ready to Book Your {data.city} Event?
            </h2>
            <p className="text-lg mb-8 text-gray-300 max-w-2xl leading-relaxed font-light">
              Contact us today to reserve your {data.serviceName.toLowerCase()} for your upcoming event in {data.city}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center bg-white text-black px-10 py-5 text-base font-medium hover:bg-gray-100 transition-all duration-300 uppercase tracking-wider"
              >
                Get a Quote
              </Link>
              <Link
                href="/equipment"
                className="inline-flex items-center justify-center border border-white text-white px-10 py-5 text-base font-medium hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-wider"
              >
                View Equipment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

