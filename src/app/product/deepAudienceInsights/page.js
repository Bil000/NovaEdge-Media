"use client"
import NavBar from "@components/navBar/nav";
import HeroSection from "@components/heroSection/herosection";
import Footer from "@components/footer/footer";
import FAQ from "@components/FAQ/FAQ";
import CTASection from "@components/finalCTA/finalCTA";
import Testimonials from "@/app/components/testimonials/testimonials";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FeatureSection from "@/app/components/featuresSection/featuresSection";
import FreeTrial from "@/app/components/freeTrialSection/freetrialsection";
import FloatingCards from "@/app/components/floatingCards/floatingcards";
import TwoColumnSection from "@/app/components/TwoColumnSection/TwoColumnSection";
import { faMagnifyingGlassLocation, faBullseye, faBan, faRankingStar, faCube, faChartDiagram, faMagnifyingGlassDollar } from '@fortawesome/free-solid-svg-icons';


export default function Home() {
  const features = [
    {
      icon: faMagnifyingGlassLocation,
      title: "Smarter Targeting",
      description: "Pinpoint your most valuable customers and focus your efforts where they matter most."
    },
    {
      icon: faBan,
      title: "Noise Reduction",
      description: "Filter out bots, irrelevant users, and low-value audiences for cleaner data."
    },
    {
      icon: faRankingStar,
      title: "Data-Driven Segmentation",
      description: "Group your audience by behaviors and preferences to enhance targeting."
    },
    {
      icon: faBullseye,
      title: "Precision Campaigns",
      description: "Refine your strategy with insights that improve engagement and boost results."
    }
  ];
  const DemoFeatures = [
    {
      icon: faCube,
      title: "Filter the Noise, Find the Gold",
      description: "Cut through bots, random clicks, and irrelevant users — connect only with your real audience.",
    },
    {
      icon: faBullseye,
      title: "Laser-Focused Targeting",
      description: "Stop wasting budget — reach the people who truly matter with pinpoint accuracy.",
    },
    {
      icon: faChartDiagram,
      title: "Data That Thinks Like a Marketer",
      description: "Uncover trends, behaviors, and patterns to refine your strategy and maximize impact.",
    },
  ];
  const cardsData = [
    {
      title: "From Data to Winning:",
      highlightedText: "AI-Driven Audience Insights",
      description: "Understanding your audience has never been easier — NovaEdge Media's AI uncovers what truly drives your best customers",
      features: [
        "Refine your targeting with data-driven audience segmentation",
        "Automate audience analysis for better engagement and performance",
        "Leverage AI to filter out irrelevant users and enhance targeting"
      ],
      buttonText: "Book a Demo",
      buttonLink: "#demo",
      imageSrc: "../../ai-marketing-12.jpg",
      imageAlt: "AI-Powered Campaigns",
      reverseLayout: false
    },
    {
      title: "Easy Improvement:",
      highlightedText: "AI-Powered Audience Segmentation",
      description: "NovaEdge Media's Deep Audience Insights helps you target precisely and engage more effectively with data-driven strategies",
      features: [
        "Filter out noise and focus on high-value segments",
        "Maximize campaign impact by zeroing in on the most relevant audience",
        "Smarter Targeting, Better Results"
      ],
      buttonText: "Book a Demo",
      buttonLink: "#demo",
      imageSrc: "../../ai-marketing-13.jpg",
      imageAlt: "AI-Driven Marketing Insights",
      reverseLayout: true
    }
  ];
  

  return (
    <div className=" w-full bg-[url('/headergif1.gif')]" style={{backgroundSize: "cover"}}>
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
        <HeroSection tagline={"Deep Audience Insights"}  
                     subtext={" Deep Audience Insights — Segments your audience based on behaviors and preferences,\nimproving targeting for future campaigns"} 
         />
      </header>
      <main className="w-full">
        <FeatureSection features={features} />
        <FreeTrial DemoFeatures={DemoFeatures} />
        <FloatingCards 
          imageSrc="../../ai-marketing-11.jpg"
          imageAlt="AI-Powered Marketing"
          topCard={{
            icon: faMagnifyingGlassDollar,
            title: "Audience Insights That Lead the Way",
            description: "Tired of wasting time on the wrong audience? NovaEdge Media reveals who truly matters",
            buttonText: "Learn More",
            buttonLink: "/audience-insights"
          }}
          bottomCard={{
            icon: faBullseye,
            title: "Precision Targeting with AI",
            description: "Looking for better engagement? NovaEdge Media segments your audience with accuracy",
            buttonText: "Get Started",
            buttonLink: "/targeting"
          }}
        />
        <TwoColumnSection cards={cardsData} />
        <div className="w-full h-[10px] bg-gradient-to-t from-gray-900 to-blue-50 "></div>              
        <Testimonials />
        <CTASection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
