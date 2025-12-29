// Schema markup utilities for The Photobooth Guy

const localBusinessData = {
  "name": "The Photobooth Guy",
  "image": "https://www.thephotoboothguy.ca/logo.jpg",
  "url": "https://www.thephotoboothguy.ca",
  "telephone": "647-378-5332",
  "email": "info@photoboothguys.ca",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "340 Mill Rd.",
    "addressLocality": "Etobicoke",
    "addressRegion": "ON",
    "postalCode": "M9C 1Y8",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 43.655,
    "longitude": -79.577
  },
  "areaServed": [
    { "@type": "City", "name": "Toronto" },
    { "@type": "City", "name": "Mississauga" },
    { "@type": "City", "name": "Brampton" },
    { "@type": "City", "name": "Vaughan" },
    { "@type": "City", "name": "Markham" }
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "07:00",
    "closes": "23:30"
  }
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  ...localBusinessData
};

export const localBusinessWithRatingSchema = (ratingValue: number = 5, reviewCount: number = 50) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  ...localBusinessData,
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
  ...localBusinessData,
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
    ...localBusinessData
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
    ...localBusinessData
  },
  "areaServed": [
    { "@type": "City", "name": "Toronto" },
    { "@type": "City", "name": "Mississauga" },
    { "@type": "City", "name": "Brampton" },
    { "@type": "City", "name": "Vaughan" }
  ],
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
    ...localBusinessData
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

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});
