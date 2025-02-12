"use client";

import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { Mail, Phone } from "lucide-react";

function Contact() {
    const t = useTranslations();

    return (
        <section id="contact" className="relative py-20 bg-jbrown-950 px-2 lg:px-0">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-4xl font-bold text-center mb-12 text-white">{t("contact.title")}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                                <Mail className="text-white text-xl" />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold">{t("contact.email")}</h3>
                                <a href="mailto:info@jahr.sa" className="text-jbrown-300 hover:text-white">
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
                                <a href="tel:+966555555555" dir="ltr" className="text-jbrown-300 hover:text-white">
                                    +966 55 555 5555
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <input type="text" placeholder={t("contact.form.name")} className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-jbrown-300 border border-white/20 focus:outline-none focus:border-white" />
                        <input type="tel" placeholder={t("contact.form.phone")} className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-jbrown-300 border border-white/20 focus:outline-none focus:border-white" />
                        <input type="email" placeholder={t("contact.form.email")} className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-jbrown-300 border border-white/20 focus:outline-none focus:border-white" />
                        <textarea placeholder={t("contact.form.message")} rows={4} className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-jbrown-300 border border-white/20 focus:outline-none focus:border-white"></textarea>
                        <Button size={"lg"} className="w-full rounded-xl bg-white text-jbrown-900 hover:bg-jbrown-100">
                            {t("contact.form.submit")}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
