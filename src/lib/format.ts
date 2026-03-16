export function formatCurrency(amountCents: number): string {
  return new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR"
  }).format(amountCents / 100);
}
