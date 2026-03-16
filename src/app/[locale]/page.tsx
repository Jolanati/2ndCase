import { CategoryStrip } from "@/components/category-strip";
import { Hero } from "@/components/hero";
import { ProductGrid } from "@/components/product-grid";
import { getFeaturedProducts } from "@/lib/store";
import { Locale } from "@/lib/types";

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const featured = getFeaturedProducts();

  return (
    <>
      <Hero locale={locale} />
      <CategoryStrip locale={locale} />
      <section>
        <div className="section-header">
          <div>
            <p className="eyebrow">{locale === "en" ? "Technician favorites" : "Meistaru favoriti"}</p>
            <h2>{locale === "en" ? "Curated for fast salon work" : "Atlasits atram salona darbam"}</h2>
          </div>
        </div>
        <ProductGrid locale={locale} products={featured} />
      </section>
    </>
  );
}
