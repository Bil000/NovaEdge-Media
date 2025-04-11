"use client"
import NavBar from "./components/navBar/nav";
import HeroSection from "./components/heroSection/herosection";
import ServiceOverview from "./components/serviceOverview/serviceoverview";
import WhyChooseUs from "./components/whyChooseUs/whychooseus";
import Testimonials from "./components/testimonials/testimonials";
import AIBenefits from "./components/effectiveOfAi/AIbenefits";
import Integrations from "./components/AIntregration/AIntegration";
import NovaEdgeStats from "./components/appresentation/apresentation";
import HowItWorks from "./components/stepByStep/howitworks";
import CTASection from "./components/finalCTA/finalCTA";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/footer/footer";
export default function Home() {
  return (
    <>
      <header
        id="header"
        className="w-full flex-col flex relative justify-center md:rounded-3xl md:mb-2 xl:mb-4 overflow-hidden"
      >
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://asset.cloudinary.com/dytmmuosl/7adebc03ef123b6dcf17a78eca7d2b2f"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        ></video>

        {/* Content on top of video */}
        <div className="relative z-10">
          <NavBar />
          <HeroSection
            tagline={"TRADITIONAL MARKETING IS HISTORY\nA NEW ERA HAS BEGUN"}
            subtext={"Revolutionize Marketing with the AI that Redefines Industry Standards"}
            CTA="Book a Demo"
          />
        </div>
      </header>
      <main className="w-full">
        <NovaEdgeStats />
        <ServiceOverview />
        <WhyChooseUs />
        <AIBenefits />
        <Integrations />
        <HowItWorks />
        <Testimonials />
        <CTASection />
        <FAQ />
      </main>
      <Footer />  
    </>
  );
}
