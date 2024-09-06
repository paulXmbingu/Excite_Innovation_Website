import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Excite! Innovation Company",
  description: "Premier Digital Product Innovation Company that Specializes in UIUX Research, Design & Software Engineering",
  keywords: "UIUX, Digital Innovation, Product Design, Software Engineering, Research, Web Development, Mobile Apps, Prototyping",
  author: "Excite! Innovation Company",
  robots: "index, follow",
  language: "en-US",  // Language for the document
  charSet: "UTF-8",  // Character encoding

  // Open Graph (OG) for social sharing (Facebook, LinkedIn, etc.)
  og: {
    title: "Excite! Innovation Company - Digital Innovation",
    description: "We specialize in cutting-edge UI/UX research, design, and software engineering to transform your digital products.",
    type: "website",
    url: "https://excite-innovation.com",
    image: "/images/excite-og-image.png",  // Path to a promotional image
    locale: "en_US",
    site_name: "Excite! Innovation Company",
  },

  // Twitter Card metadata for better social sharing on Twitter
  twitter: {
    card: "summary_large_image",
    site: "@excite_company",  // Replace with your Twitter handle
    title: "Excite! Innovation Company",
    description: "Leading digital innovation in UI/UX design and software engineering.",
    image: "/images/excite-twitter-image.png",  // Path to a promotional image
    creator: "@excite_company",
  },

  // Additional Meta Tags for SEO
  canonical: "https://excite-innovation.com",  // Canonical URL
  alternates: {
    canonical: "https://excite-innovation.com",
    languages: {
      "en-US": "https://excite-innovation.com/en",
      "es-ES": "https://excite-innovation.com/es",  // Add language-specific URLs if available
    },
  },
  favicon: "/favicon.ico",  // Path to favicon
  manifest: "/site.webmanifest",  // PWA manifest (optional)

  // Dublin Core metadata (for academic or specialized uses)
  dc: {
    title: "Excite! Innovation Company",
    description: "Leading digital innovation in UI/UX research, design, and software engineering.",
    creator: "Excite! Innovation Team",
    subject: "Digital Product Innovation",
    publisher: "Excite! Innovation",
    format: "text/html",
    language: "en-US",
  },

  // Schema.org structured data (for rich snippets)
  schemaOrg: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Excite! Innovation Company",
    url: "https://excite-innovation.com",
    logo: "/images/excite-logo.png",
    sameAs: [
      "https://twitter.com/excite_company",
      "https://www.linkedin.com/company/excite-innovation",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-555-5555",  // Replace with actual number
      contactType: "Customer Support",
    },
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
