'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Hero from '@/components/Hero';
import PackageCard from '@/components/PackageCard';
import Testimonial from '@/components/Testimonial';
import RotatingGallery from '@/components/RotatingGallery';
import { revealOnScroll } from '@/lib/gsap';
import { getHeroForHome } from '@/lib/content-images';
import { standardPackages } from '@/lib/sil-data';

const eventGalleryImages = [
  {
    src: '/photos/20251209_125620936.jpg',
    alt: 'Guests posing at a Toronto photo booth rental with a custom printed backdrop at a celebration',
    title: 'Photo booth rental at a Toronto area event with backdrop and guests',
  },
  {
    src: '/photos/20251209_125627091.jpg',
    alt: 'Toronto area guests using props and taking instant photo booth strip prints at a private party',
    title: 'GTA photo booth with instant prints and props',
  },
  {
    src: '/photos/20251211_191242154.jpg',
    alt: 'Professional open-air photo booth equipment set up in a Toronto region banquet hall for a reception',
    title: 'Photo booth setup and equipment at a GTA wedding or event',
  },
  {
    src: '/photos/20251218_200721527.jpg',
    alt: 'Wedding guests lined up for a photo booth with prints at a Toronto area reception',
    title: 'Wedding photo booth rental with guests in line',
  },
  {
    src: '/photos/20260123_203236491.jpg',
    alt: 'Corporate and private event guests at a photo booth in the Toronto area with a branded backdrop',
    title: 'Photo booth in action at a GTA corporate or private event',
  },
  {
    src: '/photos/20241210_171353533.jpg',
    alt: 'Event photo booth rental in the Greater Toronto Area with instant print strips in guests hands',
    title: 'Event photo booth rental with prints and backdrop',
  },
  {
    src: '/photos/Sample 1.jpg',
    alt: 'Custom 2x6 or 4x6 photo booth print sample designed for a Toronto style wedding or celebration',
    title: 'Custom print template sample for Toronto events',
  },
  {
    src: '/photos/Sample 2.jpg',
    alt: 'Custom photo booth print layout with monogram for Toronto weddings and corporate galas',
    title: 'Custom template design for your event',
  },
  {
    src: '/photos/Sample 3.JPG',
    alt: 'Photo booth strip print with custom art for a GTA couple wedding keepsake',
    title: 'Print sample with custom design for your event',
  },
  {
    src: '/photos/Sample 4.jpg',
    alt: 'Instant dye-sublimation photo strip from a photo booth at a Toronto area celebration',
    title: 'Instant print sample for Toronto events',
  },
  {
    src: '/photos/Sample 5.jpeg',
    alt: 'Photo booth 4x6 print with custom border for a Toronto family or corporate function',
    title: 'Custom template print for Toronto photo booth guests',
  },
  {
    src: '/photos/220233130.jpg',
    alt: 'Open style photo booth with backdrop and line of guests in a Toronto and GTA event venue',
    title: 'Photo booth at a Toronto and GTA venue',
  },
  {
    src: '/photos/20231215173222-1 copy.jpg',
    alt: 'GTA event guests with photo strip prints in hand beside the booth setup',
    title: 'Photo booth experience in the Greater Toronto Area',
  },
  {
    src: '/photos/72243.jpg',
    alt: '360 video booth in use at a Toronto event with a crowd watching the platform',
    title: '360 video booth in action',
  },
  {
    src: '/photos/99232.jpg',
    alt: 'Wedding and party group on a 360 photo booth platform at a GTA event',
    title: '360 booth rental for weddings and events',
  },
  {
    src: '/photos/IMG_7399.jpeg',
    alt: 'Overhead 360 video rig capturing guests at a Greater Toronto Area reception',
    title: '360 spin booth in action on the floor',
  },
  {
    src: '/photos/IMG_8375.jpeg',
    alt: 'Wedding and party group posing on a 360 video booth in the Toronto area',
    title: '360 video moment at a GTA celebration',
  },
];

const homeFaq = [
  {
    question: 'How much is photo booth rental in Toronto and the GTA?',
    answer: (
      <>
        Our packages start at $550 (Essential) for 2 hours, $750 (Signature) for 3 hours, and $950
        (Premium) for 4 hours. Each tier includes the same equipment and service, including a
        professional attendant, DSLR capture, instant prints on a custom template, backdrops, props,
        and digital delivery to guests. You are choosing the length of the booking, not a stripped
        feature set. See{' '}
        <Link
          href="/photo-booth-rental-toronto-prices"
          className="text-black underline hover:no-underline"
        >
          photo booth pricing in Toronto
        </Link>{' '}
        for a full breakdown, or get a custom quote.
      </>
    ),
  },
  {
    question: 'Do you do weddings?',
    answer: (
      <>
        Yes. We set up for weddings, corporate events, and private parties across Toronto and the
        GTA. For reception timelines, custom templates, and guest flow, read our{' '}
        <Link
          href="/wedding-photo-booth-toronto"
          className="text-black underline hover:no-underline"
        >
          Toronto wedding photo booth
        </Link>{' '}
        page, then use Book or Get a Quote to check availability.
      </>
    ),
  },
  {
    question: 'Are custom print templates really included?',
    answer:
      'Yes. We design a print template for your event at no extra charge. Share your colours, monogram, logo, or theme, and we work with you on the layout before the day. Prints are 2x6 or 4x6 dye-sublimation on that template, with a trained attendant on site to help guests.',
  },
];

