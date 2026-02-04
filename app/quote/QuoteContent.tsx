'use client';

import { useState } from 'react';
import { encodeQuote } from '@/lib/quote-utils';
import type { QuoteContactInfo, QuotePackage, QuoteAddons } from '@/lib/quote-utils';

const PACKAGES = [
  { hours: 2, price: 550 },
  { hours: 3, price: 750 },
  { hours: 4, price: 950 },
  { hours: 5, price: 1150 },
  { hours: 6, price: 1350 },
] as const;

const UNLIMITED_PRINTS_SHORT = 60;
const UNLIMITED_PRINTS_LONG = 50;
const GLAM_BOOTH = 75;
const WAITING_TIME_PER_HOUR = 50;

function formatEventDate(dateStr: string): string {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T12:00:00');
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function QuoteContent() {
  const [step, setStep] = useState(1);
  const [contactInfo, setContactInfo] = useState<QuoteContactInfo>({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
  });
  const [selectedPackage, setSelectedPackage] = useState<QuotePackage | null>(null);
  const [addons, setAddons] = useState<QuoteAddons>({
    unlimitedPrints: false,
    glamBooth: false,
    waitingTime: false,
    waitingHours: 0,
  });
  const [sendingEmail, setSendingEmail] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState('');

  const total = (() => {
    if (!selectedPackage) return 0;
    let t = selectedPackage.price;
    if (addons.unlimitedPrints) {
      const rate = selectedPackage.hours <= 3 ? UNLIMITED_PRINTS_SHORT : UNLIMITED_PRINTS_LONG;
      t += rate * selectedPackage.hours;
    }
    if (addons.glamBooth) t += GLAM_BOOTH;
    if (addons.waitingTime && addons.waitingHours > 0) t += WAITING_TIME_PER_HOUR * addons.waitingHours;
    return t;
  })();

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value.trim();
    const eventDate = (form.elements.namedItem('eventDate') as HTMLInputElement).value;
    if (!name || !email || !phone || !eventDate) return;
    setContactInfo({ name, email, phone, eventDate });
    setStep(2);
  };

  const handleReviewQuote = () => {
    setStep(3);
  };

  const getBookUrl = () => {
    const payload = {
      contactInfo: {
        ...contactInfo,
        eventDate: contactInfo.eventDate,
      },
      package: selectedPackage!,
      addons,
      total,
    };
    const encoded = encodeQuote(payload);
    const base = typeof window !== 'undefined' ? window.location.origin : 'https://thephotoboothguy.ca';
    return `${base}/book?quote=${encodeURIComponent(encoded)}`;
  };

  const handleBookNow = () => {
    window.location.href = getBookUrl();
  };

  const handleEmailQuote = async () => {
    setEmailError('');
    setSendingEmail(true);
    try {
      const res = await fetch('/api/send-quote-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contactInfo,
          package: selectedPackage,
          addons,
          total,
          bookUrl: getBookUrl(),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to send');
      setEmailSent(true);
    } catch (err) {
      setEmailError(err instanceof Error ? err.message : 'Failed to send email');
    } finally {
      setSendingEmail(false);
    }
  };

  const labelClass = 'block text-sm uppercase tracking-wider text-gray-700 mb-2 font-medium';
  const inputClass =
    'w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors bg-white';

  return (
    <div className="min-h-screen pt-20">
      <section className="w-full pt-32 pb-20 bg-black text-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl pt-16">
            <h1 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
              Get Your
              <br />
              Photo Booth Quote
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed font-light">
              Instant pricing for Toronto and the GTA. Packages from $550.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-20 bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            {/* Progress */}
            <div className="flex items-center gap-4 mb-12 text-sm uppercase tracking-wider text-gray-500">
              <span className={step >= 1 ? 'text-black font-medium' : ''}>1. Contact</span>
              <span>—</span>
              <span className={step >= 2 ? 'text-black font-medium' : ''}>2. Package</span>
              <span>—</span>
              <span className={step >= 3 ? 'text-black font-medium' : ''}>3. Review</span>
            </div>

            {/* Step 1 */}
            {step === 1 && (
              <>
                <h2 className="text-3xl font-light text-black mb-4">Let&apos;s get started</h2>
                <p className="text-gray-600 mb-8 font-light">Provide your contact and event details.</p>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className={labelClass}>Full Name *</label>
                    <input type="text" id="name" name="name" required className={inputClass} placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>Email *</label>
                    <input type="email" id="email" name="email" required className={inputClass} placeholder="your@email.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>Phone *</label>
                    <input type="tel" id="phone" name="phone" required className={inputClass} placeholder="(647) 555-1234" />
                  </div>
                  <div>
                    <label htmlFor="eventDate" className={labelClass}>Event Date *</label>
                    <input type="date" id="eventDate" name="eventDate" required className={inputClass} />
                  </div>
                  <button type="submit" className="w-full bg-black text-white py-4 px-6 font-medium text-sm uppercase tracking-wider hover:bg-gray-900 transition-colors">
                    Continue to Package Selection
                  </button>
                </form>
              </>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <>
                <h2 className="text-3xl font-light text-black mb-4">Choose your package</h2>
                <p className="text-gray-600 mb-8 font-light">Select hours and any add-ons.</p>

                <div className="mb-8">
                  <p className="text-sm uppercase tracking-wider text-gray-600 mb-3">Base packages</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {PACKAGES.map((p) => (
                      <button
                        key={p.hours}
                        type="button"
                        onClick={() => setSelectedPackage(p)}
                        className={`border p-4 text-left transition-colors ${selectedPackage?.hours === p.hours ? 'border-black bg-gray-50' : 'border-gray-200 hover:border-gray-400'}`}
                      >
                        <span className="font-medium">{p.hours} hours</span>
                        <span className="block text-lg font-light">${p.price.toLocaleString()}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <p className="text-sm uppercase tracking-wider text-gray-600 mb-3">Add-ons</p>
                  <div className="space-y-4">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={addons.unlimitedPrints}
                        onChange={(e) => setAddons((a) => ({ ...a, unlimitedPrints: e.target.checked }))}
                        className="w-4 h-4"
                      />
                      <span>Unlimited Prints</span>
                      {selectedPackage && (
                        <span className="text-gray-600">
                          ${(selectedPackage.hours <= 3 ? UNLIMITED_PRINTS_SHORT : UNLIMITED_PRINTS_LONG) * selectedPackage.hours}
                        </span>
                      )}
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={addons.glamBooth}
                        onChange={(e) => setAddons((a) => ({ ...a, glamBooth: e.target.checked }))}
                        className="w-4 h-4"
                      />
                      <span>Glam Booth — ${GLAM_BOOTH}</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={addons.waitingTime}
                        onChange={(e) =>
                          setAddons((a) => ({ ...a, waitingTime: e.target.checked, waitingHours: e.target.checked ? 1 : 0 }))
                        }
                        className="w-4 h-4 mt-1"
                      />
                      <div>
                        <span>Waiting Time — $50/hr</span>
                        {addons.waitingTime && (
                          <select
                            value={addons.waitingHours}
                            onChange={(e) => setAddons((a) => ({ ...a, waitingHours: Number(e.target.value) }))}
                            className="ml-3 px-2 py-1 border border-gray-300"
                          >
                            {[1, 2, 3, 4].map((h) => (
                              <option key={h} value={h}>{h} hour{h > 1 ? 's' : ''}</option>
                            ))}
                          </select>
                        )}
                      </div>
                    </label>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 p-4 mb-8">
                  <p className="text-sm uppercase tracking-wider text-gray-600 mb-1">Quote total</p>
                  <p className="text-2xl font-light">${total.toLocaleString()}</p>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-6 py-3 border border-gray-300 font-medium text-sm uppercase tracking-wider hover:bg-gray-50"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleReviewQuote}
                    disabled={!selectedPackage}
                    className="flex-1 bg-black text-white py-3 px-6 font-medium text-sm uppercase tracking-wider hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Review Quote
                  </button>
                </div>
              </>
            )}

            {/* Step 3 */}
            {step === 3 && selectedPackage && (
              <>
                <h2 className="text-3xl font-light text-black mb-4">Review your quote</h2>
                <p className="text-gray-600 mb-6 font-light">Confirm details before booking or emailing.</p>

                <div className="bg-gray-50 border border-gray-200 p-6 mb-6 space-y-4">
                  <div>
                    <p className="text-sm uppercase tracking-wider text-gray-600">Contact</p>
                    <p className="font-light">{contactInfo.name} · {contactInfo.email} · {contactInfo.phone}</p>
                    <p className="font-light">Event date: {formatEventDate(contactInfo.eventDate)}</p>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wider text-gray-600">Package</p>
                    <p className="font-light">{selectedPackage.hours} hours — ${selectedPackage.price.toLocaleString()}</p>
                    {addons.unlimitedPrints && (
                      <p className="font-light">Unlimited Prints — ${(selectedPackage.hours <= 3 ? UNLIMITED_PRINTS_SHORT : UNLIMITED_PRINTS_LONG) * selectedPackage.hours}</p>
                    )}
                    {addons.glamBooth && <p className="font-light">Glam Booth — $75</p>}
                    {addons.waitingTime && addons.waitingHours > 0 && (
                      <p className="font-light">Waiting Time ({addons.waitingHours}h) — ${WAITING_TIME_PER_HOUR * addons.waitingHours}</p>
                    )}
                    <p className="font-medium mt-2">Total: ${total.toLocaleString()}</p>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4 font-light">
                  All quotes are valid for 30 days. Quotes are based on the package and options you selected. If your event details or requirements change, or if the information provided was inaccurate, the quote may not apply and we may need to requote.
                </p>

                {emailSent && (
                  <div className="bg-gray-50 border border-gray-200 p-4 mb-6">
                    <p className="text-gray-700 font-light">Quote sent to your email. Use the link in the email to book when you&apos;re ready.</p>
                  </div>
                )}
                {emailError && (
                  <div className="bg-red-50 border border-red-200 p-4 mb-6">
                    <p className="text-red-700 font-light">{emailError}</p>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-6 py-3 border border-gray-300 font-medium text-sm uppercase tracking-wider hover:bg-gray-50"
                  >
                    Back to Packages
                  </button>
                  <button
                    type="button"
                    onClick={handleEmailQuote}
                    disabled={sendingEmail}
                    className="px-6 py-3 border border-black font-medium text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors disabled:opacity-50"
                  >
                    {sendingEmail ? 'Sending...' : 'Email quote to me'}
                  </button>
                  <button
                    type="button"
                    onClick={handleBookNow}
                    className="flex-1 bg-black text-white py-3 px-6 font-medium text-sm uppercase tracking-wider hover:bg-gray-900"
                  >
                    Book now
                  </button>
                </div>

                <p className="mt-6 text-sm text-gray-500 font-light">
                  The link in your email will bring you back to your booking details so you can complete your reservation when you&apos;re ready.
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
