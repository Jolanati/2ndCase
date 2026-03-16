"use client";

import Link from "next/link";
import { useMemo } from "react";
import { formatCurrency } from "@/lib/format";
import { enrichCartItems, calculateSubtotal } from "@/lib/store";
import { Locale } from "@/lib/types";
import { uiCopy } from "@/lib/copy";
import { useCart } from "./cart-provider";

export function CartSheet({ locale }: { locale: Locale }) {
  const { items, updateQuantity, removeItem } = useCart();
  const enriched = useMemo(() => enrichCartItems(items), [items]);
  const subtotal = calculateSubtotal(enriched);

  if (enriched.length === 0) {
    return (
      <section className="empty-state">
        <h2>{uiCopy[locale].emptyCart}</h2>
        <Link href={`/${locale}/catalog`} className="button-secondary">
          {uiCopy[locale].continueShopping}
        </Link>
      </section>
    );
  }

  return (
    <section className="cart-layout">
      <div className="cart-items">
        {enriched.map((item) => (
          <article key={item.variant.id} className="cart-item">
            <div>
              <h3>{item.product.name[locale]}</h3>
              <p>{item.variant.name[locale]}</p>
            </div>
            <div className="cart-item-controls">
              <input
                type="number"
                min={1}
                max={item.variant.inventory}
                value={item.quantity}
                onChange={(event) => updateQuantity(item.variant.id, Number(event.target.value))}
              />
              <span>{formatCurrency(item.variant.priceCents * item.quantity)}</span>
              <button type="button" onClick={() => removeItem(item.variant.id)}>
                Remove
              </button>
            </div>
          </article>
        ))}
      </div>
      <aside className="summary-card">
        <div className="summary-row">
          <span>{uiCopy[locale].subtotal}</span>
          <strong>{formatCurrency(subtotal)}</strong>
        </div>
        <p>{uiCopy[locale].vatIncluded}</p>
        <Link href={`/${locale}/checkout`} className="button-primary">
          {uiCopy[locale].checkout}
        </Link>
      </aside>
    </section>
  );
}
