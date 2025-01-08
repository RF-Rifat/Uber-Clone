"use client";

import { useRouter, useParams } from "next/navigation";
import { defaultLocale, locales } from "../../middleware";
import { Button } from "./ui/button";

const languageNames = {
  en: "English",
  bn: "বাংলা",
} as const;

type Locale = keyof typeof languageNames;

export function LanguageSwitcher() {
  const router = useRouter();
  const params = useParams();

  const currentLang = (
    params?.lang && locales.includes(params.lang as Locale)
      ? params.lang
      : defaultLocale
  ) as Locale;

  const switchLanguage = () => {
    console.log(languageNames[currentLang]); 
    const newLocale = currentLang === "en" ? "bn" : "en";

    // Set cookie for language preference
    document.cookie = `preferred-locale=${newLocale}; path=/; max-age=31536000`;

    // Replace the current locale in the path with the new one
    const newPath = window.location.pathname.replace(
      `/${currentLang}`,
      `/${newLocale}`
    );
    router.push(newPath);
  };

  return (
    <Button
      onClick={switchLanguage}
      className=""
    >
      {currentLang === "en" ? "বাংলা" : "English"}
    </Button>
  );
}
