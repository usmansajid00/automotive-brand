import { BrandLogo } from "@/types/content";

export const siteMetadata = {
  title: "Bespoke Vehicle Builds & Styling | Forge Automotive",
  description:
    "A luxury automotive atelier for bespoke styling, performance and craftsmanship — one-off Defender, G63, Range Rover, Urus and 911 builds.",
  themeColor: "#0c0c0c",
  siteName: "Forge Automotive",
  locale: "en_GB",
  url: "https://forgeautomotive.co.uk/",
  phone: "+44 333 041 7965",
  phoneTel: "tel:+443330417965",
};

export const headerNavigation = {
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Builds", href: "/builds" },
    { label: "Stock", href: "/stock" },
    { label: "Contact", href: "/contact" },
  ],
  socialLinks: [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/forgeautomotive",
      icon: "linkedin",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/forgeautomotive",
      icon: "instagram",
    },
    {
      name: "Facebook",
      href: "https://facebook.com/forgeautomotive",
      icon: "facebook",
    },
  ],
};

export const brandLogos: BrandLogo[] = [
  { name: "Aston Martin", src: "/images/brands/aston-martin.svg", width: 120, height: 60 },
  { name: "Audi", src: "/images/brands/audi.svg", width: 120, height: 60 },
  { name: "Bentley", src: "/images/brands/bentley.svg", width: 120, height: 60 },
  { name: "Jaguar", src: "/images/brands/jaguar.svg", width: 120, height: 60 },
  { name: "Lamborghini", src: "/images/brands/lamborghini.svg", width: 120, height: 60 },
  { name: "Land Rover", src: "/images/brands/land-rover.svg", width: 120, height: 60 },
  { name: "Lotus", src: "/images/brands/lotus.svg", width: 120, height: 60 },
  { name: "Lucid", src: "/images/brands/lucid.svg", width: 120, height: 60 },
  { name: "Maserati", src: "/images/brands/maserati.svg", width: 120, height: 60 },
  { name: "McLaren", src: "/images/brands/mclaren.svg", width: 120, height: 60 },
  { name: "Mercedes", src: "/images/brands/mercedes.svg", width: 120, height: 60 },
  { name: "Polestar", src: "/images/brands/polestar.svg", width: 120, height: 60 },
  { name: "Porsche", src: "/images/brands/porsche.svg", width: 120, height: 60 },
  { name: "Rolls Royce", src: "/images/brands/rolls-royce.svg", width: 120, height: 60 },
];

export const footerData = {
  backToTop: "Back to Top",
  links: [
    { label: "Home", href: "/" },
    { label: "Builds", href: "/builds" },
    { label: "Stock", href: "/stock" },
    { label: "Contact", href: "/contact" },
    { label: "Cookies", href: "/cookies" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Sitemap", href: "/sitemap" },
  ],
  copyright: "© Forge Automotive. All rights reserved.",
};
