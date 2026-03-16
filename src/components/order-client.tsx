"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { formatCurrency } from "@/lib/format";
import { Locale, OrderSummary } from "@/lib/types";

export function OrderClient({ locale, orderNumber }: { locale: Locale; orderNumber: string }) {
  const [order, setOrder] = useState<OrderSummary | null>(null);

  useEffect(() => {
    const stored = window.sessionStorage.getItem(`order-${orderNumber}`);
    if (stored) {
      setOrder(JSON.parse(stored));
    }
  }, [orderNumber]);

  if (!order) {
    return (
      <section className="empty-state">
        <h2>{locale === "en" ? "Order not found in this session" : "Sis pasutijums saja sesija nav atrasts"}</h2>
        <Link href={`/${locale}/catalog`} className="button-secondary">
          {locale === "en" ? "Back to catalog" : "Atpakal uz katalogu"}
        </Link>
      </section>
    );
  }

  return (
    <section className="order-panel">
      <p className="eyebrow">{order.orderNumber}</p>
      <h1>{locale === "en" ? "Order received" : "Pasutijums sanemts"}</h1>
      <p>{locale === "en" ? "A confirmation email would be sent from the live Stripe flow." : "Dziva Stripe procesa tiktu nosutits apstiprinajuma e-pasts."}</p>
      <div className="order-grid">
        <div className="summary-card">
          {order.items.map((item) => (
            <div key={item.variant.id} className="summary-row">
              <span>
                {item.product.name[locale]} x {item.quantity}
              </span>
              <strong>{formatCurrency(item.variant.priceCents * item.quantity)}</strong>
            </div>
          ))}
          <div className="summary-row summary-total">
            <span>{locale === "en" ? "Total" : "Kopa"}</span>
            <strong>{formatCurrency(order.totalCents)}</strong>
          </div>
        </div>
        <div className="summary-card">
          <strong>{locale === "en" ? "Shipping to" : "Piegade uz"}</strong>
          <p>{order.customer.fullName}</p>
          <p>{order.customer.line1}</p>
          <p>
            {order.customer.city}, {order.customer.postalCode}
          </p>
          <p>{order.shippingZone.name[locale]}</p>
        </div>
      </div>
    </section>
  );
}
