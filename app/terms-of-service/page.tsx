import type { Metadata } from 'next';
import TermsOfServiceContent from './TermsOfServiceContent';

export const metadata: Metadata = {
  title: 'Terms of Service | The Photobooth Guy',
  description: 'Terms of Service Agreement for The Photobooth Guy. Review our terms and conditions for photo booth rental services in Toronto and the GTA.',
  keywords: 'terms of service, terms and conditions, photo booth rental agreement, The Photobooth Guy',
  alternates: {
    canonical: 'https://www.thephotoboothguy.ca/terms-of-service',
  },
};

export default function TermsOfService() {
  return <TermsOfServiceContent />;
}


