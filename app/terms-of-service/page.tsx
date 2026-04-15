import type { Metadata } from 'next';
import { definePageMetadata } from '@/lib/page-metadata';
import TermsOfServiceContent from './TermsOfServiceContent';

export const metadata: Metadata = definePageMetadata({
  title: "Terms of Service | The Photobooth Guy",
  description: "Terms of Service Agreement for The Photobooth Guy. Review our terms and conditions for photo booth rental services in Toronto and the GTA.",
  keywords: "terms of service, terms and conditions, photo booth rental agreement, The Photobooth Guy",
  canonicalUrl: 'https://www.thephotoboothguy.ca/terms-of-service',
});

export default function TermsOfService() {
  return <TermsOfServiceContent />;
}


