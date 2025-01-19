import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import { setRequestLocale } from "next-intl/server";
import ContactFooter from "@/components/sections/contact-footer";
import { Providers } from "@/components/providers";

export default function Page() {
    return (
        <Providers>
            <div className="min-h-screen">
                <Hero />
                <About />
                <Services />
                <ContactFooter />
            </div>
        </Providers>
    );
}
