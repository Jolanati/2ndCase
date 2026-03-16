import { describe, expect, it } from "vitest";
import { buildOrderSummary, calculateShipping, calculateSubtotal, enrichCartItems, getShippingZone } from "@/lib/store";

describe("store calculations", () => {
  it("enriches cart items with products and variants", () => {
    const enriched = enrichCartItems([{ productId: "prod-structure", variantId: "var-structure-15", quantity: 2 }]);

    expect(enriched).toHaveLength(1);
    expect(enriched[0]?.variant.sku).toBe("BG-STR-15");
  });

  it("calculates shipping by zone threshold", () => {
    const zone = getShippingZone("LV");

    expect(calculateShipping(2000, zone)).toBe(490);
    expect(calculateShipping(6000, zone)).toBe(0);
  });

  it("creates order summary totals", () => {
    const summary = buildOrderSummary({
      locale: "en",
      email: "tech@example.com",
      items: [{ productId: "prod-structure", variantId: "var-structure-15", quantity: 2 }],
      customer: {
        fullName: "Test Tech",
        phone: "12345678",
        line1: "Main street 1",
        city: "Riga",
        postalCode: "LV-1010",
        countryCode: "LV",
        shippingZoneCode: "LV"
      }
    });

    expect(summary.subtotalCents).toBe(calculateSubtotal(summary.items));
    expect(summary.totalCents).toBe(summary.subtotalCents + summary.shippingCents);
  });
});
