import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Byteik - Innovative Software Solutions from Indonesia",
  description:
    "Byteik combines cutting-edge software development with Indonesian heritage to create innovative digital solutions for businesses worldwide.",
  keywords:
    "software development, Indonesia tech, digital transformation, custom software, cloud solutions, Jakarta software company",
  openGraph: {
    title: "Byteik - Innovative Software Solutions from Indonesia",
    description: "Blending modern technology with Indonesian heritage to create innovative software solutions.",
    url: "https://byteik.com",
    siteName: "Byteik",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Byteik - Software Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Byteik - Innovative Software Solutions from Indonesia",
    description: "Blending modern technology with Indonesian heritage to create innovative software solutions.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://byteik.com",
    languages: {
      en: "https://byteik.com/en",
      id: "https://byteik.com/id",
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
