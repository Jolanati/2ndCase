import Image from "next/image";
import Link from "next/link";
import { formatCurrency } from "@/lib/format";
import { t } from "@/lib/i18n";
import { Locale, Product } from "@/lib/types";

export function ProductCard({ locale, product }: { locale: Locale; product: Product }) {
  const variant = product.variants[0];

  return (
    <article className="product-card">
      <div className="product-image">
        <Image src={variant.image} alt={t(locale, product.name)} fill sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
      <div className="product-content">
        <p className="eyebrow">{product.categorySlug.replace("-", " ")}</p>
        <h3>{t(locale, product.name)}</h3>
        <p>{t(locale, product.subtitle)}</p>
        <div className="product-meta">
          <span>{formatCurrency(variant.priceCents)}</span>
          <Link href={`/${locale}/product/${product.slug}`}>View product</Link>
        </div>
      </div>
    </article>
  );
}
