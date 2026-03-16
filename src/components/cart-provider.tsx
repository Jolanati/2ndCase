"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { CartItem } from "@/lib/types";

type CartContextValue = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  removeItem: (variantId: string) => void;
  clearCart: () => void;
  totalItems: number;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "nail-supply-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setItems(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      addItem: (item) => {
        setItems((current) => {
          const existing = current.find((candidate) => candidate.variantId === item.variantId);
          if (existing) {
            return current.map((candidate) =>
              candidate.variantId === item.variantId
                ? { ...candidate, quantity: candidate.quantity + item.quantity }
                : candidate
            );
          }

          return [...current, item];
        });
      },
      updateQuantity: (variantId, quantity) => {
        setItems((current) =>
          current
            .map((candidate) =>
              candidate.variantId === variantId ? { ...candidate, quantity } : candidate
            )
            .filter((candidate) => candidate.quantity > 0)
        );
      },
      removeItem: (variantId) => {
        setItems((current) => current.filter((candidate) => candidate.variantId !== variantId));
      },
      clearCart: () => setItems([]),
      totalItems: items.reduce((total, item) => total + item.quantity, 0)
    }),
    [items]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
}
