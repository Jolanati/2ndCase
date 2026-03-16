import { homepageContent, products, shippingZones } from "../src/lib/mock-data";

async function main() {
  console.log("Seed preview");
  console.log(`Products: ${products.length}`);
  console.log(`Shipping zones: ${shippingZones.length}`);
  console.log(`Content blocks: ${homepageContent.length}`);
  console.log("Connect PrismaClient here after installing dependencies and setting DATABASE_URL.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
