import './globals.css'
import {routing} from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <head>
      <meta name="apple-mobile-web-app-title" content="Jahr" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
