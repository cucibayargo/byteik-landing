"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Code,
  Globe,
  Layers,
  Menu,
  MonitorSmartphone,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import StructuredData from "./components/structured-data";
import ServiceSchema from "./components/service-schema";
import SeoHead from "./components/seo-head";
import HeroImg from "../public/hero.jpg";
import AboutUsImg from "../public/about-us.jpg";
import WarehouseSystemImg from "../public/warehouse-system.png";

// Language content
const content = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      team: "Team",
      contact: "Contact",
    },
    hero: {
      title: "Innovative Software Solutions",
      subtitle: "Blending modern technology with Indonesian heritage",
      cta: "Get Started",
      secondary: "Learn More",
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive software solutions for your business",
      items: [
        {
          icon: <Code className="h-8 w-8" />,
          title: "Custom Development",
          description:
            "Tailored software solutions designed to meet your specific business needs",
        },
        {
          icon: <MonitorSmartphone className="h-8 w-8" />,
          title: "Landing Page",
          description:
            "Perkenalkan bisnis Anda menggunakan landing page yang menarik",
        },
        {
          icon: <Layers className="h-8 w-8" />,
          title: "Digital Transformation",
          description:
            "Modernize your business with cutting-edge digital solutions",
        },
      ],
    },
    about: {
      title: "About Byteik",
      subtitle: "Where technology meets tradition",
      description:
        "Founded in Yogyakarta, Byte combines cutting-edge software development to help your business grow. In addition, we also have POS products to help laundry business owners digitize and grow their businesses.",
      values:
        "Our approach is inspired by the patience and precision of Batik craftsmanship - creating software with attention to detail and producing systems that are useful to many people.",
    },
    team: {
      title: "Our Team",
      subtitle: "Meet the experts behind Byteik",
      members: [
        {
          name: "Arif Ramadhan",
          role: "Founder",
          bio: "5+ years in software development and digital transformation",
        },
        {
          name: "M Saiful Abdulah",
          role: "Founder",
          bio: "Expert in server and backend logic",
        },
      ],
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Ready to transform your business?",
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send Message",
      address: "Banguntapan, Bantul, DI Yogyakarta, Indonesia",
      phone: "+62 852 8381 1719",
      ourEmail: "info@byteik.com",
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Byteik. All rights reserved.`,
      links: {
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        careers: "Careers",
      },
    },
  },
  id: {
    nav: {
      home: "Beranda",
      services: "Layanan",
      about: "Tentang",
      team: "Tim",
      contact: "Kontak",
    },
    hero: {
      title: "Solusi Perangkat Lunak Inovatif",
      subtitle: "Memadukan teknologi modern dengan warisan Indonesia",
      cta: "Mulai Sekarang",
      secondary: "Pelajari Lebih Lanjut",
    },
    services: {
      title: "Layanan Kami",
      subtitle: "Solusi perangkat lunak komprehensif untuk bisnis Anda",
      items: [
        {
          icon: <Code className="h-8 w-8" />,
          title: "Pengembangan Kustom",
          description:
            "Solusi perangkat lunak yang disesuaikan dengan kebutuhan bisnis Anda",
        },
        {
          icon: <MonitorSmartphone className="h-8 w-8" />,
          title: "Solusi Cloud",
          description:
            "Infrastruktur cloud yang aman dan dapat diskalakan untuk aplikasi Anda",
        },
        {
          icon: <Layers className="h-8 w-8" />,
          title: "Transformasi Digital",
          description: "Modernisasi bisnis Anda dengan solusi digital terkini",
        },
      ],
    },
    about: {
      title: "Tentang Byteik",
      subtitle: "Di mana teknologi bertemu tradisi",
      description:
        "Didirikan di Yogyakarta, Byte menggabungkan pengembangan perangkat lunak mutakhir untuk membatu bisnis anda berkembang. Selain itu kami juga memiliki produk POS untuk membantu para pemilik bisnis laundry mendigitalisasi dan mengembakan usaha mereka.",
      values:
        "Pendekatan kami terinspirasi oleh kesabaran dan ketelitian pengerjaan Batik - menciptakan perangkat lunak dengan perhatian terhadap detail dan menghasilkan sistem yang berguna untuk banyak orang.",
    },
    team: {
      title: "Tim Kami",
      subtitle: "Temui para ahli di balik Byteik",
      members: [
        {
          name: "Arif Ramadhan",
          role: "Pendiri",
          bio: "15+ tahun dalam pengembangan perangkat lunak dan transformasi digital",
        },
        {
          name: "M Saiful Abdulah",
          role: "Pendiri",
          bio: "Ahli dalam arsitektur cloud dan teknologi baru",
        },
      ],
    },
    contact: {
      title: "Hubungi Kami",
      subtitle: "Siap untuk mentransformasi bisnis Anda?",
      name: "Nama",
      email: "Email",
      message: "Pesan",
      submit: "Kirim Pesan",
      address: "Banguntapan, Bantul, DI Yogyakarta, Indonesia",
      phone: "+62 852 8381 1719",
      ourEmail: "info@byteik.com",
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Byteik. Hak cipta dilindungi undang-undang.`,
      links: {
        privacy: "Kebijakan Privasi",
        terms: "Syarat Layanan",
        careers: "Karir",
      },
    },
  },
};

