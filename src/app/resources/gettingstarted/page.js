'use client'
import HeroSection from "@/app/components/heroSection/herosection"
import NavBar from "@/app/components/navBar/nav";
import { motion } from "framer-motion";
export default function Home () {
    return (
        <>
            <header
                id="header"
                className="w-full flex-col flex relative justify-center md:rounded-3xl md:mb-2 xl:mb-4 overflow-hidden"
            >
                <motion.div 
                    className="absolute top-0 left-0 w-full h-full bg-[url('/herosection-image.jpg')] bg-cover bg-fixed opacity-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    transition={{ duration: 1.5 }}
                />
                <div className="relative z-10">
                <NavBar />
                <HeroSection
                    tagline={"Getting Started\nwith NovaEdge Media"}
                    subtext={`Welcome To NovaEdge Media, Your AI-Powered Marketing Assistant\nDesigned To Supercharge Marketing Efforts. Follow This Quick Guide\nTo Get Up And Running In Just A Few Minutes`}
                    CTA="Book a Demo"
                />
                </div>
            </header>
        </>
    );
}