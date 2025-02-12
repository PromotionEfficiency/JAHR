'use client'

import { useTranslations } from 'next-intl'

export default function About() {
    const t = useTranslations()
    
    return (
        <section id="about" className="relative py-20 bg-white dark:bg-jgreen-800 px-2 lg:px-0">
            <div className="container mx-auto max-w-6xl">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-jbrown-800 dark:text-white text-4xl font-bold mb-8">{t('about.title')}</h2>
                    <p className="text-jbrown-800 dark:text-white text-lg leading-relaxed">{t('about.description')}</p>
                </div>
            </div>
        </section>
    )
}