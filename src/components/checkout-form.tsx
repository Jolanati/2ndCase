"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import { formatCurrency } from "@/lib/format";
import { calculateShipping, calculateSubtotal, calculateVat, enrichCartItems, getShippingZones } from "@/lib/store";
import { Locale } from "@/lib/types";
import { uiCopy } from "@/lib/copy";
import { useCart } from "./cart-provider";

export function CheckoutForm({ locale }: { locale: Locale }) {
  const router = useRouter();
  const { items, clearCart } = useCart();
  const [status, setStatus] = useState<string>("");
  const zones = getShippingZones();
  const [shippingZoneCode, setShippingZoneCode] = useState(zones[0].code);
  const enriched = useMemo(() => enrichCartItems(items), [items]);
  const subtotal = calculateSubtotal(enriched);
  const zone = zones.find((candidate) => candidate.code === shippingZoneCode) ?? zones[0];
  const shipping = calculateShipping(subtotal, zone);
  const vat = calculateVat(enriched);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = {
      locale,
      email: String(formData.get("email") ?? ""),
      fullName: String(formData.get("fullName") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      line1: String(formData.get("line1") ?? ""),
      line2: String(formData.get("line2") ?? ""),
      city: String(formData.get("city") ?? ""),
      postalCode: String(formData.get("postalCode") ?? ""),
      countryCode: String(formData.get("countryCode") ?? ""),
      shippingZoneCode,
      notes: String(formData.get("notes") ?? ""),
      items
    };

    setStatus("Processing...");

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      setStatus("Unable to create order.");
      return;
    }

    const data = await response.json();
    window.sessionStorage.setItem(`order-${data.order.orderNumber}`, JSON.stringify(data.order));
    clearCart();
    router.push(`/${locale}/order/${data.order.orderNumber}`);
  }

  if (enriched.length === 0) {
    return <p>{uiCopy[locale].emptyCart}</p>;
  }

  return (
    <div className="checkout-layout">
      <form className="checkout-form" onSubmit={onSubmit}>
        <div className="field-grid">
          <label>
            Email
            <input name="email" type="email" required />
          </label>
          <label>
            {locale === "en" ? "Full name" : "Vards, uzvards"}
            <input name="fullName" required />
          </label>
          <label>
            {locale === "en" ? "Phone" : "Talrunis"}
            <input name="phone" required />
          </label>
          <label>
            {locale === "en" ? "Address line 1" : "Adrese"}
            <input name="line1" required />
          </label>
          <label>
            {locale === "en" ? "Address line 2" : "Adrese 2"}
            <input name="line2" />
          </label>
          <label>
            {locale === "en" ? "City" : "Pilseta"}
            <input name="city" required />
          </label>
          <label>
            {locale === "en" ? "Postal code" : "Pasta indekss"}
            <input name="postalCode" required />
          </label>
          <label>
            {locale === "en" ? "Country code" : "Valsts kods"}
            <input name="countryCode" defaultValue="LV" maxLength={2} required />
          </label>
          <label>
            {locale === "en" ? "Shipping zone" : "Piegades zona"}
            <select value={shippingZoneCode} onChange={(event) => setShippingZoneCode(event.target.value)}>
              {zones.map((candidate) => (
                <option key={candidate.code} value={candidate.code}>
                  {candidate.name[locale]} · {formatCurrency(candidate.rateCents)}
                </option>
              ))}
            </select>
          </label>
        </div>
        <label>
          {locale === "en" ? "Order notes" : "Piezimes pasutijumam"}
          <textarea name="notes" rows={4} />
        </label>
        <button type="submit" className="button-primary">
          {uiCopy[locale].placeOrder}
        </button>
        {status ? <p>{status}</p> : null}
      </form>
      <aside className="summary-card">
        <div className="summary-row">
          <span>{uiCopy[locale].subtotal}</span>
          <strong>{formatCurrency(subtotal)}</strong>
        </div>
        <div className="summary-row">
          <span>{uiCopy[locale].shipping}</span>
          <strong>{formatCurrency(shipping)}</strong>
        </div>
        <div className="summary-row">
          <span>{uiCopy[locale].vatIncluded}</span>
          <strong>{formatCurrency(vat)}</strong>
        </div>
        <div className="summary-row summary-total">
          <span>{uiCopy[locale].total}</span>
          <strong>{formatCurrency(subtotal + shipping)}</strong>
        </div>
      </aside>
    </div>
  );
}
