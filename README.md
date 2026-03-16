# Nail Supply Studio

A custom Next.js e-commerce starter for professional nail technicians, designed for a Latvia-first launch with English and Latvian storefront content.

## What is included

- Localized storefront routes at `/en` and `/lv`
- Product catalog, category views, product pages, cart, checkout, and order confirmation
- Simple internal admin pages for products, orders, and marketing content
- Prisma schema for products, variants, orders, customers, addresses, shipping zones, and content blocks
- Stripe-ready checkout API that creates a payment intent when `STRIPE_SECRET_KEY` is configured
- Mock data fallback so the app can render immediately before a database is connected

## Local setup

1. Install Node.js 20+ and npm.
2. Install dependencies with `npm install`.
3. Create `.env` with:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/nail_supply"
STRIPE_SECRET_KEY="sk_test_..."
```

4. Generate the Prisma client:

```bash
npx prisma generate
```

5. Start the app:

```bash
npm run dev
```

## Notes

- The current seed script prints a summary of prepared mock data. Replace it with Prisma writes once the database is available.
- Checkout works without Stripe keys in mock mode and returns an order summary only.
- Admin pages are intentionally lightweight and unauthenticated in this first implementation; add auth before production launch.
