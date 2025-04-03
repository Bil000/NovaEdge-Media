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
import TwoColumnSection from "@components/TwoColumnSection/TwoColumnSection";
import { faChartBar, faChartPie, faClipboardList, faLightbulb, faChartLine, faFileInvoice } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const features = [
    {
      icon: faChartBar,
      title: "Instant Data Analysis",
      description: "Transform complex data into actionable insights, eliminating guesswork and manual effort.",
    },
    {
      icon: faChartPie,
      title: "Automated Reporting",
      description: "Receive AI-generated reports that summarize key metrics and highlight opportunities for growth.",
    },
    {
      icon: faClipboardList,
      title: "Strategic Decision-Making",
      description: "Make informed marketing choices with precise, AI-driven recommendations tailored to your campaigns.",
    },
    {
      icon: faLightbulb,
      title: "Seamless Data Integration",
      description: "Connect all your platforms effortlessly and get consolidated reports in one place.",
    },
  ];

  const DemoFeatures = [
    {
      icon: faChartLine,
      title: "Effortless Performance Insights",
      description: "AI-generated reports highlight what’s working and where to improve—no more spreadsheets!",
    },
    {
      icon: faFileInvoice,
      title: "Clear, Actionable Data",
      description: "Turn analytics into concrete steps that drive results, ensuring smarter marketing decisions.",
    },
    {
      icon: faChartPie,
      title: "Time-Saving Automation",
      description: "Eliminate the hassle of manual reporting—let AI organize, analyze, and present your key metrics.",
    },
  ];

  const cardsData = [
    {
      title: "From Raw Data to Actionable Insights:",
      highlightedText: "AI-Powered Marketing Analytics",
      description: "Stop struggling with overwhelming spreadsheets. NovaEdge Media provides clear, data-driven recommendations instantly",
      features: [
        "Instant analysis of campaign performance and audience behavior",
        "Automated reports summarizing key insights and optimization opportunities",
        "AI-powered guidance for data-driven marketing decisions",
      ],
      buttonText: "Book a Demo",
      buttonLink: "#demo",
      imageSrc: "../../ai-marketing-15.jpg",
      imageAlt: "AI-Driven Reports",
      reverseLayout: false,
    },
    {
      title: "Smarter Decisions:",
      highlightedText: "Data-Driven Marketing",
      description: "Turn insights into action with automated reports and clear, strategic recommendations",
      features: [
        "Save hours by automating data collection and analysis",
        "Get real-time insights on what’s working and where to improve",
        "Make confident decisions backed by AI-powered reports",
      ],
      buttonText: "Book a Demo",
      buttonLink: "#demo",
      imageSrc: "../../ai-marketing-16.jpg",
      imageAlt: "Marketing Analytics",
      reverseLayout: true,
    },
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
        @media (max-width: 500px) {
          .card1 {
            padding-bottom: 0.2rem;
          }
        }
        @media (max-width: 500px) {
          .card2 {
            padding-top: 0.2rem;
          }
        }
        `}
      </style>
      <header className="h-screen md:headerCardSize w-full px-4 md:px-0 flex-col flex relative content-center justify-center">
        <NavBar />
        <HeroSection
          tagline={"Actionable Reports & Analytics"}
          subtext={"From Data Chaos to Clear, Game-Changing Decisions\n—Effortlessly Turn Reports & Analytics Into Action"}
        />
      </header>
      <main className="w-full">
        <FeatureSection features={features} />
        <FreeTrial DemoFeatures={DemoFeatures} />
        <FloatingCards
          imageSrc="../../ai-marketing-14.jpg"
          imageAlt="AI-Driven Reports"
          topCard={{
            icon: faChartLine,
            title: "Smarter Marketing Decisions",
            description: "Get instant AI-powered recommendations to optimize your campaigns.",
            buttonText: "Learn More",
            buttonLink: "/smart-decisions",
          }}
          bottomCard={{
            icon: faChartBar,
            title: "Effortless Data Analysis",
            description: "Transform raw numbers into meaningful strategies with AI-driven insights.",
            buttonText: "Get Started",
            buttonLink: "/data-analysis",
          }}
        />
        <TwoColumnSection cards={cardsData} />
        <div className="w-full h-[10px] bg-gradient-to-t from-gray-900 to-blue-50"></div>
        <Testimonials />
        <CTASection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
