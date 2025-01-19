import { Noto_Sans_Arabic } from 'next/font/google'

export const notoSansArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600', '700'],
  adjustFontFallback: true,
  variable: '--font-noto-sans-arabic',
  fallback: ['sans-serif'],
}) 