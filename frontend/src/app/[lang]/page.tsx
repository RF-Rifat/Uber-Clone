import Image from "next/image";
import { defaultLocale, locales } from "../../../middleware";

const dictionary = {
  en: {
    welcome: "Welcome to our website",
    description: "Click the button in the top-right corner to switch to Bangla",
  },
  bn: {
    welcome: "আমাদের ওয়েবসাইটে স্বাগতম",
    description: "ইংরেজিতে স্যুইচ করতে উপরের ডান দিকের বাটনে ক্লিক করুন",
  },
} as const;

type Locale = keyof typeof dictionary;

interface HomeProps {
  params: { lang: string };
}

export default function Home({ params }: HomeProps) {
  const lang = locales.includes(params.lang as Locale)
    ? (params.lang as Locale)
    : defaultLocale;

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{dictionary[lang].welcome}</h1>
      <p className="text-gray-600">{dictionary[lang].description}</p>
      <Image
        src="/welcome-page/Pathao-ecosystem.jpg"
        alt="Pathao Ecosystem"
        width={1000}
        height={1000}
        priority
      />
    </div>
  );
}

// Ensure Next.js statically generates locale-specific paths
export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}
