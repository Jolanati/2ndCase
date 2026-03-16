import Image from "next/image";
import { notFound } from "next/navigation";
import { AddToCartForm } from "@/components/add-to-cart-form";
import { ProductGrid } from "@/components/product-grid";
import { getProductBySlug, getRelatedProducts } from "@/lib/store";
import { Locale } from "@/lib/types";

export default async function ProductPage({
  params
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product);

  return (
    <section className="detail-panels">
      <div className="product-detail">
        <div className="detail-image">
          <Image
            src={product.variants[0].image}
            alt={product.name[locale]}
            fill
            sizes="(max-width: 960px) 100vw, 50vw"
          />
        </div>
        <div className="detail-copy">
          <p className="eyebrow">{product.categorySlug.replace("-", " ")}</p>
          <h1>{product.name[locale]}</h1>
          <p>{product.subtitle[locale]}</p>
          <AddToCartForm locale={locale} product={product} />
          <section>
            <h2>{locale === "en" ? "Description" : "Apraksts"}</h2>
            <p>{product.description[locale]}</p>
          </section>
          <section>
            <h2>{locale === "en" ? "Ingredients / materials" : "Sastavs / materiali"}</h2>
            <p>{product.ingredients[locale]}</p>
          </section>
          <section>
            <h2>{locale === "en" ? "Usage" : "Lietosana"}</h2>
            <p>{product.usage[locale]}</p>
          </section>
          <section>
            <h2>{locale === "en" ? "Compatibility" : "Saderiba"}</h2>
            <p>{product.compatibility[locale]}</p>
          </section>
          <section>
            <h2>{locale === "en" ? "Curing info" : "Cietinasanas informacija"}</h2>
            <p>{product.curingInfo[locale]}</p>
          </section>
        </div>
      </div>
      <section>
        <div className="section-header">
          <div>
            <p className="eyebrow">{locale === "en" ? "Recommended" : "Ieteicams"}</p>
            <h2>{locale === "en" ? "Pair it with" : "Papildini ar"}</h2>
          </div>
        </div>
        <ProductGrid locale={locale} products={related} />
      </section>
    </section>
  );
}
