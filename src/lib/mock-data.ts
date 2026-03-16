import { Category, ContentBlock, Product, ShippingZone } from "./types";

export const categories: Category[] = [
  {
    id: "cat-gel",
    slug: "builder-gels",
    name: { en: "Builder Gels", lv: "Modelejamie geli" },
    description: {
      en: "Professional structure gels for salon-strength overlays and extensions.",
      lv: "Profesionali modelejamie geli noturigam salona parklajumam un pieaudzēšanai."
    },
    image:
      "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "cat-colour",
    slug: "gel-polish",
    name: { en: "Gel Polish", lv: "Gellakas" },
    description: {
      en: "Highly pigmented salon colours with reliable curing and retention.",
      lv: "Augsti pigmentetas salonu krasas ar uzticamu cietesanu un noturibu."
    },
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "cat-bits",
    slug: "e-file-bits",
    name: { en: "E-File Bits", lv: "Frezes uzgali" },
    description: {
      en: "Ceramic and carbide bits for prep, debulking, refining, and removal.",
      lv: "Keramikas un karbida uzgali sagatavosanai, materiala noņemsanai un izstradei."
    },
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "cat-tools",
    slug: "tools-and-lamps",
    name: { en: "Tools & Lamps", lv: "Instrumenti un lampas" },
    description: {
      en: "Reliable pro tools and high-output LED lamps for daily appointments.",
      lv: "Uzticami profesionali instrumenti un jaudigas LED lampas ikdienas pierakstiem."
    },
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
  }
];

