import "./globals.css";
import type { Metadata } from "next";
import { CartProvider } from "@/components/cart-provider";

export const metadata: Metadata = {
  title: "Nail Supply Studio",
  description: "Professional nail supply storefront for Latvia-first EU shipping."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
