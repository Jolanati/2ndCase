import { AdminShell } from "@/components/admin-shell";
import { OrdersTable } from "@/components/admin-tables";

export default function AdminOrdersPage() {
  return (
    <AdminShell title="Orders">
      <OrdersTable />
    </AdminShell>
  );
}
