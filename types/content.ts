export interface ImageMeta {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface BrandLogo {
  name: string;
  src: string;
  width: number;
  height: number;
}

export interface PillarItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: ImageMeta;
  ctaText: string;
  ctaHref: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: ImageMeta;
  ctaText: string;
  ctaHref: string;
}

export interface TeaserSection {
  heading: string;
  text: string;
  buttonText: string;
  buttonHref: string;
  image: ImageMeta;
}

export interface BuildItem {
  id: string;
  code: string;
  name: string;
  description: string;
  image: ImageMeta;
  slug: string;
}

export interface StockItem {
  id: string;
  code: string;
  name: string;
  price: string;
  status: string;
  description: string;
  image: ImageMeta;
  slug: string;
}

export interface SiteMeta {
  title: string;
  description: string;
  themeColor: string;
  siteName: string;
  locale: string;
  url: string;
  phone: string;
  phoneTel: string;
}
