import { Metadata } from "next"

const siteConfig = {
  name: {
    en: "Jahr - Let everyone know",
    ar: "جهر - ليعلم الجميع"
  },
  url: "https://jahr.sa",
  ogImage: "https://jahr.sa/assets/images/social.png",
  description: {
    en: "Jahr is a Saudi company providing specialized marketing and business services, implementing strategies through innovative solutions.",
    ar: "جهر هي شركة سعودية تعمل على تقديم خدمات نوعية في مجال التسويق وخدمات الأعمال بهدف سد الفجوة الموجودة في السوق المحلي"
  },
  keywords: [
    "Marketing Agency",
    "Brand Strategy",
    "Digital Marketing",
    "Saudi Marketing",
    "Business Services",
    "Marketing Strategy",
    "Brand Development",
    "Marketing Consultation"
  ],
  authors: [
    {
      name: "Jahr",
      url: "https://jahr.sa",
    },
  ],
}

export function generateMetadata({ locale }: { locale: string }): Metadata {
  return {
    title: {
      default: siteConfig.name[locale as keyof typeof siteConfig.name],
      template: `%s | ${siteConfig.name[locale as keyof typeof siteConfig.name]}`,
    },
    description: siteConfig.description[locale as keyof typeof siteConfig.description],
    keywords: siteConfig.keywords,
    authors: siteConfig.authors,
    openGraph: {
      type: "website",
      locale: locale,
      alternateLocale: locale === "ar" ? "en" : "ar",
      url: siteConfig.url,
      title: siteConfig.name[locale as keyof typeof siteConfig.name],
      description: siteConfig.description[locale as keyof typeof siteConfig.description],
      siteName: siteConfig.name[locale as keyof typeof siteConfig.name],
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name[locale as keyof typeof siteConfig.name],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name[locale as keyof typeof siteConfig.name],
      description: siteConfig.description[locale as keyof typeof siteConfig.description],
      images: [siteConfig.ogImage],
      creator: "@JahrKSA",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  name: "Jahr",
  description: "A Saudi marketing agency providing specialized marketing and business services",
  url: "https://jahr.sa",
  logo: "https://jahr.sa/assets/img/logo.png",
  sameAs: [
    "https://twitter.com/JahrKSA",
    "https://www.instagram.com/jahrksa/",
    "https://www.snapchat.com/add/jahrksa"
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "SA",
    addressRegion: "Riyadh"
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+966-55-555-5555",
    contactType: "customer service",
    email: "info@jahr.sa",
    areaServed: "SA",
    availableLanguage: ["Arabic", "English"]
  },
  offers: {
    "@type": "Offer",
    serviceType: [
      "Marketing Strategy",
      "Brand Strategy",
      "Intellectual Property Management",
      "Third-Party Marketing",
      "Relationship Management",
      "Public Relations"
    ]
  }
} 