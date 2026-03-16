import { AdminShell } from "@/components/admin-shell";
import { getProducts, getShippingZones } from "@/lib/store";

export default function AdminPage() {
  const products = getProducts();
  const zones = getShippingZones();

  return (
    <AdminShell title="Dashboard">
      <div className="admin-card">
        <h2>Store overview</h2>
        <p>{products.length} products prepared for launch.</p>
        <p>{zones.length} shipping zones configured for Latvia and EU delivery.</p>
        <p>Guest checkout enabled. Stripe server integration switches on when keys are present.</p>
      </div>
    </AdminShell>
  );
}
