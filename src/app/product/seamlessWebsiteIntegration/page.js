"use client";
import NavBar from "@components/navBar/nav";
import HeroSection from "@components/heroSection/herosection";
import Footer from "@components/footer/footer";
import FAQ from "@components/FAQ/FAQ";
import CTASection from "@components/finalCTA/finalCTA";
import Testimonials from "@/app/components/testimonials/testimonials";
import FeatureSection from "@/app/components/featuresSection/featuresSection";
import FreeTrial from "@/app/components/freeTrialSection/freetrialsection";
import FloatingCards from "@/app/components/floatingCards/floatingcards";
import TwoColumnSection from "@/app/components/TwoColumnSection/TwoColumnSection";
import { faGlobe, faLink, faPlug, faDatabase, faChartBar, faRocket, faLightbulb } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const features = [
    {
      icon: faGlobe,
      title: "Effortless Website Connection",
      description: "Seamlessly integrate NovaEdge Media with your website to track visitor behavior and optimize engagement.",
    },
    {
      icon: faLink,
      title: "Lead Capture & Management",
      description: "Automatically collect and organize leads, ensuring your business never misses an opportunity to grow.",
    },
    {
      icon: faPlug,
      title: "Real-Time Data Sync",
      description: "Stay updated with instant insights on visitor interactions, campaign performance, and user behavior.",
    },
    {
      icon: faDatabase,
      title: "Seamless CRM Integration",
      description: "Connect effortlessly with your favorite CRM and marketing tools to streamline data and workflows.",
    },
  ];

  const DemoFeatures = [
    {
      icon: faChartBar,
      title: "Instant Website Performance Insights",
      description: "Track key website metrics and make data-driven decisions without manual effort.",
    },
    {
      icon: faRocket,
      title: "Automated Lead Management",
      description: "Capture and nurture leads effortlessly with AI-driven automation and smart tracking.",
    },
    {
      icon: faLightbulb,
      title: "Automated Data Collection",
      description: "Say goodbye to manual tracking—let AI gather, analyze, and optimize your marketing efforts.",
    },
  ];

  const cardsData = [
    {
      title: "Seamless Website Integration:",
      highlightedText: "Optimize Engagement with AI",
      description: "Effortlessly track visitors, capture leads, and improve your website’s performance with AI-powered insights",
      features: [
        "Automatically collect and analyze website interactions in real time",
        "Enhance user engagement with AI-driven recommendations",
        "Seamlessly integrate with CRM and marketing platforms",
      ],
      buttonText: "Book a Demo",
      buttonLink: "#demo",
      imageSrc: "../../ai-marketing-18.jpg",
      imageAlt: "Website Integration",
      reverseLayout: false,
    },
    {
      title: "Turn Visitors into Customers:",
      highlightedText: "Smart Data for Better Conversions",
      description: "Leverage AI-driven insights to understand visitor behavior and optimize your website for higher conversion rates",
      features: [
        "Track key user actions and identify high-intent visitors",
        "Receive AI-powered suggestions to improve site performance",
        "Connect effortlessly with chatbots and automated follow-ups",
      ],
      buttonText: "Get Started",
      buttonLink: "#demo",
      imageSrc: "../../ai-marketing-12.jpg",
      imageAlt: "Smart Website Optimization",
      reverseLayout: true,
    }
  ];
  

  return (
    <div className="w-full bg-[url('/headergif1.gif')]" style={{ backgroundSize: "cover" }}>
      <style>
        {` 
        .FAQ {
          background-color: rgb(9, 12, 18);
        }
        .CTA, .footer {
        border-radius: 0;
        }
        `}
      </style>
      <header className="h-screen md:headerCardSize w-full px-4 md:px-0 flex-col flex relative content-center justify-center">
        <NavBar />
        <HeroSection
          tagline={"Seamless Website Integration"}
          subtext={"Effortlessly Connect, Track, and Optimize\n— AI-Powered Insights for Maximum Website Performance"}
        />
      </header>
      <main className="w-full">
        <FeatureSection features={features} />
        <FreeTrial DemoFeatures={DemoFeatures} />
        <FloatingCards
          imageSrc="../../ai-marketing-17.jpg"
          imageAlt="AI-Powered Website Optimization"
          topCard={{
            icon: faPlug,
            title: "Smart Website Connection",
            description: "Sync your site with AI to capture insights and improve engagement.",
            buttonText: "Learn More",
            buttonLink: "/website-integration",
          }}
          bottomCard={{
            icon: faChartBar,
            title: "Real-Time Visitor Analytics",
            description: "Track and analyze website performance instantly with AI-powered reports.",
            buttonText: "Get Started",
            buttonLink: "/analytics",
          }}
        />
        <TwoColumnSection cards={cardsData} />
        <Testimonials />
        <CTASection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
