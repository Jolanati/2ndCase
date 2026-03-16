import { categories, homepageContent, products, shippingZones } from "./mock-data";
import { CartItem, EnrichedCartItem, Locale, OrderSummary, Product, ShippingZone } from "./types";

export function getCategories() {
  return categories;
}

export function getHomepageContent() {
  return homepageContent;
}

export function getFeaturedProducts() {
  return products.filter((product) => product.isFeatured);
}

export function getProducts(options?: {
  category?: string;
  query?: string;
  sort?: "featured" | "price-asc" | "price-desc" | "name";
}) {
  const query = options?.query?.trim().toLowerCase();
  let filtered = products.filter((product) => {
    const inCategory = options?.category ? product.categorySlug === options.category : true;
    const inQuery = query
      ? [product.name.en, product.name.lv, product.subtitle.en, product.subtitle.lv]
          .join(" ")
          .toLowerCase()
          .includes(query)
      : true;
    return inCategory && inQuery;
  });

  switch (options?.sort) {
    case "price-asc":
      filtered = [...filtered].sort(
        (a, b) => Math.min(...a.variants.map((variant) => variant.priceCents)) - Math.min(...b.variants.map((variant) => variant.priceCents))
      );
      break;
    case "price-desc":
      filtered = [...filtered].sort(
        (a, b) => Math.max(...b.variants.map((variant) => variant.priceCents)) - Math.max(...a.variants.map((variant) => variant.priceCents))
      );
      break;
    case "name":
      filtered = [...filtered].sort((a, b) => a.name.en.localeCompare(b.name.en));
      break;
    default:
      filtered = [...filtered].sort((a, b) => Number(b.isFeatured) - Number(a.isFeatured));
  }

  return filtered;
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}

export function getRelatedProducts(product: Product) {
  return products.filter((candidate) => product.relatedSlugs.includes(candidate.slug));
}

export function getShippingZones() {
  return shippingZones;
}

export function getShippingZone(code: string) {
  return shippingZones.find((zone) => zone.code === code) ?? shippingZones[0];
}

export function enrichCartItems(items: CartItem[]): EnrichedCartItem[] {
  return items.flatMap((item) => {
    const product = getProductById(item.productId);
    const variant = product?.variants.find((candidate) => candidate.id === item.variantId);

    if (!product || !variant) {
      return [];
    }

    return [{ product, variant, quantity: item.quantity }];
  });
}

export function calculateSubtotal(items: EnrichedCartItem[]): number {
  return items.reduce((total, item) => total + item.variant.priceCents * item.quantity, 0);
}

export function calculateVat(items: EnrichedCartItem[]): number {
  return Math.round(
    items.reduce((total, item) => {
      const lineTotal = item.variant.priceCents * item.quantity;
      return total + (lineTotal * item.variant.vatRate) / (100 + item.variant.vatRate);
    }, 0)
  );
}

export function calculateShipping(subtotalCents: number, zone: ShippingZone): number {
  if (zone.freeAboveCents && subtotalCents >= zone.freeAboveCents) {
    return 0;
  }

  return zone.rateCents;
}

export function createOrderNumber(): string {
  const suffix = Math.random().toString().slice(2, 8);
  return `NS-${suffix}`;
}

export function buildOrderSummary(input: {
  items: CartItem[];
  locale: Locale;
  email: string;
  customer: {
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
}): OrderSummary {
  const items = enrichCartItems(input.items);
  const shippingZone = getShippingZone(input.customer.shippingZoneCode);
  const subtotalCents = calculateSubtotal(items);
  const shippingCents = calculateShipping(subtotalCents, shippingZone);
  const vatCents = calculateVat(items);

  return {
    orderNumber: createOrderNumber(),
    locale: input.locale,
    email: input.email,
    items,
    subtotalCents,
    shippingCents,
    vatCents,
    totalCents: subtotalCents + shippingCents,
    shippingZone,
    customer: {
      email: input.email,
      ...input.customer
    },
    createdAt: new Date().toISOString(),
    paymentStatus: "requires_payment"
  };
}
