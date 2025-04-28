import Head from "next/head"

interface SeoHeadProps {
  title: string
  description: string
  canonicalUrl?: string
  ogType?: string
  ogImage?: string
  twitterCard?: string
  language: "en" | "id"
}

export default function SeoHead({
  title,
  description,
  canonicalUrl = "https://byteik.com",
  ogType = "website",
  ogImage = "/og-image.jpg",
  twitterCard = "summary_large_image",
  language,
}: SeoHeadProps) {
  const localizedCanonical = language === "en" ? `${canonicalUrl}/en` : `${canonicalUrl}/id`

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={localizedCanonical} />
      <meta name="language" content={language} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={localizedCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={language === "en" ? "en_US" : "id_ID"} />
      <meta property="og:site_name" content="Byteik" />

      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={localizedCanonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Alternate Language Links */}
      <link rel="alternate" hrefLang="en" href={`${canonicalUrl}/en`} />
      <link rel="alternate" hrefLang="id" href={`${canonicalUrl}/id`} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
    </Head>
  )
}
