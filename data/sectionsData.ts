import { PillarItem, ServiceItem, ImageMeta } from "@/types/content";
import { brandLogos } from "./navigationData";

export const heroData = {
  eyebrow: "We don't modify vehicles. We build them for you.",
  title: "For Those Who Refuse Ordinary",
  subtext:
    "A luxury automotive atelier for bespoke styling, performance and craftsmanship.",
  images: [
    {
      src: "/images/hero-01.jpg",
      alt: "Matte black Lamborghini",
      width: 216,
      height: 270,
    },
    {
      src: "/images/hero-02.jpg",
      alt: "Forge Lambo Interior",
      width: 216,
      height: 270,
    },
    {
      src: "/images/hero-03.jpg",
      alt: "Man in black hoodie",
      width: 216,
      height: 270,
    },
    {
      src: "/images/hero-04.jpg",
      alt: "Two technicians meticulously applying PPF",
      width: 216,
      height: 270,
    },
    {
      src: "/images/hero-05.jpg",
      alt: "Rear view of a Porsche GT3RS",
      width: 216,
      height: 270,
    },
    {
      src: "/images/hero-06.jpg",
      alt: "Craftsman applying PPF",
      width: 216,
      height: 270,
    },
    {
      src: "/images/hero-07.jpg",
      alt: "Land Rover Defender in the workshop",
      width: 216,
      height: 270,
    },
    {
      src: "/images/hero-08.jpg",
      alt: "McLaren on grass",
      width: 216,
      height: 270,
    },
    {
      src: "/images/hero-09.jpg",
      alt: "Audio R8 in orange outside the warehouse",
      width: 216,
      height: 270,
    },
    {
      src: "/images/hero-10.jpg",
      alt: "Range Rover getting a new wrap",
      width: 216,
      height: 270,
    },
  ] as ImageMeta[],
};

export const approachData = {
  title: "Our Approach To Every Build",
  image: {
    src: "/images/approach-stitching.jpg",
    alt: "Hands meticulously stitching red leather",
    width: 2880,
    height: 3600,
  } as ImageMeta,
  brands: brandLogos,
  paragraph:
    "Every decision is intentional, every detail has purpose based on your taste, your lifestyle, and your standards.",
  ctaText: "Start Your Project",
  ctaHref: "/contact",
};

export const pillarItems: PillarItem[] = [
  {
    id: "identity",
    number: "01 / 03",
    title: "Identity",
    description:
      "Every build begins with the person behind the wheel, shaped around their individual taste, lifestyle, presence and personal sense of identity on the road.",
    image: {
      src: "/images/pillar-identity.jpg",
      alt: "Forge Identity – Spirit of Ecstasy",
      width: 2880,
      height: 2234,
    },
    ctaText: "Start Your Project",
    ctaHref: "/contact",
  },
  {
    id: "insight",
    number: "02 / 03",
    title: "Insight",
    description:
      "Exterior, interior and performance are brought together through a considered, detail-led approach, creating one complete and fully resolved vision.",
    image: {
      src: "/images/pillar-insight.jpg",
      alt: "Forge Intent – Custom Carbon Fibre",
      width: 2880,
      height: 2174,
    },
    ctaText: "Start Your Project",
    ctaHref: "/contact",
  },
  {
    id: "cohesion",
    number: "03 / 03",
    title: "Cohesion",
    description:
      "Every modification is chosen with precision, ensuring each detail adds purpose, balance and distinction to the final bespoke automotive build.",
    image: {
      src: "/images/pillar-cohesion.jpg",
      alt: "Forge Cohesion – Backend McLaren",
      width: 2880,
      height: 2218,
    },
    ctaText: "Start Your Project",
    ctaHref: "/contact",
  },
];

export const statementData = {
  headline:
    "A vehicle should say something before it moves. Every line, material, and finish is considered.",
  paragraph:
    "Our services are shaped with intent, from exterior styling and interior refinement to performance upgrades, detailing and bespoke finishes; each detail sharpens the vehicle’s character without overpowering it.",
  image: {
    src: "/images/statement-closeup.jpg",
    alt: "Close-up",
    width: 540,
    height: 960,
  } as ImageMeta,
  ctaText: "Start Your Project",
  ctaHref: "/contact",
};

