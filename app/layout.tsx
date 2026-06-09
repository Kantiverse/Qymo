import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const SITE_URL = "https://qymo.ng";
const TITLE = "Qymo — A solutions studio that ships";
const DESCRIPTION =
  "Qymo is a Nigerian product studio that designs, builds and ships real software solutions. We are the makers of Haja, a marketplace for local stores, services and used deals.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — Qymo",
  },
  description: DESCRIPTION,
  applicationName: "Qymo",
  keywords: [
    "Qymo",
    "product studio",
    "software studio Nigeria",
    "solutions studio",
    "app development Nigeria",
    "Haja",
    "marketplace builder",
    "MVP development",
    "product design",
    "web and mobile development",
  ],
  authors: [{ name: "Qymo" }],
  creator: "Qymo",
  publisher: "Qymo",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Qymo",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#fdf6ec",
  width: "device-width",
  initialScale: 1,
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Qymo",
  url: SITE_URL,
  description: DESCRIPTION,
  email: "hello@qymo.ng",
  logo: `${SITE_URL}/mark.svg`,
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "NG",
    },
  },
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "SoftwareApplication",
      name: "Haja",
      applicationCategory: "ShoppingApplication",
      operatingSystem: "Web",
      url: "https://haja.shop",
      description:
        "Haja is a Nigerian marketplace for products, local stores, services and nearby used deals, built and run by Qymo.",
    },
  },
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Qymo",
  description: DESCRIPTION,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
        {children}
      </body>
    </html>
  );
}
