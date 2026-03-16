import { Locale, Product } from "@/lib/types";
import { ProductCard } from "./product-card";

export function ProductGrid({ locale, products }: { locale: Locale; products: Product[] }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} locale={locale} product={product} />
      ))}
    </div>
  );
}
