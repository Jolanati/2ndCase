import { z } from "zod";

export const checkoutSchema = z.object({
  locale: z.enum(["en", "lv"]),
  email: z.string().email(),
  fullName: z.string().min(2),
  phone: z.string().min(5),
  line1: z.string().min(5),
  line2: z.string().optional(),
  city: z.string().min(2),
  postalCode: z.string().min(2),
  countryCode: z.string().length(2),
  shippingZoneCode: z.string().min(2),
  notes: z.string().optional(),
  items: z
    .array(
      z.object({
        productId: z.string(),
        variantId: z.string(),
        quantity: z.number().int().min(1)
      })
    )
    .min(1)
});

export type CheckoutPayload = z.infer<typeof checkoutSchema>;
