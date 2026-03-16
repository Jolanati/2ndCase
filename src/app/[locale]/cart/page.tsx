import { CartSheet } from "@/components/cart-sheet";
import { Locale } from "@/lib/types";

export default async function CartPage({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return (
    <section>
      <div className="section-header">
        <div>
          <p className="eyebrow">{locale === "en" ? "Cart" : "Grozs"}</p>
          <h1>{locale === "en" ? "Review your professional kit" : "Parskati savu profesionalo komplektu"}</h1>
        </div>
      </div>
      <CartSheet locale={locale} />
    </section>
  );
}
