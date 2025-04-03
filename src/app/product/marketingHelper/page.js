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
import { faSquarePen, faBullseye, faRocket, faFilePen, faMagnifyingGlassChart, faChartSimple, faLightbulb, faStar, faChartLine } from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  const features = [
    {
      icon: faSquarePen,
      title: "Real-Time Content Optimization",
      description: "Get instant tips to enhance your content's tone, structure, and engagement, ensuring your message resonates with your audience.",
    },
    {
      icon: faBullseye,
      title: "Personalized Campaign Insights",
      description: "Receive tailored suggestions based on your brand's performance, helping you refine strategies and improve your marketing efforts.",
    },
    {
      icon: faRocket,
      title: "Advanced Strategies & Advice",
      description: "Access advanced tactics and actionable insights that fine-tune your campaigns, boost engagement, and optimize audience targeting.",
    },
    {
      icon: faFilePen,
      title: "Content Quality & Readability",
      description: "Improve grammar, spelling, and overall content quality with quick feedback and suggestions to make your marketing more effective.",
    },
  ];

  const DemoFeatures = [
    {
      icon: faMagnifyingGlassChart,
      title: "Instant Content Optimization",
      description: "Get real-time tips to refine tone, structure, and engagement as you write, making every word work harder.",
    },
    {
      icon: faChartSimple,
      title: "Tailored Campaign Insights",
      description: "No guesswork—receive personalized insights and recommendations that drive better results for your brand.",
    },
    {
      icon: faLightbulb,
      title: "Advanced Strategies for Growth",
      description: "Unlock expert strategies to optimize your campaigns and achieve maximum impact across all platforms.",
    },
  ];

  const cardsData = [
    {
      title: "From Data to Winning:",
      highlightedText: "AI-Driven Marketing Insights",
      description: "Elevate your marketing efforts with real-time AI tips and personalized strategies that improve your content and campaigns instantly",
      features: [
        "Instant feedback to improve your content's tone, structure, and engagement",
        "Personalized recommendations based on your brand’s performance and style",
        "Advanced strategies for optimizing campaigns across all platforms",
      ],
      buttonText: "Book a Demo",
      buttonLink: "#demo",
      imageSrc: "../../ai-marketing-10.jpg",
      imageAlt: "AI-Powered Campaigns",
      reverseLayout: false,
    },
    {
      title: "Easy Improvement:",
      highlightedText: "Campaign Optimization",
      description: "Enhance your marketing with actionable insights and expert advice that drive better results",
      features: [
        "Refine your messaging with quick tips on grammar, spelling, and readability",
        "Boost audience targeting using personalized advice from real-time campaign data",
        "Increase engagement with content ideas and calls-to-action that resonate with your audience",
      ],
      buttonText: "Book a Demo",
      buttonLink: "#demo",
      imageSrc: "../../ai-marketing-1.jpg",
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
          tagline={"Marketing Helper Extension"}
          subtext={"Your Smart Partner for Unbeatable Campaigns!\nThe AI that powers your ideas and Boosts Your Results"}
        />
      </header>
      <main className="w-full">
        <FeatureSection features={features} />
        <FreeTrial DemoFeatures={DemoFeatures} />
        <FloatingCards
          imageSrc="../../ai-marketing-9.jpg"
          imageAlt="AI-Powered Marketing"
          topCard={{
            icon: faStar,
            title: "Unleash Creative Ideas",
            description: "NovaEdge Media sparks fresh concepts and catchy messaging to keep your content on point.",
            buttonText: "Learn More",
            buttonLink: "/creative-ideas",
          }}
          bottomCard={{
            icon: faChartLine,
            title: "AI for Smarter Campaigns",
            description: "Refine your messaging and boost engagement with AI-driven suggestions.",
            buttonText: "Get Started",
            buttonLink: "/smarter-campaigns",
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