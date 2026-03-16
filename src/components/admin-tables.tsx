import { homepageContent } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/format";
import { getProducts, getShippingZones } from "@/lib/store";

export function ProductsTable() {
  const products = getProducts();

  return (
    <div className="admin-card">
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Variants</th>
            <th>From price</th>
            <th>Published</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name.en}</td>
              <td>{product.categorySlug}</td>
              <td>{product.variants.length}</td>
              <td>{formatCurrency(product.variants[0].priceCents)}</td>
              <td>{product.isFeatured ? "Featured" : "Live"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function OrdersTable() {
  const zones = getShippingZones();

  return (
    <div className="admin-card">
      <table>
        <thead>
          <tr>
            <th>Order #</th>
            <th>Customer</th>
            <th>Status</th>
            <th>Shipping zone</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>NS-410892</td>
            <td>Studio Forma</td>
            <td>Paid</td>
            <td>{zones[0].name.en}</td>
            <td>{formatCurrency(7080)}</td>
          </tr>
          <tr>
            <td>NS-410944</td>
            <td>Elina Baltic Nails</td>
            <td>Processing</td>
            <td>{zones[2].name.en}</td>
            <td>{formatCurrency(12990)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function ContentTable() {
  return (
    <div className="admin-card">
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>English title</th>
            <th>Latvian title</th>
          </tr>
        </thead>
        <tbody>
          {homepageContent.map((block) => (
            <tr key={block.key}>
              <td>{block.key}</td>
              <td>{block.title.en}</td>
              <td>{block.title.lv}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
