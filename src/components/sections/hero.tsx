"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import SpaceBackground from "../three/space-background";
import Header from "./header";

export default function Hero() {
    const t = useTranslations();

    return (
        <section className="relative text-white dark:text-white h-screen">
            
            <div className="relative  h-full w-full flex flex-col justify-start">
            <SpaceBackground />
                <div className="w-full">
                    <Header />
                </div>
                <div className="flex flex-col justify-center items-center h-full">
                    <div className="container mx-auto max-w-6xl relative z-20 text-center px-2 lg:px-0">
                        <h1 className="text-5xl md:text-7xl font-bold  mb-8">{t("hero.title")}</h1>
                        <p className=" text-xl md:text-2xl max-w-3xl mx-auto mb-12">{t("hero.description")}</p>
                        <Link
                            href="#services"
                            className="rounded-2xl 
                                        bg-jbrown-100 dark:bg-jgreen-800 
                                        text-lg 
                                        py-2 px-8 
                                        text-jbrown-900 dark:text-white
                                        hover:scale-105 dark:hover:bg-jgreen-900
                                        hover:bg-jbrown-100
                                        transition-all duration-300"
                        >
                            {t("hero.cta")}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
