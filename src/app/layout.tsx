import './globals.css'
import {routing} from '@/i18n/routing';
import { notoSansArabic } from "@/lib/fonts";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="en" className="scroll-smooth">
      <head>
        <meta name="apple-mobile-web-app-title" content="Jahr" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#173830" />
      </head>
      <body className={`${notoSansArabic.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
