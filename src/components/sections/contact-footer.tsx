"use client";

import { useLocale, useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { Mail, Phone, Twitter, Instagram, Ghost } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/img/logo.png";

export default function ContactFooter() {
    const t = useTranslations();
    const locale = useLocale();

    return (
        <section id="contact" className="relative min-h-screen bg-gradient-to-t from-jbrown-950 to-jbrown-950 dark:from-jgreen-900 dark:to-jgreen-800 flex items-center justify-center">

            <div>
                {/* Contact Form Section */}
            <div className="container mx-auto max-w-6xl px-4 pt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Left Column - Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <Image src={logo} alt="Jahr Logo" width={120} height={40} className="mb-8" />
                            <p className="text-jbrown-400 max-w-md">{t("about.description")}</p>
                        </div>
                        
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                                    <Mail className="text-white text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">{t("contact.email")}</h3>
                                    <a href="mailto:info@jahr.sa" className="text-jbrown-400 hover:text-white">
                                        info@jahr.sa
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                                    <Phone className="text-white text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">{t("contact.phone")}</h3>
                                    <a href="tel:+966555555555" dir="ltr" className="text-jbrown-400 hover:text-white">
                                        +966 55 555 5555
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <a 
                                href="https://www.snapchat.com/add/jahrksa" 
                                className="bg-white/10 text-white rounded-xl w-10 h-10 flex items-center justify-center hover:bg-white/20 transition-colors" 
                                target="_blank" 
                                rel="noopener"
                                aria-label="Follow us on Snapchat"
                            >
                                <Ghost className="text-xl" aria-hidden="true" />
                            </a>
                            <a 
                                href="https://twitter.com/JahrKSA" 
                                className="bg-white/10 text-white rounded-xl w-10 h-10 flex items-center justify-center hover:bg-white/20 transition-colors" 
                                target="_blank" 
                                rel="noopener"
                                aria-label="Follow us on Twitter"
                            >
                                <Twitter className="text-xl" aria-hidden="true" />
                            </a>
                            <a 
                                href="https://www.instagram.com/jahrksa/" 
                                className="bg-white/10 text-white rounded-xl w-10 h-10 flex items-center justify-center hover:bg-white/20 transition-colors" 
                                target="_blank" 
                                rel="noopener"
                                aria-label="Follow us on Instagram"
                            >
                                <Instagram className="text-xl" aria-hidden="true" />
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm">
                        <h2 className="text-3xl font-bold text-white mb-8">{t("contact.title")}</h2>
                        <form action="https://formsubmit.co/Info@jahr.sa" method="POST" className="space-y-4">
                            <input 
                                type="text" 
                                placeholder={t("contact.form.name")} 
                                className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-jbrown-400 border border-white/10 focus:outline-none focus:border-white/30" 
                            />
                            <input 
                                type="tel" 
                                dir={locale === 'ar' ? 'rtl' : 'ltr'}
                                placeholder={t("contact.form.phone")} 
                                className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-jbrown-400 border border-white/10 focus:outline-none focus:border-white/30" 
                            />
                            <input 
                                type="email" 
                                placeholder={t("contact.form.email")} 
                                className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-jbrown-400 border border-white/10 focus:outline-none focus:border-white/30" 
                            />
                            <textarea 
                                placeholder={t("contact.form.message")} 
                                rows={4} 
                                className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-jbrown-400 border border-white/10 focus:outline-none focus:border-white/30"
                            />
                            <Button size="lg" className="w-full rounded-xl bg-white text-jbrown-900 hover:bg-jbrown-100">
                                {t("contact.form.submit")}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Footer Copyright */}
            <div className="container mx-auto max-w-6xl px-4 py-8 mt-20 border-t border-white/10">
                <p className="text-center text-jbrown-400">
                    © {new Date().getFullYear()} Jahr. {t("footer.rights")}
                </p>
            </div>
            </div>
        </section>
    );
} 