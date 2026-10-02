import { Manrope } from "next/font/google";
import "@/styles/globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = "https://banantarajoury.co.id";
const siteName = "Banantara Joury";
const description =
  "Banantara Joury menghadirkan integrasi produk dan jasa terpercaya melalui tiga divisi unggulan: CAD, ISD, dan MMD untuk efisiensi dan nilai tambah bisnis Anda.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Banantara Joury | Layanan Produk dan Jasa Terintegrasi",
    template: "%s | Banantara Joury",
  },
  description,
  applicationName: siteName,
  keywords: [
    "Banantara Joury",
    "layanan terintegrasi",
    "pengadaan produk",
    "jasa konsultasi teknis",
    "CAD",
    "ISD",
    "MMD",
    "RPL",
    "TKJ",
    "DKV",
    "GIM",
    "ANM",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  category: "business",
  icons: {
    icon: "/img/banantara.png",
    shortcut: "/img/banantara.png",
    apple: "/img/banantara.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: "Banantara Joury | Layanan Produk dan Jasa Terintegrasi",
    description,
    locale: "id_ID",
    images: [
      {
        url: "/img/banantara.png",
        width: 427,
        height: 327,
        alt: "Logo Banantara Joury",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Banantara Joury | Layanan Produk dan Jasa Terintegrasi",
    description,
    images: ["/img/banantara.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1B5E20",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/img/banantara.png`,
  description,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "+6285124432231",
      email: "halo@banantarajoury.co.id",
      areaServed: "ID",
      availableLanguage: ["id", "en"],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={manrope.variable}>
      <body className={manrope.className}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
