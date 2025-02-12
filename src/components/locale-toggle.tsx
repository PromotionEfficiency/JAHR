"use client"

import { Button } from "@/components/ui/button"
import { useLocale } from 'next-intl'
import { usePathname as usePathnameIntl, useRouter as useRouterIntl } from 'next/navigation'

export function LocaleToggle() {
  const locale = useLocale()
  const router = useRouterIntl()
  const pathname = usePathnameIntl()

  const toggleLocale = () => {
    const nextLocale = locale === 'ar' ? 'en' : 'ar'
    router.push(`/${nextLocale}${pathname.replace(/^\/[a-z]{2}/, '')}`)
  }

  return (
    <Button
      variant="default"
      className="rounded-full bg-jbrown-200 hover:bg-opacity-50 bg-opacity-10 dark:bg-opacity-10 dark:hover:bg-opacity-50 dark:bg-jgreen-800 text-white"
      onClick={toggleLocale}
    >
      {locale === 'ar' ? 'E' : 'ع'}
    </Button>
  )
} 