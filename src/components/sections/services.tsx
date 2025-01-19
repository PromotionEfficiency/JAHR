"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent } from "../ui/card";
import { 
  Megaphone, 
  LightbulbIcon, 
  PenLine, 
  Share2, 
  Paintbrush, 
  Camera, 
  Laptop 
} from "lucide-react";
import React from "react";
import Pattern from "@/assets/img/pattern.svg";
import Image from "next/image";

interface ServiceItem {
    title: string;
    description: string;
    icon: React.ElementType;
}

const ICONS = {
  Megaphone,
  LightbulbIcon,
  PenLine,
  Share2,
  Paintbrush,
  Camera,
  Laptop
};

export default function Services() {
    const t = useTranslations();
    const services = t.raw("services.items") as ServiceItem[];

    return (
        <section id="services" className="relative py-20 bg-jbrown-400 dark:bg-jgreen-600 px-2 lg:px-0">
            <Image src={Pattern} alt="pattern"  className="absolute inset-0 h-full w-full top-10 left-10 right-10 bottom-10 opacity-40" />
            
            <div className="relative container mx-auto max-w-6xl">
                <h2 className="text-4xl font-bold text-jbrown-900 dark:text-white mb-8 text-center ">{t("services.title")}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="bg-white dark:bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
                            <CardContent className="p-6">
                                <div className="mb-4">
                                    {ICONS[service.icon as keyof typeof ICONS] && 
                                        React.createElement(ICONS[service.icon as keyof typeof ICONS], {
                                            className: "text-jbrown-800 dark:text-jgreen-800 text-[125px]"
                                        })
                                    }
                                </div>
                                <h3 className="text-xl font-semibold mb-4 text-jbrown-800 dark:text-jgreen-800">{service.title}</h3>
                                <p className="text-jbrown-800 dark:text-jgreen-700">{service.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
            
        </section>
    );
}
