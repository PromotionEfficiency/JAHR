"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import logo from "@/assets/img/logo.png";
import { Twitter, Instagram, Ghost } from "lucide-react";

function Footer() {
    const t = useTranslations();

    return (
        <footer className="relative bg-jbrown-900 py-8 px-2 lg:px-0">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <Image src={logo} alt="Jahr Logo" width={100} height={35} className="" />
                    </div>
                    <div className="flex gap-4">
                        <a
                            href="https://www.snapchat.com/add/jahrksa"
                            className="bg-jbrown-800 text-white 
                            rounded-xl w-8 h-8 
                            flex items-center justify-center 
                            hover:opacity-80 transition-opacity"
                            target="_blank"
                            rel="noopener"
                        >
                            <Ghost className="text-white text-xl" />
                        </a>
                        <a href="https://twitter.com/JahrKSA" className="bg-jbrown-800 text-white rounded-xl w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity" target="_blank" rel="noopener">
                            <Twitter className="text-white text-xl" />
                        </a>
                        <a href="https://www.instagram.com/jahrksa/" className="bg-jbrown-800 text-white rounded-xl w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity" target="_blank" rel="noopener">
                            <Instagram className="text-white text-xl" />
                        </a>
                    </div>
                </div>
                <div className="text-center mt-8 text-white">
                    <p>
                        © {new Date().getFullYear()} Jahr. {t("footer.rights")}
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
