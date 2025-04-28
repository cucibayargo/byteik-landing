export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Byteik",
          url: "https://byteik.com",
          logo: "https://byteik.com/logo.png",
          sameAs: [
            "https://www.facebook.com/byteik",
            "https://www.twitter.com/byteik",
            "https://www.linkedin.com/company/byteik",
            "https://www.instagram.com/byteik",
          ],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+62-21-5678-9012",
            contactType: "customer service",
            areaServed: ["ID", "SG", "MY", "TH"],
            availableLanguage: ["en", "id"],
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "Jl. Sudirman No. 123",
            addressLocality: "Jakarta",
            addressRegion: "DKI Jakarta",
            postalCode: "12190",
            addressCountry: "ID",
          },
          description:
            "Byteik combines cutting-edge software development with Indonesian heritage to create innovative digital solutions for businesses worldwide.",
        }),
      }}
    />
  )
}
