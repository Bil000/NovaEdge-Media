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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faBullseye, faScaleBalanced, faClipboardCheck, faSquareCheck } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const features = [
    {
      icon: faChartSimple,
      title: "Learns from Past Campaigns",
      description: "The AI analyzes previous marketing campaigns to identify trends, patterns, and successful strategies.",
    },
    {
      icon: faBullseye,
      title: "Optimizes Future Campaigns",
      description: "Automatically applies those insights to improve ad performance, audience targeting, and content strategies.",
    },
    {
      icon: faScaleBalanced,
      title: "Reallocates Budget Efficiently",
      description: "The AI adjusts your budget in real-time, shifting funds to the highest-performing ads for maximum ROI.",
    },
    {
      icon: faClipboardCheck,
      title: "Reduces The Manual Effort",
      description: "By automating these data-driven decisions, marketers save time and can focus on what matters.",
    },
  ];

  const DemoFeatures = [
    {
      icon: faSquareCheck,
      title: "AI Writing in Real Time",
      description: "Watch as AI crafts compelling headlines, descriptions, and CTAs that resonate with your audience.",
    },
    {
      icon: faSquareCheck,
      title: "Budget Optimization on Autopilot",
      description: "See how NovaEdge Media reallocates your budget for maximum ROI without manual effort.",
    },
    {
      icon: faSquareCheck,
      title: "Insights that Drive Results",
      description: "Track campaign performance with clear insights that guide better decisions.",
    },
  ];

  const cardsData = [
    {
      title: "From Data to Winning:",
      highlightedText: "Smarter Campaigns",
      description: "Digital marketing is evolving, and for marketing campaigns, the change wouldn't be different.",
      features: [
        "Use past data to make smarter campaign decisions.",
        "Automate your campaigns to adapt to new trends.",
        "Leverage AI insights to predict audience behavior and plan your next steps.",
      ],
      buttonText: "Book a Demo",
      buttonLink: "#demo",
      imageSrc: "../../ai-marketing-4.jpg",
      imageAlt: "AI-Powered Campaigns",
      reverseLayout: false,
    },
    {
      title: "Easy Improvement:",
      highlightedText: "AI-Enhanced Campaigns",
      description: "NovaEdge Media simplifies your marketing efforts, letting AI handle the heavy lifting so you can focus on strategy and creativity.",
      features: [
        "Gain clear insights into what works and what doesn't.",
        "AI improves your campaigns, so you spend your budget where it counts.",
        "Turn data into simple steps that improve your marketing results.",
      ],
      buttonText: "Book a Demo",
      buttonLink: "#demo",
      imageSrc: "../../ai-marketing-3.jpg",
      imageAlt: "AI-Driven Marketing Insights",
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
        @keyframes float-from-left {
          0% {
            transform: translate(-100%, 20%) rotate(-5deg);
            opacity: 0;
          }
          100% {
            transform: translate(0, 0) rotate(0);
            opacity: 1;
          }
        }
        `}
      </style>
      <header className="h-screen md:headerCardSize w-full px-4 md:px-0 flex-col flex relative content-center justify-center">
        <NavBar />
        <HeroSection
          tagline={"SMARTER CAMPAIGNS WITH DATA"}
          subtext={"Leverage AI To Analyze Your Past Campaigns And\nImprove Your Future Results Automatically"}
        />
      </header>
      <main className="w-full">
        <FeatureSection features={features} />
        <FreeTrial DemoFeatures={DemoFeatures} />
        <FloatingCards
          imageSrc="../../ai-marketing-5.jpg"
          imageAlt="AI-Powered Marketing"
          topCard={{
            icon: faSquareCheck,
            title: "Actionable Reports",
            description: "Get clear insights from your campaign data to make quick, smart decisions.",
            buttonText: "Learn More",
            buttonLink: "/actionable-reports",
          }}
          bottomCard={{
            icon: faSquareCheck,
            title: "Data-Backed Decisions",
            description: "Use data to guide your marketing choices, ensuring more accurate and successful campaigns.",
            buttonText: "Get Started",
            buttonLink: "/data-backed-decisions",
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