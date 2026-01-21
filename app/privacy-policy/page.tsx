import type { Metadata } from 'next';
import PrivacyPolicyContent from './PrivacyPolicyContent';

export const metadata: Metadata = {
  title: 'Privacy Policy | The Photobooth Guy',
  description: 'Privacy Policy for The Photobooth Guy. Learn how we collect, use, and protect your personal information in compliance with Canadian privacy laws (PIPEDA).',
  keywords: 'privacy policy, data protection, PIPEDA, personal information, The Photobooth Guy',
  alternates: {
    canonical: 'https://www.thephotoboothguy.ca/privacy-policy',
  },
};

export default function PrivacyPolicy() {
  return <PrivacyPolicyContent />;
}

