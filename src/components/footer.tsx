import { Locale } from "@/lib/types";

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <strong>Nail Supply Studio</strong>
          <p>
            {locale === "en"
              ? "Professional nail materials with clear curing, compatibility, and shipping guidance."
              : "Profesionali nagu materiali ar skaidru cietinasanas, saderibas un piegades informaciju."}
          </p>
        </div>
        <div>
          <strong>{locale === "en" ? "Policies" : "Noteikumi"}</strong>
          <p>
            {locale === "en"
              ? "Returns within 14 days on unopened items. Salon-use guidance included on each product page."
              : "Atgriesana 14 dienu laika neatvertiem produktiem. Katra produkta lapa satur lietosanas norades salonam."}
          </p>
        </div>
      </div>
    </footer>
  );
}