export const products: Product[] = [
  {
    id: "prod-structure",
    slug: "structure-builder-gel",
    categorySlug: "builder-gels",
    name: { en: "Structure Builder Gel", lv: "Strukturas modelejamais gels" },
    subtitle: {
      en: "Self-levelling hard gel for salon-speed overlays.",
      lv: "Pašizlidzinošs cietais gels atram salona darbam."
    },
    description: {
      en: "A medium-viscosity builder gel created for nail technicians who need shape control, smooth leveling, and durable retention across busy appointment books.",
      lv: "Videjas viskozitates modelejamais gels nagu meistariem, kuriem nepieciešama formas kontrole, gluda izlidzinasanas un noturiba intensiva darba ritma."
    },
    ingredients: {
      en: "Acrylates copolymer, HEMA-free photoinitiator blend, silica.",
      lv: "Akrilatu kopolimērs, HEMA nesaturošs fotoiniciatoru maisijums, silika."
    },
    usage: {
      en: "Apply over prepared nail plate, cure 60 seconds LED, refine with 180 grit.",
      lv: "Uzklat uz sagatavotas naga plaksnes, cietināt 60 sekundes LED lampa, apstradat ar 180 grit."
    },
    compatibility: {
      en: "Compatible with rubber base, hard gel top coats, and forms.",
      lv: "Savietojams ar gumijas bazem, cietajiem topiem un formam."
    },
    curingInfo: {
      en: "60 seconds in 48W LED lamp.",
      lv: "60 sekundes 48W LED lampa."
    },
    isFeatured: true,
    relatedSlugs: ["milky-cover-builder-gel", "pro-led-lamp-48w"],
    variants: [
      {
        id: "var-structure-15",
        sku: "BG-STR-15",
        name: { en: "15 ml pot", lv: "15 ml iepakojums" },
        size: "15 ml",
        priceCents: 1490,
        vatRate: 21,
        inventory: 18,
        image:
          "https://images.unsplash.com/photo-1583241800698-9c4cf6187d9f?auto=format&fit=crop&w=1200&q=80"
      },
      {
        id: "var-structure-50",
        sku: "BG-STR-50",
        name: { en: "50 ml pro jar", lv: "50 ml profesionals trauks" },
        size: "50 ml",
        priceCents: 3290,
        vatRate: 21,
        inventory: 10,
        image:
          "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80"
      }
    ]
  },
  {
    id: "prod-milky",
    slug: "milky-cover-builder-gel",
    categorySlug: "builder-gels",
    name: { en: "Milky Cover Builder Gel", lv: "Piena tonja kamuflazas gels" },
    subtitle: {
      en: "Soft cover tone for natural salon sets and babyboomer bases.",
      lv: "Maigs kamuflazas tonis dabigam salonu setam un babyboomer bazem."
    },
    description: {
      en: "A cool-toned milky builder gel designed for elegant overlays, structured manicures, and clean French foundations.",
      lv: "Vesas tonalitates pienains modelejamais gels elegantam parklajumam, strukturmanikiram un tiram frenča pamatam."
    },
    ingredients: {
      en: "Acrylates copolymer, mica, silica, photo-reactive resin.",
      lv: "Akrilatu kopolimērs, mika, silika, fotoreaktivi sveki."
    },
    usage: {
      en: "Use as a structured overlay or extension overlay layer. Cure 60 seconds LED.",
      lv: "Lietot ka strukturparklajumu vai pieaudzēšanas parklajuma karti. Cietinat 60 sekundes LED."
    },
    compatibility: {
      en: "Pairs well with nude gel polishes and glossy or velvet top coats.",
      lv: "Labi sader ar nudes tonju gellakam un spidigiem vai samtainiem topiem."
    },
    curingInfo: {
      en: "60 to 90 seconds depending on thickness.",
      lv: "60 lidz 90 sekundem atkariba no biezuma."
    },
    isFeatured: true,
    relatedSlugs: ["structure-builder-gel", "nude-gel-polish-set"],
    variants: [
      {
        id: "var-milky-15",
        sku: "BG-MIL-15",
        name: { en: "15 ml pot", lv: "15 ml iepakojums" },
        shade: "Milky pink",
        size: "15 ml",
        priceCents: 1590,
        vatRate: 21,
        inventory: 24,
        image:
          "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=1200&q=80"
      }
    ]
  },
  {
    id: "prod-nudes",
    slug: "nude-gel-polish-set",
    categorySlug: "gel-polish",
    name: { en: "Salon Nude Gel Polish Set", lv: "Salona nude gellaku komplekts" },
    subtitle: {
      en: "Six workhorse neutral shades for everyday appointment books.",
      lv: "Seši ikdiena vispieprasītakie neitralie toņi."
    },
    description: {
      en: "A technician-first set of opaque nude shades selected for bridal, office, and low-maintenance clients. Smooth application and consistent color payoff.",
      lv: "Meistariem veidots sedzošu nude tonju komplekts ligavam, biroja klientiem un klientem, kuras velas minimālu kopšanu. Vienmerigs klajums un tonis."
    },
    ingredients: {
      en: "Acrylates copolymer, pigments, silica, photoinitiators.",
      lv: "Akrilatu kopolimērs, pigmenti, silika, fotoiniciatori."
    },
    usage: {
      en: "Apply in two thin coats over cured base. Cure each layer 60 seconds.",
      lv: "Uzklat divas plānas kartas uz sacietinatas bāzes. Katrai kārtai 60 sekundes."
    },
    compatibility: {
      en: "Works with rubber bases, builder bases, and no-wipe tops.",
      lv: "Der ar gumijas bazem, builder bazem un bezlipigajiem topiem."
    },
    curingInfo: {
      en: "60 seconds LED per layer.",
      lv: "60 sekundes LED katrai kartai."
    },
    isFeatured: true,
    relatedSlugs: ["structure-builder-gel", "precision-carbide-bit"],
    variants: [
      {
        id: "var-nudes-set",
        sku: "GP-NUDE-SET",
        name: { en: "6 x 10 ml set", lv: "6 x 10 ml komplekts" },
        packSize: "6 pcs",
        priceCents: 3790,
        vatRate: 21,
        inventory: 14,
        image:
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80"
      }
    ]
  },
  {
    id: "prod-bit",
    slug: "precision-carbide-bit",
    categorySlug: "e-file-bits",
    name: { en: "Precision Carbide Bit", lv: "Precizais karbida uzgalis" },
    subtitle: {
      en: "Fine cross-cut bit for safe product removal and refining.",
      lv: "Smalks krustenisks uzgalis drosai materiala noņemsanai un izstradei."
    },
    description: {
      en: "Engineered for smooth debulking with reduced heat buildup, making it ideal for structured manicures and efficient refill appointments.",
      lv: "Izstradats gludai materiala noņemsanai ar mazakas sakaršanas risku, ideali piemērots strukturmanikiram un refill pierakstiem."
    },
    ingredients: {
      en: "Tungsten carbide.",
      lv: "Volframa karbids."
    },
    usage: {
      en: "Use at recommended RPM on cured product only. Clean and sanitize after each client.",
      lv: "Lietot ieteiktajos apgriezienos tikai uz sacietinata materiala. Pec katra klienta tirit un dezinficet."
    },
    compatibility: {
      en: "Fits standard 3/32 inch e-file handpieces.",
      lv: "Piemerots standarta 3/32 collu frezes rokturiem."
    },
    curingInfo: {
      en: "No curing required.",
      lv: "Cietinasana nav nepieciešama."
    },
    isFeatured: false,
    relatedSlugs: ["pro-led-lamp-48w"],
    variants: [
      {
        id: "var-bit-fine",
        sku: "BIT-CARB-F",
        name: { en: "Fine grit", lv: "Smalks grit" },
        grit: "Fine",
        priceCents: 1290,
        vatRate: 21,
        inventory: 32,
        image:
          "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=80"
      }
    ]
  },
  {
    id: "prod-lamp",
    slug: "pro-led-lamp-48w",
    categorySlug: "tools-and-lamps",
    name: { en: "Pro LED Lamp 48W", lv: "Profesionala LED lampa 48W" },
    subtitle: {
      en: "Wide-curing lamp with low-heat mode for high-throughput desks.",
      lv: "Plaša cietesanas lampa ar zema karstuma režimu intensīvai darba vietai."
    },
    description: {
      en: "A dependable desktop LED lamp for busy professionals, featuring mirror interior, timer presets, and enough room for full-hand curing.",
      lv: "Uzticama galda LED lampa noslogotiem profesionaliem ar spogula interioru, taimera režimiem un vietu pilnai rokas cietesināšanai."
    },
    ingredients: {
      en: "ABS housing, LED diodes, mirrored base plate.",
      lv: "ABS korpuss, LED diodes, spoguļota pamatne."
    },
    usage: {
      en: "Use low-heat mode for builder applications. Wipe base plate after each client.",
      lv: "Builder materialiem izmanto zema karstuma režimu. Pec katra klienta noslaucit pamatni."
    },
    compatibility: {
      en: "Suitable for gel polish, hard gel, and most LED-curable systems.",
      lv: "Piemerota gellakai, cietajam gelam un vairumam LED cietinamu sistemu."
    },
    curingInfo: {
      en: "30, 60, and 99-second timer modes.",
      lv: "30, 60 un 99 sekunžu taimera režimi."
    },
    isFeatured: true,
    relatedSlugs: ["structure-builder-gel"],
    variants: [
      {
        id: "var-lamp-white",
        sku: "LAMP-48-WH",
        name: { en: "White", lv: "Balta" },
        priceCents: 5490,
        vatRate: 21,
        inventory: 6,
        image:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80"
      }
    ]
  }
];

