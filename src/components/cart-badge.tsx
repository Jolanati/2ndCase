"use client";

import Link from "next/link";
import { Locale } from "@/lib/types";
import { uiCopy } from "@/lib/copy";
import { useCart } from "./cart-provider";

export function CartBadge({ locale }: { locale: Locale }) {
  const { totalItems } = useCart();

  return (
    <Link href={`/${locale}/cart`} className="cart-badge">
      {uiCopy[locale].cart} <span>{totalItems}</span>
    </Link>
  );
}
