import { CheckoutForm } from "@/components/checkout-form";
import { Locale } from "@/lib/types";

export default async function CheckoutPage({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return (
    <section>
      <div className="section-header">
        <div>
          <p className="eyebrow">{locale === "en" ? "Checkout" : "Noformesana"}</p>
          <h1>{locale === "en" ? "Shipping and payment" : "Piegade un apmaksa"}</h1>
        </div>
      </div>
      <CheckoutForm locale={locale} />
    </section>
  );
}
