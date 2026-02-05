'use client';

import { useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { revealOnScroll } from '@/lib/gsap';
import { getHeroForHolidayPartyPage, getHolidayPartyPhotos, HOLIDAY_VIDEO } from '@/lib/content-images';


export default function HolidayPartyContent() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const heroImage = useMemo(() => getHeroForHolidayPartyPage(), []);
  const holidayPhotos = useMemo(() => getHolidayPartyPhotos(), []);

  useEffect(() => {
    if (heroRef.current) revealOnScroll(heroRef.current);
    if (aboutRef.current) revealOnScroll(aboutRef.current);
    if (galleryRef.current) revealOnScroll(galleryRef.current);
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

      {/* Gallery Section */}
      <section ref={galleryRef} className="w-full py-20 bg-gray-50">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-12 leading-tight">
            Holiday Party Moments
          </h2>
          {/* Top section: Video (wider) + 2 columns of photos */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-4 mb-4">
            {/* Column 1: Video (wider) */}
            <div className="bg-black rounded-sm overflow-hidden flex items-center">
              <video
                src={HOLIDAY_VIDEO}
                className="w-full h-auto object-contain"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            {/* Column 2: Event photos (beige group - indices 0, 1, 2) */}
            <div className="flex flex-col gap-4">
              {holidayPhotos.slice(0, 3).map((photo, index) => (
                <div key={index} className="bg-gray-100 rounded-sm overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={400}
                    height={600}
                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
              ))}
            </div>
            {/* Column 3: Print templates group 1 (orange group - indices 3, 4, 5) */}
            <div className="flex flex-col gap-4">
              {holidayPhotos.slice(3, 6).map((photo, index) => (
                <div key={index} className="bg-gray-100 rounded-sm overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={400}
                    height={600}
                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Bottom row: Print templates group 2 (yellow group - indices 6, 7, 8) */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full md:w-1/2">
              {holidayPhotos.slice(6, 9).map((photo, index) => (
                <div key={index} className="bg-gray-100 rounded-sm overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={400}
                    height={600}
                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 17vw"
                  />
                </div>
              ))}
            </div>
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
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-2xl font-light text-black mb-4">What&apos;s included in your holiday event packages?</h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  All of our rentals come with professional setup and removal, a dedicated on-site attendant, festive props, customized holiday print templates, a complete online gallery following your event, and unlimited prints with our <Link href="/photo-booth-rental-toronto" className="text-black underline hover:no-underline">photo booth</Link> or unlimited videos with our <Link href="/360-booth-toronto" className="text-black underline hover:no-underline">360 booth</Link>.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-2xl font-light text-black mb-4">Which booth option is most popular for holiday events?</h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  For seasonal celebrations, our <Link href="/photo-booth-rental-toronto" className="text-black underline hover:no-underline">Classic Print Booth</Link> with festive backdrops and unlimited prints remains the crowd favourite. It delivers a classic photo experience that appeals to guests across all age groups.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-2xl font-light text-black mb-4">Are holiday props and themed backdrops available?</h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  Yes! We arrive with an assortment of seasonal props, Christmas-inspired print designs, and holiday backdrops that complement the festive atmosphere. You can also enhance your setup with one of our premium flower walls for an extra touch of elegance.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-2xl font-light text-black mb-4">How can guests share their photos right away?</h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  In addition to receiving instant printed keepsakes, guests can send their photos and videos directly to their phones via text or AirDrop—making it simple to share holiday moments on social media.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-2xl font-light text-black mb-4">Do you work with both corporate clients and private celebrations?</h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  Absolutely! Whether it&apos;s a company holiday gala, an office Christmas party, or a family gathering at home, our photo booths bring entertainment and memorable takeaways to any type of event.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-2xl font-light text-black mb-4">How early should I reserve a date in December?</h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  The holiday season is our most in-demand period, and December weekends often get booked months ahead. We suggest <Link href="/book" className="text-black underline hover:no-underline">securing your date</Link> as soon as your plans are confirmed.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-2xl font-light text-black mb-4">Which locations do you service?</h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  We operate throughout the Greater Toronto Area, including <Link href="/photo-booth-rental-toronto" className="text-black underline hover:no-underline">Toronto</Link>, York Region (<Link href="/photo-booth-rental-vaughan" className="text-black underline hover:no-underline">Vaughan</Link>, <Link href="/photo-booth-rental-richmond-hill" className="text-black underline hover:no-underline">Richmond Hill</Link>, <Link href="/photo-booth-rental-markham" className="text-black underline hover:no-underline">Markham</Link>, Newmarket, Stouffville), Halton Region (<Link href="/photo-booth-rental-oakville" className="text-black underline hover:no-underline">Oakville</Link>, <Link href="/photo-booth-rental-burlington" className="text-black underline hover:no-underline">Burlington</Link>, Milton), Peel Region (<Link href="/photo-booth-rental-mississauga" className="text-black underline hover:no-underline">Mississauga</Link>, <Link href="/photo-booth-rental-brampton" className="text-black underline hover:no-underline">Brampton</Link>, Caledon), and Durham Region (<Link href="/photo-booth-rental-pickering" className="text-black underline hover:no-underline">Pickering</Link>, <Link href="/photo-booth-rental-ajax" className="text-black underline hover:no-underline">Ajax</Link>, <Link href="/photo-booth-rental-whitby" className="text-black underline hover:no-underline">Whitby</Link>, <Link href="/photo-booth-rental-oshawa" className="text-black underline hover:no-underline">Oshawa</Link>). For events beyond these regions, <Link href="/contact" className="text-black underline hover:no-underline">get in touch</Link> with your event details and we&apos;ll do our best to accommodate.
                </p>
              </div>

              <div className="pb-8">
                <h3 className="text-2xl font-light text-black mb-4">Can you accommodate a last-minute request?</h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  If the date hasn&apos;t already been claimed, we&apos;ll do everything we can to make it happen! Email us at contact@thephotoboothguy.ca with &quot;URGENT&quot; in the subject line and our team will respond as quickly as possible.
                </p>
              </div>
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
