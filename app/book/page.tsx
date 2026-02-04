import type { Metadata } from 'next';
import { decodeQuote, isQuoteExpired } from '@/lib/quote-utils';
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
  let expired = false;

  if (quoteParam) {
    const decoded = decodeQuote(quoteParam);
    if (decoded) {
      if (isQuoteExpired(decoded)) {
        expired = true;
      } else {
        initialData = decoded;
      }
    }
  }

  return (
    <div className="min-h-screen pt-20">
      <section className="w-full pt-32 pb-20 bg-black text-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl pt-16">
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
            <p className="text-gray-600 mb-6 leading-relaxed font-light text-sm">
              All quotes are valid for 30 days. Quotes based on inaccurate or changed event details may not apply.
            </p>

            {expired && (
              <div className="bg-gray-50 border border-gray-200 p-4 mb-8">
                <p className="text-gray-800 font-light">
                  This quote is no longer valid. All quotes expire after 30 days. You can request a new booking below and we&apos;ll confirm pricing.
                </p>
              </div>
            )}

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
