import { LanguageSwitcher } from "@/components/language-switcher";
import { defaultLocale, locales } from "../../../middleware";
import { notFound } from "next/navigation";
import "../globals.css";
export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang?: string };
}) {
  const isValidLocale =
    params?.lang && locales.includes(params.lang as (typeof locales)[number]);

  if (!isValidLocale) {
    notFound();
  }

  const lang = params.lang || defaultLocale;

  return (
    <html lang={lang}>
      <body>
        <header className="p-4 border-b">
          <div className="max-w-7xl mx-auto flex justify-end">
            <LanguageSwitcher />
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}

// Generate static params for all supported locales
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}
