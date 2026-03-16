import { OrderClient } from "@/components/order-client";
import { Locale } from "@/lib/types";

export default async function OrderPage({
  params
}: {
  params: Promise<{ locale: Locale; orderNumber: string }>;
}) {
  const { locale, orderNumber } = await params;

  return <OrderClient locale={locale} orderNumber={orderNumber} />;
}
