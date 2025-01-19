import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { generateMetadata as generateSiteMetadata, jsonLd } from "@/lib/metadata";
import { Metadata } from "next";
import Script from "next/script";
import { notoSansArabic } from "@/lib/fonts";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
    const { locale } = await params;
    return generateSiteMetadata({ locale: locale });
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
    const { locale } = await params;

    if (!routing.locales.includes(locale as any)) notFound();

    setRequestLocale(locale);
    const messages = await getMessages();

    return (
        <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} >
            <head>
                <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            </head>
            <body className={notoSansArabic.variable} suppressHydrationWarning>
                <NextIntlClientProvider messages={messages} locale={locale}>
                    <div dir={locale === "ar" ? "rtl" : "ltr"}>{children}</div>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
