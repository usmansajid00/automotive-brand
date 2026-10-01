import { StockItem } from "@/types/content";

export const stockPageHero = {
  heading: "Stock",
  subheading: "Bespoke Builds for Sale",
  description:
    "Finished Forge Automotive builds for sale now, each with a full specification. Viewings by appointment in Yorkshire and the North West.",
  bgImage: "/images/stock.jpg",
};

export const stockList: StockItem[] = [
  {
    id: "fa004",
    code: "#FA004",
    name: "Volkswagen T6.1",
    price: "£48,750",
    status: "Available Soon",
    description:
      "This build will be available soon. Custom exterior styling, bespoke interior refinement, and forged wheels. Check back for updates.",
    image: {
      src: "/images/hero-03.jpg",
      alt: "Forge Volkswagen T6.1 #FA004",
      width: 1200,
      height: 800,
    },
    slug: "fa004",
  },
  {
    id: "fa001",
    code: "#FA001",
    name: "Defender 110 Bespoke",
    price: "Price On Application",
    status: "In Stock",
    description:
      "Satin grey against gloss black, widened arches and a stance built to be noticed. Ready for immediate acquisition.",
    image: {
      src: "/images/ordinary-defender.png",
      alt: "Forge Defender 110 Bespoke",
      width: 1200,
      height: 800,
    },
    slug: "fa001",
  },
  {
    id: "fa008",
    code: "#FA008",
    name: "G63 Atelier Edition",
    price: "Price On Application",
    status: "In Stock",
    description:
      "Satin green over tan leather, with bronze standing in wherever chrome used to be. Handcrafted perfection.",
    image: {
      src: "/images/ordinary-gwagon.png",
      alt: "Forge G63 Atelier Edition",
      width: 1200,
      height: 800,
    },
    slug: "fa008",
  },
  {
    id: "fa002",
    code: "#FA002",
    name: "911 Carrera Stealth",
    price: "Price On Application",
    status: "In Stock",
    description:
      "Satin black from crest to calliper, with every brightwork detail taken out of the picture. Performance tuned.",
    image: {
      src: "/images/ordinary-gt3rs.png",
      alt: "Forge 911 Carrera Stealth",
      width: 1200,
      height: 800,
    },
    slug: "fa002",
  },
];
