import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { isLocale } from "@/lib/i18n";

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <div className="page-shell">
      <Header locale={locale} />
      <main className="page-main">
        <div className="container">{children}</div>
      </main>
      <Footer locale={locale} />
    </div>
  );
}
