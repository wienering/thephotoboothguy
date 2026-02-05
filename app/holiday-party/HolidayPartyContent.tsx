'use client';

import { useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { revealOnScroll } from '@/lib/gsap';
import { getHeroForHolidayPartyPage } from '@/lib/content-images';

const holidayFaqs = [
  {
    question: 'What comes with a holiday photo booth package?',
    answer: 'Every rental includes professional setup and breakdown, an on-site attendant, festive props, custom holiday print templates, a digital gallery after your event, and unlimited prints (for our Classic or AI Booth) or videos (for our 360 Booth).',
  },
  {
    question: 'Which photo booth style works best for seasonal celebrations?',
    answer: 'Our Classic Print Booth paired with festive backdrops and unlimited prints is the go-to choice for holiday events. It offers a timeless experience that guests of all ages enjoy.',
  },
  {
    question: 'Do you handle corporate events as well as private parties?',
    answer: 'Yes, we do both! From office holiday parties and corporate galas to intimate family Christmas gatherings, our photo booths are designed to impress guests and create lasting keepsakes.',
  },
  {
    question: 'Can you provide seasonal decorations and props?',
    answer: 'Absolutely! We come prepared with a selection of festive props, holiday-inspired print layouts, and themed backdrops to match your celebration. For an elevated look, consider adding one of our luxury flower walls.',
  },
  {
    question: 'How do guests receive their photos?',
    answer: 'Every guest gets an instant physical print to take home. They can also share their photos digitally via text or AirDrop right from the booth—perfect for posting holiday memories on social media.',
  },
  {
    question: 'When should I book for the holiday season?',
    answer: 'December is our busiest month, and weekends tend to fill up well in advance. We recommend reaching out as early as possible to secure your preferred date.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We're based in the Greater Toronto Area and service Toronto, York Region (including Vaughan, Richmond Hill, Markham, Newmarket, and Stouffville), Halton Region (Oakville, Burlington, Milton), Peel Region (Mississauga, Brampton, Caledon), and Durham Region (Pickering, Ajax, Whitby, Oshawa). For events outside these areas, reach out with your details and we'll see what we can do.',
  },
  {
    question: 'What if I need a photo booth at the last minute?',
    answer: 'We've got you covered—as long as the date is still available! Send us an email at contact@thephotoboothguy.ca with "URGENT" in the subject line and our team will prioritize your request.',
  },
];

export default function HolidayPartyContent() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const heroImage = useMemo(() => getHeroForHolidayPartyPage(), []);

  useEffect(() => {
    if (heroRef.current) revealOnScroll(heroRef.current);
    if (aboutRef.current) revealOnScroll(aboutRef.current);
    if (faqRef.current) revealOnScroll(faqRef.current);
    if (ctaRef.current) revealOnScroll(ctaRef.current);
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center justify-center bg-black text-white overflow-hidden"
      >
        {heroImage && (
          <>
            <Image src={heroImage.src} alt="" fill className="object-cover object-center" sizes="100vw" priority />
            <div className="absolute inset-0 bg-black/55" aria-hidden />
          </>
        )}
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 py-20">
          <div className="max-w-5xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-[0.95] tracking-tight">
              Holiday Party
              <br />
              Photo Booth
            </h1>
            <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl leading-relaxed font-light">
              Make your holiday party or corporate holiday event unforgettable. Festive backdrops, custom templates, and instant prints across Toronto and the GTA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className="inline-flex items-center justify-center bg-white text-black px-12 py-6 text-base font-medium hover:bg-gray-100 transition-all duration-300 uppercase tracking-wider"
              >
                Book Your Event
              </Link>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center border border-white text-white px-12 py-6 text-base font-medium hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-wider"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="w-full py-20 bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-light text-black mb-6 leading-tight">
              Holiday & Corporate Holiday Photo Booth Rental
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light max-w-3xl mb-6">
              Whether you&apos;re hosting a holiday office party, a Christmas celebration, or a seasonal corporate event in <Link href="/photo-booth-rental-toronto" className="text-black underline hover:no-underline">Toronto</Link>, <Link href="/photo-booth-rental-mississauga" className="text-black underline hover:no-underline">Mississauga</Link>, <Link href="/photo-booth-rental-vaughan" className="text-black underline hover:no-underline">Vaughan</Link>, or anywhere in the GTA, we bring the fun with a professional photo booth. Custom holiday-themed templates, festive backdrops, props, and instant prints mean your guests leave with lasting memories.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-light max-w-3xl">
              Our holiday photo booth packages include a professional attendant, high-quality prints, digital delivery to guests, and a full gallery after your event. Perfect for corporate holiday parties, team celebrations, and private holiday gatherings.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="w-full py-20 bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-light text-black mb-12 leading-tight">
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              {holidayFaqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-8 last:border-0">
                  <h3 className="text-2xl font-light text-black mb-4">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed font-light">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="w-full py-20 bg-gray-50">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-light text-black mb-6 leading-tight">
              Ready to Book Your Holiday Party?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed font-light max-w-2xl">
              Get in touch or get a quote to reserve your holiday photo booth.
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
                href="/contact"
                className="inline-flex items-center justify-center border border-black text-black px-10 py-5 text-base font-medium hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-wider"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
