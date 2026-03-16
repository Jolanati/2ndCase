import { AdminShell } from "@/components/admin-shell";
import { ContentTable } from "@/components/admin-tables";

export default function AdminContentPage() {
  return (
    <AdminShell title="Content">
      <ContentTable />
    </AdminShell>
  );
}
