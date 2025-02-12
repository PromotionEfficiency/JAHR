import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { generateMetadata as generateSiteMetadata, jsonLd } from "@/lib/metadata";
import { Metadata } from "next";
import Script from "next/script";

interface LocaleLayoutProps {
    children: React.ReactNode;
    params: { locale: string };
}

export async function generateMetadata({ params }: LocaleLayoutProps ): Promise<Metadata> {
    const { locale } = await params;
    return generateSiteMetadata({ locale: locale });
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
    const { locale } = await params;

    if (!routing.locales.includes(locale as any)) notFound();

    setRequestLocale(locale);
    const messages = await getMessages();

    return (
        <>
            <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <div 
                dir={locale === "ar" ? "rtl" : "ltr"}
                role="region"
                aria-label="Content"
                className="min-h-screen"
            >
                <NextIntlClientProvider messages={messages} locale={locale}>
                    <a 
                        href="#main-content" 
                        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-black focus:outline-2 focus:outline-offset-2"
                        aria-label="Skip to main content"
                    >
                        Skip to main content
                    </a>
                    <main 
                        id="main-content" 
                        tabIndex={-1}
                        className="focus:outline-none"
                    >
                        {children}
                    </main>
                </NextIntlClientProvider>
            </div>
        </>
    );
}
