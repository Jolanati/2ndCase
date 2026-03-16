"use client";

import { useState } from "react";
import { Product, Locale } from "@/lib/types";
import { uiCopy } from "@/lib/copy";
import { formatCurrency } from "@/lib/format";
import { useCart } from "./cart-provider";

export function AddToCartForm({ locale, product }: { locale: Locale; product: Product }) {
  const { addItem } = useCart();
  const [variantId, setVariantId] = useState(product.variants[0]?.id ?? "");
  const [quantity, setQuantity] = useState(1);
  const selectedVariant =
    product.variants.find((variant) => variant.id === variantId) ?? product.variants[0];

  return (
    <div className="purchase-card">
      <label>
        Variant
        <select value={variantId} onChange={(event) => setVariantId(event.target.value)}>
          {product.variants.map((variant) => (
            <option key={variant.id} value={variant.id}>
              {variant.name[locale]} - {formatCurrency(variant.priceCents)}
            </option>
          ))}
        </select>
      </label>
      <label>
        Qty
        <input
          type="number"
          min={1}
          max={selectedVariant.inventory}
          value={quantity}
          onChange={(event) => setQuantity(Number(event.target.value))}
        />
      </label>
      <button
        type="button"
        className="button-primary"
        disabled={selectedVariant.inventory < 1}
        onClick={() =>
          addItem({
            productId: product.id,
            variantId: selectedVariant.id,
            quantity
          })
        }
      >
        {uiCopy[locale].addToCart}
      </button>
      <p className="stock-note">
        {selectedVariant.inventory < 1
          ? uiCopy[locale].outOfStock
          : selectedVariant.inventory < 8
            ? uiCopy[locale].lowStock
            : uiCopy[locale].inStock}
      </p>
    </div>
  );
}
