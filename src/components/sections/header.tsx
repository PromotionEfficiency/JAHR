"use client";

import { useTranslations } from "next-intl";
import { ModeToggle } from "@/components/mode-toggle";
import { LocaleToggle } from "@/components/locale-toggle";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/img/logo.png";

function Header() {
    const t = useTranslations();

    return (
        <header className="relative">
            <div className="bg-gradient-to-r from-jbrown-800 dark:from-jgreen-500 to-jbrown-500 dark:to-jgreen-400 h-2"></div>
            <nav className="container mx-auto max-w-6xl flex items-center justify-between py-4 px-2 lg:px-0">
                <div className="flex items-center gap-8">
                    <Link href="/" className="navbar-brand">
                        <Image src={logo} alt="Jahr Logo" className="" width={120} height={40} priority />
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        <Link href="#services" className="text-white hover:opacity-80 transition-opacity">
                            {t("nav.services")}
                        </Link>
                        <Link href="#contact" className="text-white hover:opacity-80 transition-opacity">
                            {t("nav.contact")}
                        </Link>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <LocaleToggle />
                    <ModeToggle />
                </div>
            </nav>
        </header>
    );
}

export default Header;