export default function LandingPage() {
  const [language, setLanguage] = useState<"en" | "id">("en");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = content[language];

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "id" : "en");
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 overflow-hidden">
      <StructuredData />
      <ServiceSchema />
      <SeoHead
        title={
          language === "en"
            ? "Byteik - Innovative Software Solutions"
            : "Byteik - Solusi Perangkat Lunak Inovatif"
        }
        description={
          language === "en"
            ? "Byteik combines cutting-edge software development with Indonesian heritage to create innovative digital solutions for businesses worldwide."
            : "Byteik menggabungkan pengembangan perangkat lunak mutakhir dengan warisan Indonesia untuk menciptakan solusi digital inovatif untuk bisnis di seluruh dunia."
        }
        language={language}
      />
      <Head>
        <meta
          name="description"
          content={
            language === "en"
              ? "Byteik combines cutting-edge software development with Indonesian heritage to create innovative digital solutions for businesses worldwide."
              : "Byteik menggabungkan pengembangan perangkat lunak mutakhir dengan warisan Indonesia untuk menciptakan solusi digital inovatif untuk bisnis di seluruh dunia."
          }
        />
      </Head>
      {/* Batik-inspired background pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/batik-pattern.png')] bg-repeat opacity-10"></div>
      </div>

      {/* Navbar */}
      <header className="z-10 border-b border-gray-800 bg-gray-950/80 backdrop-blur-md fixed top-0 w-full">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="font-bold text-xl">B</span>
              </div>
              <span className="font-bold text-xl">Byteik</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#home"
                className="text-sm font-medium hover:text-purple-400 transition-colors"
              >
                {t.nav.home}
              </Link>
              <Link
                href="#services"
                className="text-sm font-medium hover:text-purple-400 transition-colors"
              >
                {t.nav.services}
              </Link>
              <Link
                href="#projects"
                className="text-sm font-medium hover:text-purple-400 transition-colors"
              >
                {language === "en" ? "Projects" : "Proyek"}
              </Link>
              <Link
                href="#testimonials"
                className="text-sm font-medium hover:text-purple-400 transition-colors"
              >
                {language === "en" ? "Testimonials" : "Testimoni"}
              </Link>
              <Link
                href="#about"
                className="text-sm font-medium hover:text-purple-400 transition-colors"
              >
                {t.nav.about}
              </Link>
              <Link
                href="#team"
                className="text-sm font-medium hover:text-purple-400 transition-colors"
              >
                {t.nav.team}
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium hover:text-purple-400 transition-colors"
              >
                {t.nav.contact}
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleLanguage}
                className="rounded-full hover:bg-gray-800"
                aria-label={
                  language === "en"
                    ? "Switch to Bahasa Indonesia"
                    : "Switch to English"
                }
              >
                <Globe className="h-5 w-5" />
                <span className="ml-2 text-xs font-medium">
                  {language.toUpperCase()}
                </span>
              </Button>

              <Button
                variant="default"
                className="hidden md:flex bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                {language === "en" ? "Contact Us" : "Hubungi Kami"}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-gray-950/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-end">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="flex flex-col items-center justify-center h-[80vh] space-y-8">
              <Link
                href="#home"
                className="text-2xl font-medium hover:text-purple-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.home}
              </Link>
              <Link
                href="#services"
                className="text-2xl font-medium hover:text-purple-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.services}
              </Link>
              <Link
                href="#projects"
                className="text-2xl font-medium hover:text-purple-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {language === "en" ? "Projects" : "Proyek"}
              </Link>
              <Link
                href="#testimonials"
                className="text-2xl font-medium hover:text-purple-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {language === "en" ? "Testimonials" : "Testimoni"}
              </Link>
              <Link
                href="#about"
                className="text-2xl font-medium hover:text-purple-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.about}
              </Link>
              <Link
                href="#team"
                className="text-2xl font-medium hover:text-purple-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.team}
              </Link>
              <Link
                href="#contact"
                className="text-2xl font-medium hover:text-purple-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.contact}
              </Link>
              <Button
                variant="default"
                className="mt-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                {language === "en" ? "Contact Us" : "Hubungi Kami"}
              </Button>
            </nav>
          </div>
        </div>
      )}

      <main>
        {/* Hero Section */}
        <section id="home" className="relative pt-40 pb-32 overflow-hidden">
          <div className="container mx-auto px-4">
            <section className="container mx-auto px-4">
              <article className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-xl"
                >
                  <div className="inline-block px-4 py-1 mb-6 rounded-full bg-gray-800/50 border border-gray-700">
                    <span className="text-sm font-medium text-purple-400">
                      Byteik
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
                    {t.hero.title}
                  </h1>
                  <p className="text-xl text-gray-300 mb-8">
                    {t.hero.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                      {t.hero.cta}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      className="border-gray-700 hover:bg-gray-800"
                    >
                      {t.hero.secondary}
                    </Button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <div className="relative h-[400px] w-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl"></div>
                    <div className="absolute inset-0 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800">
                      <div className="absolute inset-0 bg-[url('/batik-pattern.png')] bg-repeat opacity-5"></div>
                      <Image
                        src={HeroImg}
                        alt="Byteik Software Solutions - Blending modern technology with Indonesian heritage"
                        width={500}
                        height={400}
                        priority
                        className="w-full h-full object-cover mix-blend-luminosity opacity-80"
                      />
                    </div>

                    {/* Animated elements */}
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, 0],
                      }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 5,
                        ease: "easeInOut",
                      }}
                      className="absolute -top-8 right-12 w-20 h-20 bg-purple-500/20 backdrop-blur-md rounded-lg border border-purple-500/30"
                    />
                    <motion.div
                      animate={{
                        y: [0, 15, 0],
                        rotate: [0, -8, 0],
                      }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 7,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                      className="absolute -bottom-10 left-16 w-16 h-16 bg-blue-500/20 backdrop-blur-md rounded-lg border border-blue-500/30"
                    />
                  </div>
                </motion.div>
              </article>
            </section>
          </div>

          {/* Batik-inspired decorative element */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-gray-900/50 relative">
          <div className="absolute inset-0 bg-[url('/batik-pattern.png')] bg-repeat opacity-5"></div>
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  {t.services.title}
                </h1>
                <p className="text-xl text-gray-400">{t.services.subtitle}</p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {t.services.items.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:bg-gray-800/80 transition-colors group"
                >
                  <div className="mb-6 p-4 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-lg inline-block">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 relative">
          <div className="container mx-auto px-4">
            <section className="container mx-auto px-4">
              <article className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-gray-800">
                    <div className="absolute inset-0 bg-[url('/batik-pattern.png')] bg-repeat opacity-10"></div>
                    <Image
                      src={AboutUsImg}
                      alt="About Byteik"
                      width={500}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
                  </div>

                  {/* Batik-inspired decorative element */}
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl"></div>
                  <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl"></div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {t.about.title}
                  </h2>
                  <p className="text-xl text-purple-400 mb-6">
                    {t.about.subtitle}
                  </p>
                  <p className="text-gray-300 mb-6">{t.about.description}</p>
                  <p className="text-gray-400">{t.about.values}</p>

                  <div className="mt-8 p-6 bg-gray-800/30 border border-gray-700 rounded-xl">
                    <div className="flex items-center space-x-4">
                      <div className="w-1 h-12 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
                      <p className="text-gray-300 italic">
                        "Blending the precision of code with the artistry of
                        Batik - creating digital experiences that honor
                        tradition while embracing innovation."
                      </p>
                    </div>
                  </div>
                </motion.div>
              </article>
            </section>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-24 bg-gray-900/50 relative">
          <div className="absolute inset-0 bg-[url('/batik-pattern.png')] bg-repeat opacity-5"></div>
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {t.team.title}
                </h2>
                <p className="text-xl text-gray-400">{t.team.subtitle}</p>
              </motion.div>
            </div>

            <div className="grid md:flex md:justify-center gap-8">
              {t.team.members.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden group md:max-w-[400px]"
                >
                  <div className="h-64 relative">
                    <Image
                      src={`/placeholder.svg?height=300&width=400`}
                      alt={member.name}
                      width={400}
                      height={300}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-purple-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-purple-400 mb-3">{member.role}</p>
                    <p className="text-gray-400">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Showcase Section */}
        <section id="projects" className="py-24 relative">
          <div className="absolute inset-0 bg-[url('/batik-pattern.png')] bg-repeat opacity-5"></div>
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {language === "en" ? "Project Showcase" : "Pameran Proyek"}
                </h2>
                <p className="text-xl text-gray-400">
                  {language === "en"
                    ? "Explore our latest work and innovative solutions"
                    : "Jelajahi karya terbaru dan solusi inovatif kami"}
                </p>
              </motion.div>
            </div>

            <div className="grid md:flex gap-4 justify-center">
              {[
                {
                  title: language === "en" ? "Cucibayargo" : "Cucibayargo",
                  description:
                    language === "en"
                      ? "A POS (Point Of Sales) system for laundry business"
                      : "Sistem Kasir untuk bisnis laundry ",
                  image: "/placeholder.svg?height=300&width=400",
                  tech: ["React", "Node.js", "Supbase"],
                  url: "https://cucibayargo.com/",
                },
                {
                  title:
                    language === "en"
                      ? "Warehouse Management System (ERP)"
                      : "Sistem Pengelolaan manajemen gudang",
                  description:
                    language === "en"
                      ? "Assisting in the process of processing goods to sales from the warehouse"
                      : "Membantu proses pengolahan barang hingga penjualan dari gudang",
                  image: WarehouseSystemImg,
                  tech: ["React", "Golang", "Supabase"],
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden h-full flex flex-col w-full sm:w-[400px] ">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={`${project.title} - Software project by Byteik`}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>

                      {/* Batik-inspired decorative element */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
                    </div>

                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-4 flex-grow">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 text-xs rounded-full bg-gray-700/50 text-purple-300 border border-purple-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {project.url && (
                        <Button
                          variant="outline"
                          className="w-full border-gray-700 hover:bg-gray-700 hover:text-white transition-colors"
                          onClick={() => {
                            window.open(project.url);
                          }}
                        >
                          {language === "en" ? "View Project" : "Lihat Proyek"}
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* <div className="flex justify-center mt-12">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                {language === "en" ? "View All Projects" : "Lihat Semua Proyek"}
              </Button>
            </div> */}
          </div>
        </section>

        {/* Client Feedback Section */}
        <section id="testimonials" className="py-24 bg-gray-900/50 relative">
          <div className="absolute inset-0 bg-[url('/batik-pattern.png')] bg-repeat opacity-5"></div>
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {language === "en" ? "Client Feedback" : "Umpan Balik Klien"}
                </h2>
                <p className="text-xl text-gray-400">
                  {language === "en"
                    ? "What our clients say about working with us"
                    : "Apa yang klien kami katakan tentang bekerja dengan kami"}
                </p>
              </motion.div>
            </div>

            <div className="grid md:flex md:justify-center">
              {[
                {
                  name: language === "en" ? "Sarah Johnson" : "Sarah Johnson",
                  company:
                    language === "en" ? "TechGlobal Inc." : "TechGlobal Inc.",
                  image: "/placeholder.svg?height=100&width=100",
                  feedback:
                    language === "en"
                      ? "Byteik transformed our outdated systems into a streamlined digital solution. Their understanding of both technology and our business needs was impressive."
                      : "Byteik mengubah sistem lama kami menjadi solusi digital yang efisien. Pemahaman mereka tentang teknologi dan kebutuhan bisnis kami sangat mengesankan.",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 h-full flex flex-col relative md:max-w-[400px]">
                    {/* Batik-inspired decorative element */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500/30 via-transparent to-blue-500/30"></div>

                    <div className="flex items-center mb-4">
                      <div className="relative mr-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500/30">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={`${testimonial.name} - Client testimonial`}
                            width={100}
                            height={100}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-white">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-purple-400">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-5 w-5 ${
                            i < testimonial.rating
                              ? "text-yellow-400"
                              : "text-gray-600"
                          }`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <p className="text-gray-300 italic flex-grow">
                      "{testimonial.feedback}"
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 relative">
          <div className="container mx-auto px-4">
            <section className="container mx-auto px-4">
              <article className="grid md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {t.contact.title}
                  </h2>
                  <p className="text-xl text-gray-400 mb-8">
                    {t.contact.subtitle}
                  </p>

                  <form className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-400 mb-2"
                      >
                        {t.contact.name}
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-400 mb-2"
                      >
                        {t.contact.email}
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-400 mb-2"
                      >
                        {t.contact.message}
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      ></textarea>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                      {t.contact.submit}
                    </Button>
                  </form>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-col justify-center"
                >
                  <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-gray-800 mb-8">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7905.707975449173!2d110.41516414307826!3d-7.805277989390856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a574dd8bc729d%3A0x71f3f6bf66b2f5af!2sPelem%2C%20Baturetno%2C%20Banguntapan%2C%20Bantul%20Regency%2C%20Special%20Region%20of%20Yogyakarta!5e0!3m2!1sen!2sid!4v1745802253421!5m2!1sen!2sid"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="grayscale contrast-125 mix-blend-luminosity"
                    ></iframe>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent pointer-events-none"></div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gray-800/50 border border-gray-700 rounded-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-purple-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">Address</h3>
                        <p className="text-gray-400">{t.contact.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gray-800/50 border border-gray-700 rounded-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-purple-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">Phone</h3>
                        <p className="text-gray-400">{t.contact.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gray-800/50 border border-gray-700 rounded-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-purple-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">Email</h3>
                        <p className="text-gray-400">{t.contact.ourEmail}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </article>
            </section>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="relative w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-xl">B</span>
                </div>
                <span className="font-bold text-xl">Byteik</span>
              </Link>
              <p className="text-gray-400 mb-6 max-w-md">
                Blending modern technology with Indonesian heritage to create
                innovative software solutions for businesses worldwide.
              </p>
              <div className="flex space-x-4">
                {/* <a
                  href="#"
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a> */}
                <a
                  href="#"
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                  aria-label="Tiktok"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#home"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {t.nav.home}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {t.nav.services}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#projects"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {language === "en" ? "Projects" : "Proyek"}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#testimonials"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {language === "en" ? "Testimonials" : "Testimoni"}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {t.nav.about}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#team"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {t.nav.team}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {t.nav.contact}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {t.footer.links.privacy}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {t.footer.links.terms}
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {t.footer.links.careers}
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">{t.footer.copyright}</p>
            <div className="mt-4 md:mt-0 flex items-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="text-gray-400 hover:text-white"
              >
                <Globe className="h-4 w-4 mr-2" />
                {language === "en" ? "Bahasa Indonesia" : "English"}
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
