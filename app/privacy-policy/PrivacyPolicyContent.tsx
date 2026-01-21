'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { revealOnScroll } from '@/lib/gsap';

export default function PrivacyPolicyContent() {
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
              Privacy 
              Policy
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed font-light">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
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
          <div className="max-w-4xl mx-auto prose prose-lg">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-black mb-6">
                Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed font-light mb-4">
                The Photobooth Guy (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us. This policy complies with the Personal Information Protection and Electronic Documents Act (PIPEDA) and other applicable Canadian privacy laws.
              </p>
              <p className="text-gray-700 leading-relaxed font-light">
                By using our website or services, you consent to the collection and use of information in accordance with this policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-black mb-6">
                Information We Collect
              </h2>
              <p className="text-gray-700 leading-relaxed font-light mb-4">
                We collect information that you provide directly to us, as well as information collected automatically when you use our services:
              </p>
              
              <h3 className="text-xl font-light text-black mb-4 mt-6">
                Personal Information You Provide
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 font-light mb-4">
                <li>Name and contact information (email address, phone number, mailing address)</li>
                <li>Event details (date, location, type of event)</li>
                <li>Payment information (processed securely through third-party payment processors)</li>
                <li>Communications with us (emails, phone calls, contact form submissions)</li>
                <li>Photographs and videos taken at your event (with your consent)</li>
              </ul>

              <h3 className="text-xl font-light text-black mb-4 mt-6">
                Automatically Collected Information
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 font-light mb-4">
                <li>Website usage data (pages visited, time spent, links clicked)</li>
                <li>Device information (browser type, operating system, IP address)</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Analytics data to improve our website and services</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-black mb-6">
                How We Use Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed font-light mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 font-light mb-4">
                <li>To provide, maintain, and improve our photo booth rental services</li>
                <li>To process bookings, payments, and fulfill service requests</li>
                <li>To communicate with you about your event, bookings, and customer service inquiries</li>
                <li>To send you marketing communications (with your consent, which you can opt-out of at any time)</li>
                <li>To deliver digital copies of photos and videos from your event</li>
                <li>To analyze website usage and improve user experience</li>
                <li>To comply with legal obligations and protect our rights</li>
                <li>To prevent fraud and ensure security</li>
              </ul>
            </div>

            {/* Information Sharing and Disclosure */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-black mb-6">
                Information Sharing and Disclosure
              </h2>
              <p className="text-gray-700 leading-relaxed font-light mb-4">
                We do not sell your personal information. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 font-light mb-4">
                <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our business, such as payment processors, email service providers, and website hosting services. These providers are contractually obligated to protect your information.</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law, court order, or government regulation, or to protect our rights, property, or safety.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
                <li><strong>With Your Consent:</strong> We may share information with your explicit consent or at your direction.</li>
              </ul>
            </div>

            {/* Photo and Video Content */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-black mb-6">
                Photo and Video Content
              </h2>
              <p className="text-gray-700 leading-relaxed font-light mb-4">
                As part of our photo booth services, we capture photographs and videos at your event. We handle this content as follows:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 font-light mb-4">
                <li>Photos and videos are stored securely and delivered to you as part of our service</li>
                <li>We may use event photos for marketing purposes (website, social media) only with your explicit written consent</li>
                <li>You can request that we do not use your event photos for marketing purposes at any time</li>
                <li>We retain event photos for a reasonable period to ensure delivery, after which they may be securely deleted</li>
                <li>You have the right to request deletion of your event photos at any time</li>
              </ul>
            </div>

            {/* Cookies and Tracking Technologies */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-black mb-6">
                Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-700 leading-relaxed font-light mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user preferences. You can control cookie settings through your browser preferences. Note that disabling cookies may affect website functionality.
              </p>
              <p className="text-gray-700 leading-relaxed font-light mb-4">
                We may use third-party analytics services (such as Google Analytics) that use cookies to collect information about website usage. These services help us understand how visitors interact with our website.
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-black mb-6">
                Data Security
              </h2>
              <p className="text-gray-700 leading-relaxed font-light mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
              <p className="text-gray-700 leading-relaxed font-light">
                Security measures include encryption, secure servers, access controls, and regular security assessments.
              </p>
            </div>

            {/* Your Rights (PIPEDA Compliance) */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-black mb-6">
                Your Rights Under PIPEDA
              </h2>
              <p className="text-gray-700 leading-relaxed font-light mb-4">
                Under the Personal Information Protection and Electronic Documents Act (PIPEDA) and other applicable privacy laws, you have the following rights:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 font-light mb-4">
                <li><strong>Access:</strong> You have the right to request access to your personal information that we hold</li>
                <li><strong>Correction:</strong> You can request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> You may request deletion of your personal information, subject to legal and contractual obligations</li>
                <li><strong>Withdrawal of Consent:</strong> You can withdraw consent for certain uses of your information at any time</li>
                <li><strong>Complaint:</strong> You have the right to file a complaint with the Privacy Commissioner of Canada if you believe your privacy rights have been violated</li>
              </ul>
              <p className="text-gray-700 leading-relaxed font-light">
                To exercise these rights, please contact us using the information provided in the Contact section below.
              </p>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-black mb-6">
                Data Retention
              </h2>
              <p className="text-gray-700 leading-relaxed font-light mb-4">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law. When information is no longer needed, we will securely delete or anonymize it.
              </p>
              <p className="text-gray-700 leading-relaxed font-light">
                Event photos and videos are typically retained for a period sufficient to ensure delivery to clients, after which they may be securely deleted upon request.
              </p>
            </div>

            {/* Children&apos;s Privacy */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-black mb-6">
                Children&apos;s Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed font-light mb-4">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately, and we will take steps to delete such information.
              </p>
            </div>

            {/* Changes to This Policy */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-black mb-6">
                Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700 leading-relaxed font-light mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
              </p>
              <p className="text-gray-700 leading-relaxed font-light">
                We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12 border-t border-gray-200 pt-8">
              <h2 className="text-3xl md:text-4xl font-light text-black mb-6">
                Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed font-light mb-6">
                If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
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
                <div className="mt-6">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    For privacy-related inquiries or to exercise your rights under PIPEDA, please contact us using the information above. We will respond to your request within a reasonable timeframe.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Resources */}
            <div className="mb-12 border-t border-gray-200 pt-8">
              <h2 className="text-3xl md:text-4xl font-light text-black mb-6">
                Additional Resources
              </h2>
              <p className="text-gray-700 leading-relaxed font-light mb-4">
                For more information about privacy rights in Canada, you may visit:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 font-light">
                <li>
                  <a
                    href="https://www.priv.gc.ca/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black underline hover:text-gray-600 transition-colors"
                  >
                    Office of the Privacy Commissioner of Canada
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

