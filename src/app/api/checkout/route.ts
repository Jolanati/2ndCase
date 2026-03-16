import { NextResponse } from "next/server";
import { buildOrderSummary } from "@/lib/store";
import { getStripeServerClient } from "@/lib/stripe";
import { checkoutSchema } from "@/lib/validators";

export async function POST(request: Request) {
  const body = await request.json();
  const payload = checkoutSchema.safeParse(body);

  if (!payload.success) {
    return NextResponse.json({ error: payload.error.flatten() }, { status: 400 });
  }

  const order = buildOrderSummary({
    items: payload.data.items,
    locale: payload.data.locale,
    email: payload.data.email,
    customer: {
      fullName: payload.data.fullName,
      phone: payload.data.phone,
      line1: payload.data.line1,
      line2: payload.data.line2,
      city: payload.data.city,
      postalCode: payload.data.postalCode,
      countryCode: payload.data.countryCode,
      shippingZoneCode: payload.data.shippingZoneCode,
      notes: payload.data.notes
    }
  });

  const stripe = getStripeServerClient();
  let clientSecret: string | null = null;

  if (stripe) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: order.totalCents,
      currency: "eur",
      metadata: {
        orderNumber: order.orderNumber
      },
      automatic_payment_methods: {
        enabled: true
      },
      receipt_email: order.email
    });

    clientSecret = paymentIntent.client_secret;
  }

  return NextResponse.json({
    order,
    stripe: {
      enabled: Boolean(stripe),
      clientSecret
    }
  });
}
