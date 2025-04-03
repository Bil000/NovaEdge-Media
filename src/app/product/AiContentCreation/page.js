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
import { faComment, faRocket, faLightbulb, faClock, faBullseye, faBrain, faFilePen } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const features = [
    {
      icon: faComment,
      title: "Engaging Content Creation",
      description: "AI-powered tools and templates that help you craft engaging ad copy, social media posts, and emails that resonate with your audience.",
    },
    {
      icon: faRocket,
      title: "Maintain Brand Consistency",
      description: "Ensure your messaging stays consistent with AI-generated content that aligns with your brand’s tone and voice across all channels.",
    },
    {
      icon: faLightbulb,
      title: "Endless Creative Possibilities",
      description: "Generate fresh and exciting content ideas with AI, keeping your marketing campaigns dynamic and engaging.",
    },
    {
      icon: faClock,
      title: "Save Time, Maximize Impact",
      description: "Let AI handle the content creation process so you can focus on strategy and growing your business without losing time on repetitive tasks.",
    },
  ];

  const DemoFeatures = [
    {
      icon: faBullseye,
      title: "Content That Converts",
      description: "AI-powered content that grabs attention and drives action, ensuring your marketing is always on point.",
    },
    {
      icon: faBrain,
      title: "From Ideas to Impactful Campaigns",
      description: "Turn raw ideas into well-crafted posts, ads, and emails that connect with your audience, thanks to AI-driven content creation.",
    },
    {
      icon: faFilePen,
      title: "Effortless Content Creation",
      description: "Create high-quality, engaging content for posts, ads, and emails in a fraction of the time with AI that understands your audience's needs.",
    },
  ];

  const cardsData = [
    {
      title: "AI-Powered Content Creation:",
      highlightedText: "Transform Ideas into Engaging Content",
      description: "Creating high-quality content has never been easier. NovaEdge Media leverages AI to help marketers produce copy that resonates and drives results",
      features: [
        "Instantly generate engaging ad copy, social media posts, and emails",
        "Craft personalized content that speaks directly to your target audience",
        "Access ready-to-use templates tailored for your marketing needs",
      ],
      buttonText: "Book a Demo",
      buttonLink: "#demo",
      imageSrc: "../../ai-marketing-7.jpg",
      imageAlt: "AI-Powered Campaigns",
      reverseLayout: false,
    },
    {
      title: "AI-Enhanced Writing for Better Results:",
      highlightedText: "Boost Your Marketing with AI",
      description: "NovaEdge Media’s AI simplifies content creation, saving you time while producing high-quality copy that improves engagement and conversions",
      features: [
        "Save hours with AI-generated content that matches your brand's voice",
        "Produce content across all platforms with consistent messaging",
        "Improve engagement with AI-backed recommendations for tone and structure",
      ],
      buttonText: "Book a Demo",
      buttonLink: "#demo",
      imageSrc: "../../ai-marketing-8.jpg",
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
          tagline={"AI CONTENT CREATION"}
          subtext={"Leverage the Power of AI to Create Engaging,\nEffective Content That Resonates With Your Audience"}
        />
      </header>
      <main className="w-full">
        <FeatureSection features={features} />
        <FreeTrial DemoFeatures={DemoFeatures} />
        <FloatingCards
          imageSrc="../../ai-marketing-6.jpg"
          imageAlt="AI-Powered Marketing"
          topCard={{
            icon: faLightbulb,
            title: "AI That Inspires",
            description: "Stuck on ideas? NovaEdge Media suggests creative angles, fresh concepts, and engaging wording.",
            buttonText: "Learn More",
            buttonLink: "/creative-ideas",
          }}
          bottomCard={{
            icon: faBrain,
            title: "AI: Your Creative Partner",
            description: "Unlock ideas, improve your messaging, and craft winning content — all with the power of AI.",
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
