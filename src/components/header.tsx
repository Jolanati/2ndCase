import Link from "next/link";
import { getLocaleLabel } from "@/lib/i18n";
import { uiCopy } from "@/lib/copy";
import { Locale } from "@/lib/types";
import { CartBadge } from "./cart-badge";

export function Header({ locale }: { locale: Locale }) {
  const copy = uiCopy[locale];

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href={`/${locale}`} className="brand-mark">
          <span className="brand-kicker">NS</span>
          <span>
            <strong>Nail Supply Studio</strong>
            <small>for working technicians</small>
          </span>
        </Link>
        <nav className="main-nav">
          <Link href={`/${locale}/catalog`}>{copy.catalog}</Link>
          <Link href="/admin">{copy.admin}</Link>
          <Link href={`/${locale}/checkout`}>{copy.checkout}</Link>
          <CartBadge locale={locale} />
          <div className="locale-links" aria-label={copy.localeSwitch}>
            <Link href="/en">{getLocaleLabel("en")}</Link>
            <Link href="/lv">{getLocaleLabel("lv")}</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
