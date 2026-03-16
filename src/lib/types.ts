export type Locale = "en" | "lv";

export type LocalizedString = {
  en: string;
  lv: string;
};

export type Category = {
  id: string;
  slug: string;
  name: LocalizedString;
  description: LocalizedString;
  image: string;
};

export type ProductVariant = {
  id: string;
  sku: string;
  name: LocalizedString;
  shade?: string;
  grit?: string;
  size?: string;
  packSize?: string;
  priceCents: number;
  vatRate: number;
  inventory: number;
  image: string;
};

export type Product = {
  id: string;
  slug: string;
  categorySlug: string;
  name: LocalizedString;
  subtitle: LocalizedString;
  description: LocalizedString;
  ingredients: LocalizedString;
  usage: LocalizedString;
  compatibility: LocalizedString;
  curingInfo: LocalizedString;
  isFeatured: boolean;
  relatedSlugs: string[];
  variants: ProductVariant[];
};

export type ContentBlock = {
  key: string;
  title: LocalizedString;
  body: LocalizedString;
};

export type ShippingZone = {
  code: string;
  name: LocalizedString;
  countries: string[];
  rateCents: number;
  freeAboveCents?: number;
  eta: LocalizedString;
};

export type CartItem = {
  productId: string;
  variantId: string;
  quantity: number;
};

export type EnrichedCartItem = {
  product: Product;
  variant: ProductVariant;
  quantity: number;
};

export type CheckoutFormData = {
  email: string;
  fullName: string;
  phone: string;
  line1: string;
  line2?: string;
  city: string;
  postalCode: string;
  countryCode: string;
  shippingZoneCode: string;
  notes?: string;
};

export type OrderSummary = {
  orderNumber: string;
  locale: Locale;
  email: string;
  items: EnrichedCartItem[];
  subtotalCents: number;
  shippingCents: number;
  vatCents: number;
  totalCents: number;
  shippingZone: ShippingZone;
  customer: CheckoutFormData;
  createdAt: string;
  paymentStatus: "requires_payment" | "paid";
};
