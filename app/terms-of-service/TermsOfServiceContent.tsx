'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { revealOnScroll } from '@/lib/gsap';

export default function TermsOfServiceContent() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) revealOnScroll(heroRef.current);
    if (contentRef.current) revealOnScroll(contentRef.current);
  }, []);

  const lastUpdated = 'January 2025';

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="w-full pt-32 pb-20 bg-black text-white"
      >
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl pt-16">
            <h1 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
              Terms of 
              Service
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed font-light">
              Please review our terms and conditions for photo booth rental services.
            </p>
            <p className="text-sm text-gray-400 mt-4 font-light">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section ref={contentRef} className="w-full py-20 bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-gray-700 leading-relaxed font-light mb-4">
                By filling out the booking form and submitting a retainer, the client (&quot;Client&quot;) acknowledges that they have read, understood, and agreed to the following terms and conditions (&quot;Agreement&quot;) set forth by The Photobooth Guy (&quot;Provider&quot;).
              </p>
            </div>

            {/* Section 1: Services */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-black mb-6">
                1. Services
              </h2>
              <p className="text-gray-700 leading-relaxed font-light">
                Provider agrees to provide photo booth rental services as described in the selected package, which may include prints on a custom template, an attendant, backdrop, props, digital images, and delivery/setup.
              </p>
            </div>

            {/* Section 2: Location & Delivery */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-black mb-6">
                2. Location & Delivery of Services
              </h2>
              <p className="text-gray-700 leading-relaxed font-light">
                Provider will deliver services to the event location specified by Client at the time of booking. Services will be provided on the event date selected in the booking form unless otherwise arranged in writing.
              </p>
            </div>

            {/* Section 3: Cost, Fees and Payment */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-black mb-6">
                3. Cost, Fees and Payment
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 font-light">
                <li>The total cost (&quot;Total Cost&quot;) is based on the package selected by Client.</li>
                <li>A retainer is required at the time of booking to secure the date. Retainers are non-refundable and will be applied to the total cost of your rental.</li>
                <li>The balance is due 1 week prior to the event date.</li>
              </ul>
            </div>

            {/* Section 4: Exclusivity */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-black mb-6">
                4. Exclusivity
              </h2>
              <p className="text-gray-700 leading-relaxed font-light">
                Client agrees that Provider is the exclusive provider of photo booth and similar services at the event unless otherwise agreed in writing.
              </p>
            </div>

            {/* Section 5: Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-black mb-6">
                5. Intellectual Property
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 font-light">
                <li>All copyrights in images, videos, and other works created during the event remain the sole property of Provider under the Canadian Copyright Act.</li>
                <li>Provider grants Client a personal, non-commercial license to use digital and printed photographs/videos for personal purposes only.</li>
                <li>Commercial use requires a separate licensing agreement – please inquire if a commercial license is required.</li>
              </ul>
            </div>

            {/* Section 6: Artistic Release */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-black mb-6">
                6. Artistic Release
              </h2>
              <p className="text-gray-700 leading-relaxed font-light">
                Client acknowledges that Provider&apos;s services involve artistic judgment and style. Dissatisfaction with artistic style or aesthetic judgment does not constitute grounds for refund or termination of this Agreement.
              </p>
            </div>

            {/* Section 7: Limit of Liability */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-black mb-6">
                7. Limit of Liability
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 font-light">
                <li>Maximum liability under this Agreement is limited to the Total Cost of Services.</li>
                <li>If product(s) are lost or damaged due to Provider&apos;s negligence, Provider may refund a prorated portion of the Total Cost. This applies only if before the first delivery of digital or physical products. There are no guarantees that digital products will be held in storage after delivery.</li>
                <li>Client agrees to indemnify and hold Provider harmless from claims or damages related to use of the services.</li>
              </ul>
            </div>

            {/* Section 8: Cancellation, Rescheduling, and No-Shows */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-black mb-6">
                8. Cancellation, Rescheduling, and No-Shows
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 font-light">
                <li>Retainers are non-refundable.</li>
                <li>If Client cancels, reschedules, or fails to show, Client remains responsible for payment of the Total Cost.</li>
                <li>Provider may, at its discretion, excuse part of the balance if the date is re-booked by another client.</li>
              </ul>
            </div>

            {/* Section 9: Impossibility / Force Majeure */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-black mb-6">
                9. Impossibility / Force Majeure
              </h2>
              <p className="text-gray-700 leading-relaxed font-light">
                Neither party is liable for failure to perform due to events beyond their control, including but not limited to natural disasters, war, government restrictions, or terrorism.
              </p>
            </div>

            {/* Section 10: Appropriate Conduct / Safe Working Environment */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-black mb-6">
                10. Appropriate Conduct / Safe Working Environment
              </h2>
              <p className="text-gray-700 leading-relaxed font-light">
                Client agrees to provide a safe and respectful environment for Provider&apos;s staff and equipment. Provider reserves the right to immediately terminate services without refund considerations if staff experience unsafe, threatening, or harassing behavior.
              </p>
            </div>

            {/* Section 11: Governing Law */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-black mb-6">
                11. Governing Law
              </h2>
              <p className="text-gray-700 leading-relaxed font-light">
                This Agreement is governed by the laws of Ontario.
              </p>
            </div>

            {/* Section 12: Dispute Resolution */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-black mb-6">
                12. Dispute Resolution
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 font-light">
                <li><strong>Negotiation:</strong> Parties agree to attempt good-faith negotiation.</li>
                <li><strong>Mediation:</strong> If unresolved, disputes will be referred to mediation in Toronto, Ontario.</li>
                <li><strong>Arbitration:</strong> Failing mediation, disputes will be resolved by binding arbitration under the Arbitration Act of Ontario.</li>
              </ul>
            </div>

            {/* Section 13: Severability */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-black mb-6">
                13. Severability
              </h2>
              <p className="text-gray-700 leading-relaxed font-light">
                If any part of this Agreement is found unenforceable, the remainder remains valid and in full force.
              </p>
            </div>

            {/* Section 14: Notice */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-black mb-6">
                14. Notice
              </h2>
              <p className="text-gray-700 leading-relaxed font-light mb-4">
                Notices shall be delivered by email.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 font-light">
                <li>Provider: <a href="mailto:contact@thephotoboothguy.ca" className="text-black underline hover:text-gray-600 transition-colors">contact@thephotoboothguy.ca</a></li>
                <li>Client: email address provided at booking</li>
              </ul>
            </div>

            {/* Section 15: Acceptance of Agreement */}
            <div className="mb-12 border-t border-gray-200 pt-8">
              <h2 className="text-3xl md:text-4xl font-light text-black mb-6">
                15. Acceptance of Agreement
              </h2>
              <p className="text-gray-700 leading-relaxed font-light">
                By completing the booking form and submitting a retainer, Client acknowledges they have read, understood, and agree to these terms and conditions.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12 border-t border-gray-200 pt-8">
              <h2 className="text-3xl md:text-4xl font-light text-black mb-6">
                Questions?
              </h2>
              <p className="text-gray-700 leading-relaxed font-light mb-6">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-4 text-gray-700 font-light">
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2 font-medium">
                    The Photobooth Guy
                  </h3>
                  <p className="mb-1">340 Mill Rd.</p>
                  <p className="mb-1">Etobicoke, ON M9C 1Y8</p>
                  <p className="mb-4">Canada</p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2 font-medium">
                    Email
                  </h3>
                  <a
                    href="mailto:contact@thephotoboothguy.ca"
                    className="text-black hover:text-gray-600 transition-colors underline"
                  >
                    contact@thephotoboothguy.ca
                  </a>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2 font-medium">
                    Phone
                  </h3>
                  <a
                    href="tel:647-378-5332"
                    className="text-black hover:text-gray-600 transition-colors"
                  >
                    647-378-5332
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