export const serviceItems: ServiceItem[] = [
  {
    id: "bodystyling",
    number: "01",
    title: "Bodystyling",
    description:
      "From aero styling to carbon details and exterior refinement, bodywork is designed to change the vehicle’s presence without compromising its original character.",
    image: {
      src: "/images/service-bodywork.jpg",
      alt: "Forge Service: Bodywork",
      width: 1254,
      height: 1254,
    },
    ctaText: "Start your project",
    ctaHref: "/contact",
  },
  {
    id: "interior",
    number: "02",
    title: "Interior",
    description:
      "Material, stitching, trim and finish are selected to create an interior that feels personal, tactile and composed. We turn the cabin into a space of identity, comfort and control.",
    image: {
      src: "/images/service-interior.jpg",
      alt: "Forge Service: Interior",
      width: 1440,
      height: 1800,
    },
    ctaText: "Start your project",
    ctaHref: "/contact",
  },
  {
    id: "wheels",
    number: "03",
    title: "Wheels",
    description:
      "Bespoke wheel upgrades designed to enhance stance, proportion and road presence, with fitments selected to complement the vehicle’s character and performance.",
    image: {
      src: "/images/service-wheels.jpg",
      alt: "Forge Service: Wheels",
      width: 1440,
      height: 1800,
    },
    ctaText: "Start your project",
    ctaHref: "/contact",
  },
  {
    id: "lighting",
    number: "04",
    title: "Lighting",
    description:
      "Lighting gives a vehicle its expression. From subtle tinting to signature illumination and refined visual details, we use light to sharpen character, presence and atmosphere.",
    image: {
      src: "/images/service-lighting.jpg",
      alt: "Forge Service: Lighting",
      width: 1440,
      height: 1800,
    },
    ctaText: "Start your project",
    ctaHref: "/contact",
  },
  {
    id: "exhaust",
    number: "05",
    title: "Exhaust",
    description:
      "Exhaust upgrades are chosen for tone, response and presence. Not noise for the sake of noise, but a sound profile that gives the vehicle more character and depth.",
    image: {
      src: "/images/service-exhaust.jpg",
      alt: "Forge Service: Exhaust",
      width: 1440,
      height: 1800,
    },
    ctaText: "Start your project",
    ctaHref: "/contact",
  },
  {
    id: "protection",
    number: "06",
    title: "Protection",
    description:
      "Paint protective film solutions that preserve the finish of the vehicle while allowing for satin finishes, coloured films and full visual transformation.",
    image: {
      src: "/images/service-wraps.jpg",
      alt: "Forge Service: Wraps / PPF",
      width: 1440,
      height: 1800,
    },
    ctaText: "Start your project",
    ctaHref: "/contact",
  },
];

export const ordinaryData = {
  italicWord: "Ordinary",
  heading: "Ends Here",
  subtext:
    "Complete expressions of taste, intent and individuality, shaped through detail, restraint and presence.",
  images: [
    {
      src: "/images/ordinary-gwagon.png",
      alt: "Mercedes G wagon eagle eye POV",
      width: 708,
      height: 1402,
    },
    {
      src: "/images/ordinary-gt3rs.png",
      alt: "Porsche 992 GT3RS in Red with carbon fibre modifications",
      width: 708,
      height: 1402,
    },
    {
      src: "/images/ordinary-defender.png",
      alt: "Landrover Defender 110",
      width: 707,
      height: 1402,
    },
  ] as ImageMeta[],
};

export const buildsTeaserData = {
  heading: "Previous Builds",
  text: "A collection of previous bespoke builds, shaped by craft, character and the people behind the wheel.",
  buttonText: "Explore Builds",
  buttonHref: "/builds",
  image: {
    src: "/images/builds.png",
    alt: "A Forge collection of five custom vehicles, including a red Porsche 911 GT3, on a dark, reflective floor in a studio setting.",
    width: 1520,
    height: 2688,
  } as ImageMeta,
};

export const stockTeaserData = {
  heading: "Available Stock",
  text: "Builds available for purchase, refined with intent, engineered with purpose, and ready to make a statement.",
  buttonText: "Browse Stock",
  buttonHref: "/stock",
  image: {
    src: "/images/stock.jpg",
    alt: "A custom Forge Porsche 911 GT3, Lamborghini Huracán, Lotus Emira, Land Rover Defender, and Mercedes G-Wagen parked on a wet surface.",
    width: 1320,
    height: 2388,
  } as ImageMeta,
};

export const finalCtaData = {
  eyebrow: "Are you ready to",
  heading: "Refuse Ordinary",
  buttonText: "Start Your Project",
  buttonHref: "/contact",
  image: {
    src: "/images/cta.jpg",
    alt: "Three custom Forge vehicles, a black Mercedes G-Wagen, a red Porsche 911 GT3, and a black Land Rover Defender, are parked on a dark surface.",
    width: 2880,
    height: 1868,
  } as ImageMeta,
};
