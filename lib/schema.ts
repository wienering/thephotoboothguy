// Schema markup utilities for The Photobooth Guy

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "The Photobooth Guy",
  "description": "Professional photo booth rental services in Toronto. Premium equipment, custom templates, stunning backdrops, and exceptional service for your events.",
  "url": "https://www.thephotoboothguy.ca",
  "telephone": "647-378-5332",
  "email": "info@photoboothguys.ca",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Toronto",
    "addressRegion": "ON",
    "addressCountry": "CA"
  },
  "areaServed": {
    "@type": "City",
    "name": "Toronto"
  },
  "priceRange": "$$",
  "image": "https://www.thephotoboothguy.ca/logo.jpg"
};

export const localBusinessWithRatingSchema = (ratingValue: number = 5, reviewCount: number = 50) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "The Photobooth Guy",
  "description": "Professional photo booth rental services in Toronto. Premium equipment, custom templates, stunning backdrops, and exceptional service for your events.",
  "url": "https://www.thephotoboothguy.ca",
  "telephone": "647-378-5332",
  "email": "info@photoboothguys.ca",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Toronto",
    "addressRegion": "ON",
    "addressCountry": "CA"
  },
  "areaServed": {
    "@type": "City",
    "name": "Toronto"
  },
  "priceRange": "$$",
  "image": "https://www.thephotoboothguy.ca/logo.jpg",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": ratingValue.toString(),
    "reviewCount": reviewCount.toString(),
    "bestRating": "5",
    "worstRating": "1"
  }
});

// Deprecated: Use localBusinessWithRatingSchema instead to avoid duplicate LocalBusiness entries
export const aggregateRatingSchema = (ratingValue: number = 5, reviewCount: number = 50) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "The Photobooth Guy",
  "telephone": "647-378-5332",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Toronto",
    "addressRegion": "ON",
    "addressCountry": "CA"
  },
  "priceRange": "$$",
  "image": "https://www.thephotoboothguy.ca/logo.jpg",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": ratingValue.toString(),
    "reviewCount": reviewCount.toString(),
    "bestRating": "5",
    "worstRating": "1"
  }
});

export const reviewSchema = (author: string, reviewBody: string, ratingValue: number = 5, datePublished?: string) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "LocalBusiness",
    "name": "The Photobooth Guy",
    "telephone": "647-378-5332",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Toronto",
      "addressRegion": "ON",
      "addressCountry": "CA"
    },
    "priceRange": "$$",
    "image": "https://www.thephotoboothguy.ca/logo.jpg"
  },
  "author": {
    "@type": "Person",
    "name": author
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": ratingValue.toString(),
    "bestRating": "5",
    "worstRating": "1"
  },
  "reviewBody": reviewBody,
  ...(datePublished && { "datePublished": datePublished })
});

export const serviceSchema = (serviceName: string, description: string, price?: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "provider": {
    "@type": "LocalBusiness",
    "name": "The Photobooth Guy",
    "url": "https://www.thephotoboothguy.ca",
    "telephone": "647-378-5332",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Toronto",
      "addressRegion": "ON",
      "addressCountry": "CA"
    },
    "priceRange": "$$",
    "image": "https://www.thephotoboothguy.ca/logo.jpg"
  },
  "areaServed": {
    "@type": "City",
    "name": "Toronto"
  },
  "serviceType": "Photo Booth Rental",
  ...(price && {
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "CAD",
      "availability": "https://schema.org/InStock"
    }
  })
});

export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "The Photobooth Guy",
    "telephone": "647-378-5332",
    "email": "info@photoboothguys.ca",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Toronto",
      "addressRegion": "ON",
      "addressCountry": "CA"
    },
    "url": "https://www.thephotoboothguy.ca",
    "priceRange": "$$",
    "image": "https://www.thephotoboothguy.ca/logo.jpg"
  }
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "The Photobooth Guy",
  "url": "https://www.thephotoboothguy.ca",
  "logo": "https://www.thephotoboothguy.ca/logo.jpg",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "647-378-5332",
    "contactType": "Customer Service",
    "email": "info@photoboothguys.ca",
    "areaServed": "CA",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://www.facebook.com/photoboothguys.toronto",
    "https://www.instagram.com/photoboothguys.ca/"
  ]
};