export const shippingZones: ShippingZone[] = [
  {
    code: "LV",
    name: { en: "Latvia", lv: "Latvija" },
    countries: ["LV"],
    rateCents: 490,
    freeAboveCents: 6000,
    eta: { en: "1-2 business days", lv: "1-2 darba dienas" }
  },
  {
    code: "BALTICS",
    name: { en: "Baltics", lv: "Baltija" },
    countries: ["EE", "LT"],
    rateCents: 790,
    freeAboveCents: 8500,
    eta: { en: "2-4 business days", lv: "2-4 darba dienas" }
  },
  {
    code: "EU",
    name: { en: "European Union", lv: "Eiropas Savieniba" },
    countries: ["DE", "FR", "ES", "IT", "NL", "BE", "PL", "SE", "FI", "DK", "CZ", "AT", "PT", "IE"],
    rateCents: 1290,
    freeAboveCents: 12000,
    eta: { en: "4-7 business days", lv: "4-7 darba dienas" }
  }
];

export const homepageContent: ContentBlock[] = [
  {
    key: "hero",
    title: {
      en: "Professional nail supplies for fast, flawless appointments",
      lv: "Profesionali nagu materiali atram un precizam pierakstu darbam"
    },
    body: {
      en: "Stock your desk with hard-working gels, precise bits, dependable lamps, and salon-tested essentials built for daily use.",
      lv: "Papildini darba vietu ar uzticamiem geliem, preciziem uzgaļiem, jaudigam lampam un salonos parbauditiem ikdienas materialiem."
    }
  },
  {
    key: "shipping",
    title: {
      en: "Latvia-first shipping with EU delivery",
      lv: "Sutīšana no Latvijas ar piegādi visā ES"
    },
    body: {
      en: "Transparent shipping rates, VAT-aware pricing, and curated professional inventory with salon-ready dispatch.",
      lv: "Pārskatamas piegades izmaksas, PVN pielagotas cenas un profesionals sortiments ar gatavu izsūtīšanu salonu vajadzībam."
    }
  },
  {
    key: "policies",
    title: {
      en: "Professional support and clear product details",
      lv: "Profesionala pieeja un skaidra produktu informacija"
    },
    body: {
      en: "Each product includes compatibility guidance, curing notes, and usage details to help technicians order with confidence.",
      lv: "Katram produktam pievienota saderības, cietināšanas un lietošanas informacija, lai meistari varetu pasutit droši."
    }
  }
];
