import { AdminShell } from "@/components/admin-shell";
import { ProductsTable } from "@/components/admin-tables";

export default function AdminProductsPage() {
  return (
    <AdminShell title="Products">
      <ProductsTable />
    </AdminShell>
  );
}
