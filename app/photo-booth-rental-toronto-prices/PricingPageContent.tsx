'use client';

import { useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getImagesForServicePage } from '@/lib/content-images';
import { standardPackages } from '@/lib/sil-data';
import { revealOnScroll, heroTextReveal, fadeIn } from '@/lib/gsap';

const pricingFaqs = [
  {
    question: 'Are There Hidden Fees on Top of the Package Price?',
    answer:
      'Our listed packages are for the booth service as described, including the attendant, prints on your template, backdrops, props, and digital guest delivery. If your venue is outside our normal service area, travel may apply: ask at booking so we can quote it. We do not add a surprise "setup fee" on top of a confirmed package for standard Toronto and GTA work.',
  },
  {
    question: 'Why Is One Company Cheaper Than Your Rates Online?',
    answer:
      'Some options use tablet-only photos, or drop the attendant, or only cover a short part of the night. We price for a full staffed booth, pro capture, and instant prints for the full hours you book. If your priority is a different format, you can still compare, but the service is not always the same thing under a similar headline.',
  },
  {
    question: 'What If I Need More or Less Time?',
    answer:
      'Packages are 2, 3, or 4 hours. If you are between lengths, the middle tier is usually the best value. If you are not sure, tell us your guest count and schedule and we can suggest a fit.',
  },
];

export default function PricingPageContent() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const { heroImage } = useMemo(
    () => getImagesForServicePage('photo-booth-rental', 'Toronto'),
    []
  );

  useEffect(() => {
    if (titleRef.current) heroTextReveal(titleRef.current);
    if (subtitleRef.current) fadeIn(subtitleRef.current, 0.3);
    if (ctaRef.current) fadeIn(ctaRef.current, 0.6);
    if (sectionRef.current) revealOnScroll(sectionRef.current);
    if (faqRef.current) revealOnScroll(faqRef.current);
  }, []);

  return (
    <div className="min-h-screen">
      <section
        ref={heroRef}
        className="relative -mt-20 pt-20 min-h-[60vh] flex items-center justify-center bg-black text-white overflow-hidden"
      >
        {heroImage && (
          <>
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              className="object-cover object-top"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-black/55" aria-hidden />
          </>
        )}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 py-20">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400 font-medium mb-4">
            The Photobooth Guy
          </p>
          <h1
            ref={titleRef}
            className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight max-w-4xl"
          >
            Photo Booth Rental Toronto Prices
          </h1>
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed font-light"
          >
            All tiers include the same service and quality. The price you pay is tied to how long you
            need the booth, not to a stripped list of features.
          </p>
          <div ref={ctaRef} className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center bg-white text-black px-10 py-5 text-sm font-medium hover:bg-gray-100 transition-all uppercase tracking-wider"
            >
              Book
            </Link>
            <Link
              href="/quote"
              className="inline-flex items-center justify-center border border-white text-white px-10 py-5 text-sm font-medium hover:bg-white hover:text-black transition-all uppercase tracking-wider"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      <section ref={sectionRef} className="w-full py-20 bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-black mb-4">Packages</h2>
            <p className="text-gray-700 leading-relaxed font-light text-lg">
              These are the same three tiers we use across the site. Every package below includes
              the attendant, DSLR, instant prints on your custom template, backdrops, props, guest
              digital delivery, and your after-event gallery.
            </p>
          </div>

          <div className="overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0">
            <table className="w-full min-w-[640px] border border-gray-200 text-left">
              <caption className="sr-only">Photo Booth Package Pricing for Toronto and GTA</caption>
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="p-4 font-light text-black">Package</th>
                  <th className="p-4 font-light text-black">Price</th>
                  <th className="p-4 font-light text-black">Time</th>
                </tr>
              </thead>
              <tbody>
                {standardPackages.map((p) => (
                  <tr key={p.name} className="border-b border-gray-200">
                    <td className="p-4 text-gray-800 font-light">{p.name}</td>
                    <td className="p-4 text-gray-800 font-light">{p.price}</td>
                    <td className="p-4 text-gray-800 font-light">{p.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 max-w-3xl">
            <h3 className="text-2xl font-light text-black mb-4">What Is Included in Every Row</h3>
            <ul className="space-y-2 text-gray-700 font-light list-disc pl-5">
              {standardPackages[0].features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>

          <div className="mt-16 max-w-3xl">
            <h3 className="text-2xl font-light text-black mb-4">Why Quotes Online Vary So Much</h3>
            <p className="text-gray-700 leading-relaxed font-light text-lg">
              A lower price often reflects shorter active time, a different type of equipment, or no
              full-time staff on site. We publish clear tiers so you can compare a staffed booth
              with instant prints and a custom template, not a different product with the same
              label.
            </p>
            <p className="text-gray-700 leading-relaxed font-light text-lg mt-4">
              For weddings, see our page on a{' '}
              <Link
                href="/wedding-photo-booth-toronto"
                className="text-black underline hover:no-underline"
              >
                Toronto wedding photo booth
              </Link>
              . For the city service line, return to{' '}
              <Link
                href="/photo-booth-rental-toronto"
                className="text-black underline hover:no-underline"
              >
                Toronto photo booth rental
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section ref={faqRef} className="w-full py-20 bg-gray-50">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-light text-black mb-10">Pricing Questions</h2>
          <div className="max-w-3xl space-y-10">
            {pricingFaqs.map((f) => (
              <div key={f.question} className="border-b border-gray-200 pb-8 last:border-0 last:pb-0">
                <h3 className="text-xl font-light text-black mb-3">{f.question}</h3>
                <p className="text-gray-700 leading-relaxed font-light">{f.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 max-w-3xl">
            <Link
              href="/book"
              className="inline-flex items-center justify-center bg-black text-white px-10 py-5 text-sm font-medium hover:bg-gray-900 transition-all uppercase tracking-wider"
            >
              Book a booth
            </Link>
            <Link
              href="/quote"
              className="inline-flex items-center justify-center border border-black text-black px-10 py-5 text-sm font-medium hover:bg-black hover:text-white transition-all uppercase tracking-wider"
            >
              Request a quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
