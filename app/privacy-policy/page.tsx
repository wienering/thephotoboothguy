import type { Metadata } from 'next';
import { definePageMetadata } from '@/lib/page-metadata';
import PrivacyPolicyContent from './PrivacyPolicyContent';

export const metadata: Metadata = definePageMetadata({
  title: "Privacy Policy | The Photobooth Guy",
  description: "Privacy Policy for The Photobooth Guy. Learn how we collect, use, and protect your personal information in compliance with Canadian privacy laws (PIPEDA).",
  keywords: "privacy policy, data protection, PIPEDA, personal information, The Photobooth Guy",
  canonicalUrl: 'https://www.thephotoboothguy.ca/privacy-policy',
});

export default function PrivacyPolicy() {
  return <PrivacyPolicyContent />;
}


