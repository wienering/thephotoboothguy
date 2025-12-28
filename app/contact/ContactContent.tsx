'use client';

import { useEffect, useRef, useMemo } from 'react';
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

  // Business hours with current day at top
  const businessHours = useMemo(() => {
    const days = [
      { name: 'Sunday', hours: '7 a.m.–11:30 p.m.' },
      { name: 'Monday', hours: '7 a.m.–11:30 p.m.' },
      { name: 'Tuesday', hours: '7 a.m.–11:30 p.m.' },
      { name: 'Wednesday', hours: '7 a.m.–11:30 p.m.' },
      { name: 'Thursday', hours: '7 a.m.–11:30 p.m.' },
      { name: 'Friday', hours: '7 a.m.–11:30 p.m.' },
      { name: 'Saturday', hours: '7 a.m.–11:30 p.m.' },
    ];

    const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
    const currentDayName = days[today].name;

    // Reorder so current day is first
    const reorderedDays = [
      ...days.slice(today),
      ...days.slice(0, today)
    ];

    return { days: reorderedDays, currentDay: currentDayName };
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="w-full pt-32 pb-20 bg-black text-white"
      >
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl pt-16">
            <h1 className="text-4xl md:text-5xl font-light mb-6 leading-tight">Get In Touch</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed font-light">
              We'd love to help make your event special. Get in touch and let's talk about what we can do for you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="w-full py-20 bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div ref={formRef}>
              <h2 className="text-3xl md:text-4xl font-light text-black mb-4">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-10 leading-relaxed font-light">
                Fill out the form below and we&apos;ll get back to you quickly.
              </p>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div ref={infoRef} className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-light text-black mb-8">
                  Contact Information
                </h2>
                <div className="space-y-6">
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
                    <p className="text-xl text-gray-700 font-light mb-2">
                      GTA
                    </p>
                    <p className="text-base text-gray-600 font-light leading-relaxed">
                      Toronto, Mississauga, Brampton, Markham, Vaughan, Richmond Hill, Oakville, Burlington, Etobicoke, Scarborough, North York, Ajax, Pickering, Whitby, Oshawa, and surrounding areas
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="border border-gray-200 p-10">
                <h3 className="text-xl font-light text-black mb-3">
                  Quick Response
                </h3>
                <p className="text-gray-700 leading-relaxed font-light text-sm">
                  We typically respond to all inquiries within 24 hours.
                </p>
              </div>

              {/* Business Hours */}
              <div className="border border-gray-200 p-10">
                <h3 className="text-xl font-light text-black mb-4">
                  Business Hours
                </h3>
                <div className="space-y-4 text-gray-700">
                  {businessHours.days.map((day, index) => {
                    const isCurrentDay = day.name === businessHours.currentDay;
                    return (
                      <p
                        key={day.name}
                        className={`flex justify-between font-light ${
                          isCurrentDay
                            ? 'bg-gray-100 -mx-2 px-2 py-2 rounded font-medium text-black'
                            : ''
                        }`}
                      >
                        <span>
                          {day.name}
                          {isCurrentDay && (
                            <span className="ml-2 text-xs text-gray-500 font-normal">(Today)</span>
                          )}
                          :
                        </span>
                        <span>{day.hours}</span>
                      </p>
                    );
                  })}
                </div>
                <p className="mt-6 text-gray-600 font-light">
                  We do events any day of the week, including evenings and weekends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
