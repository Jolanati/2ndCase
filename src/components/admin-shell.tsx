import Link from "next/link";

export function AdminShell({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="admin-shell">
      <aside className="admin-nav">
        <strong>Admin</strong>
        <Link href="/admin">Dashboard</Link>
        <Link href="/admin/products">Products</Link>
        <Link href="/admin/orders">Orders</Link>
        <Link href="/admin/content">Content</Link>
      </aside>
      <main className="admin-main">
        <div className="admin-title">
          <h1>{title}</h1>
        </div>
        {children}
      </main>
    </div>
  );
}