export default function HomeContent() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (aboutRef.current) revealOnScroll(aboutRef.current);
    if (featuresRef.current) revealOnScroll(featuresRef.current);
    if (faqRef.current) revealOnScroll(faqRef.current);
    if (ctaRef.current) revealOnScroll(ctaRef.current);
  }, []);

  const packages = standardPackages;

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
      description:
        'Crisp, flattering images using a DSLR and controlled lighting for dim ballrooms, LED-heavy stages, and mixed daylight at GTA venues.',
    },
    {
      icon: '🖨️',
      title: 'Instant Prints',
      description:
        'Dye-sublimation strips in seconds so guests walk away with a physical keepsake and your line keeps moving all night.',
    },
    {
      icon: '🎨',
      title: 'Custom Templates',
      description:
        'Print layouts matched to your fonts, colours, monogram, or sponsor logos, designed and approved before your event.',
    },
    {
      icon: '🎭',
      title: 'Backdrop & Props',
      description:
        'Backdrop options to suit your room plus props that work on camera, with guidance for balanced group photos.',
    },
    {
      icon: '👤',
      title: 'Professional Attendant',
      description:
        'A trained on-site attendant handles setup, flow, and small fixes so you stay with your guests, not the gear.',
    },
    {
      icon: '📱',
      title: 'Digital Copies',
      description:
        'Guests receive shares on site by SMS or email, and you get a full online gallery after the event.',
    },
  ];

  const heroImage = getHeroForHome();

  return (
    <div className="min-h-screen">
      <Hero
        backgroundImage={heroImage?.src}
        alt={heroImage?.alt}
        headline="Toronto Photo Booth Rental"
        subhead="Weddings, corporate events, and private parties across Toronto and the GTA. Packages from $550."
      />

      {/* Intro */}
      <section ref={aboutRef} className="w-full py-20 bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-light text-black mb-6 leading-tight">
              Professional photo booth rental in Toronto and the GTA
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light max-w-3xl mb-6">
              A staffed photo booth rental in Toronto and the surrounding GTA: we bring a DSLR, a
              dye-sublimation printer for instant prints, custom print templates, backdrops, props, and
              a trained on-site attendant. We book weddings, corporate events, and private parties. See{' '}
              <Link
                href="/wedding-photo-booth-toronto"
                className="text-black underline hover:no-underline"
              >
                Toronto wedding photo booth
              </Link>{' '}
              options and current{' '}
              <Link
                href="/photo-booth-rental-toronto-prices"
                className="text-black underline hover:no-underline"
              >
                photo booth pricing in Toronto
              </Link>
              .
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-light max-w-3xl mb-8">
              Serving{' '}
              <Link
                href="/photo-booth-rental-toronto"
                className="text-black underline hover:no-underline"
              >
                Toronto
              </Link>
              ,{' '}
              <Link
                href="/photo-booth-rental-mississauga"
                className="text-black underline hover:no-underline"
              >
                Mississauga
              </Link>
              ,{' '}
              <Link
                href="/photo-booth-rental-brampton"
                className="text-black underline hover:no-underline"
              >
                Brampton
              </Link>
              ,{' '}
              <Link
                href="/photo-booth-rental-vaughan"
                className="text-black underline hover:no-underline"
              >
                Vaughan
              </Link>
              ,{' '}
              <Link
                href="/photo-booth-rental-markham"
                className="text-black underline hover:no-underline"
              >
                Markham
              </Link>
              , and the rest of the region. If you are ready to book, use the buttons in the section
              below or the header, or go straight to <Link href="/book" className="text-black underline hover:no-underline">Book</Link> and{' '}
              <Link href="/quote" className="text-black underline hover:no-underline">Get a Quote</Link>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className="inline-flex items-center justify-center bg-black text-white px-10 py-5 text-base font-medium hover:bg-gray-900 transition-all duration-300 uppercase tracking-wider w-fit"
              >
                Book
              </Link>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center border border-black text-black px-10 py-5 text-base font-medium hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-wider w-fit"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="w-full max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-light text-black mb-4 leading-tight">Our Work</h2>
            <p className="text-lg text-gray-600 font-light">
              Real moments from events across the GTA
            </p>
          </div>
          <RotatingGallery images={eventGalleryImages} />
        </div>
      </section>

      {/* What&apos;s included */}
      <section ref={featuresRef} className="w-full py-20 bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-black mb-4 leading-tight">
              What&apos;s Included
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl">
              Every standard package is fully staffed. Features do not get removed when you change
              tiers, only the rental duration changes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="text-4xl mb-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-light text-black mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="pricing" className="w-full py-20 bg-gray-50">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-black mb-4 leading-tight">Package Pricing</h2>
            <p className="text-lg text-gray-600 font-light">Packages from $550 for 2 hours, same inclusions on every tier</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <PackageCard key={pkg.name} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="w-full py-20 bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-black mb-6 leading-tight">Serving the Greater Toronto Area</h2>
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
                Toronto
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Photo booth services in{' '}
                <Link href="/photo-booth-rental-toronto" className="text-black underline hover:no-underline">
                  Downtown
                </Link>
                ,{' '}
                <Link href="/photo-booth-rental-north-york" className="text-black underline hover:no-underline">
                  North York
                </Link>
                ,{' '}
                <Link href="/photo-booth-rental-scarborough" className="text-black underline hover:no-underline">
                  Scarborough
                </Link>
                , and{' '}
                <Link href="/photo-booth-rental-etobicoke" className="text-black underline hover:no-underline">
                  Etobicoke
                </Link>
              </p>
            </Link>
            <Link
              href="/photo-booth-rental-mississauga"
              className="border border-gray-200 p-8 hover:border-black transition-all duration-300 group"
            >
              <h3 className="text-2xl font-light text-black mb-3 group-hover:translate-x-2 transition-transform">
                Mississauga
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Professional photo booth rental in Port Credit, Streetsville, and across Mississauga
              </p>
            </Link>
            <Link
              href="/photo-booth-rental-brampton"
              className="border border-gray-200 p-8 hover:border-black transition-all duration-300 group"
            >
              <h3 className="text-2xl font-light text-black mb-3 group-hover:translate-x-2 transition-transform">
                Brampton
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">Photo booth services in Bramalea, Heart Lake, and more</p>
            </Link>
            <Link
              href="/photo-booth-rental-vaughan"
              className="border border-gray-200 p-8 hover:border-black transition-all duration-300 group"
            >
              <h3 className="text-2xl font-light text-black mb-3 group-hover:translate-x-2 transition-transform">
                Vaughan
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">Woodbridge, Concord, Thornhill, and the surrounding area</p>
            </Link>
            <Link
              href="/photo-booth-rental-markham"
              className="border border-gray-200 p-8 hover:border-black transition-all duration-300 group"
            >
              <h3 className="text-2xl font-light text-black mb-3 group-hover:translate-x-2 transition-transform">
                Markham
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">Unionville, Milliken, and Markham event venues</p>
            </Link>
            <Link
              href="/equipment"
              className="border border-gray-200 p-8 hover:border-black transition-all duration-300 group bg-gray-50"
            >
              <h3 className="text-2xl font-light text-black mb-3 group-hover:translate-x-2 transition-transform">
                Our Services
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Photo booth, glam booth, audio guest book, 360 video booth, and more
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqRef} className="w-full py-20 bg-gray-50">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-12 leading-tight">Common Questions</h2>
          <div className="max-w-4xl space-y-10">
            {homeFaq.map((item) => (
              <div key={item.question} className="border-b border-gray-200 pb-10 last:border-0 last:pb-0">
                <h3 className="text-2xl font-light text-black mb-4">{item.question}</h3>
                <div className="text-gray-700 leading-relaxed font-light text-lg">{item.answer}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-20 bg-black text-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-light mb-4 leading-tight">What Our Clients Say</h2>
          </div>
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
            <h2 className="text-4xl md:text-5xl font-light text-black mb-6 leading-tight">Ready to book your booth?</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed font-light max-w-2xl">
              Tell us your date and venue, and we will confirm what you need: guest flow, template,
              and setup timing.
            </p>
            <p className="text-base text-gray-600 mb-8 leading-relaxed font-light max-w-2xl">
              Planning a wedding? See our page for a{' '}
              <Link
                href="/wedding-photo-booth-toronto"
                className="text-black underline hover:no-underline"
              >
                Toronto wedding photo booth
              </Link>
              . Need numbers first? Open{' '}
              <Link
                href="/photo-booth-rental-toronto-prices"
                className="text-black underline hover:no-underline"
              >
                photo booth pricing in Toronto
              </Link>
              .
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
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
                Browse equipment and add ons
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
