import type { Metadata } from 'next';
import Image from 'next/image';
import { decodeQuote, isQuoteExpired } from '@/lib/quote-utils';
import { getImagesForBookPage } from '@/lib/content-images';
import BookingForm from '@/components/BookingForm';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Book Your Photo Booth | The Photobooth Guy',
  description: 'Book your photo booth rental for Toronto and the GTA. Submit your booking request and we\'ll confirm pricing and availability.',
  alternates: {
    canonical: 'https://thephotoboothguy.ca/book',
  },
};

interface PageProps {
  searchParams: Promise<{ quote?: string }>;
}

export default async function BookPage({ searchParams }: PageProps) {
  const { quote: quoteParam } = await searchParams;
  let initialData: Awaited<ReturnType<typeof decodeQuote>> = null;

  if (quoteParam) {
    const decoded = decodeQuote(quoteParam);
    if (decoded && !isQuoteExpired(decoded)) {
      initialData = decoded;
    }
  }

  const { heroImage } = getImagesForBookPage();

  return (
    <div className="min-h-screen pt-20">
      <section className="relative min-h-[60vh] flex items-center justify-center bg-black text-white overflow-hidden">
        {heroImage && (
          <>
            <Image src={heroImage.src} alt="" fill className="object-cover object-center" sizes="100vw" priority />
            <div className="absolute inset-0 bg-black/55" aria-hidden />
          </>
        )}
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 py-20">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
              Book
              <br />
              Your Event
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed font-light">
              Submit your booking request and we&apos;ll confirm pricing and availability.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-20 bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <BookingForm initialData={initialData} />

            <p className="mt-8 text-gray-500 text-sm font-light">
              Prefer to get a quote first? <Link href="/quote" className="text-black underline hover:no-underline">Get a quote</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
