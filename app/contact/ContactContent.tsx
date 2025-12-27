'use client';

import { useEffect, useRef } from 'react';
import ContactForm from '@/components/ContactForm';
import { revealOnScroll } from '@/lib/gsap';

export default function ContactContent() {
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) revealOnScroll(heroRef.current);
    if (formRef.current) revealOnScroll(formRef.current);
    if (infoRef.current) revealOnScroll(infoRef.current);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="w-full py-32 bg-black text-white"
      >
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight">Get In Touch</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed font-light">
              We&apos;re here to help make your event unforgettable. Reach out and
              let&apos;s discuss how we can bring the perfect photo booth
              experience to your celebration.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="w-full py-32 bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div ref={formRef}>
              <h2 className="text-4xl md:text-5xl font-light text-black mb-4">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-10 leading-relaxed font-light">
                Fill out the form below and we&apos;ll get back to you within 24
                hours.
              </p>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div ref={infoRef} className="space-y-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-light text-black mb-10">
                  Contact Information
                </h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3 font-medium">
                      Phone
                    </h3>
                    <a
                      href="tel:647-378-5332"
                      className="text-2xl text-black hover:text-gray-600 transition-colors font-light"
                    >
                      647-378-5332
                    </a>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3 font-medium">
                      Email
                    </h3>
                    <a
                      href="mailto:info@photoboothguys.ca"
                      className="text-2xl text-black hover:text-gray-600 transition-colors font-light"
                    >
                      info@photoboothguys.ca
                    </a>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3 font-medium">
                      Service Area
                    </h3>
                    <p className="text-xl text-gray-700 font-light">
                      Toronto, Ontario and surrounding areas
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Time Promise */}
              <div className="border border-gray-200 p-10">
                <h3 className="text-2xl font-light text-black mb-4">
                  Quick Response Promise
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed font-light">
                  We understand that planning an event requires quick decisions.
                  That&apos;s why we guarantee to respond to all inquiries within
                  24 hours.
                </p>
                <div className="flex items-center text-black">
                  <svg
                    className="w-5 h-5 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium text-sm uppercase tracking-wider">24-Hour Response Guarantee</span>
                </div>
              </div>

              {/* Business Hours */}
              <div className="border border-gray-200 p-10">
                <h3 className="text-2xl font-light text-black mb-6">
                  Business Hours
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p className="flex justify-between font-light">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 8:00 PM</span>
                  </p>
                  <p className="flex justify-between font-light">
                    <span>Saturday:</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </p>
                  <p className="flex justify-between font-light">
                    <span>Sunday:</span>
                    <span>By Appointment</span>
                  </p>
                </div>
                <p className="mt-6 text-gray-600 font-light">
                  We&apos;re available for events 7 days a week, including
                  evenings and weekends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
