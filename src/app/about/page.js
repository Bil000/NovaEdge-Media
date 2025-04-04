"use client";
import NavBar from "@components/navBar/nav";
import Footer from "@components/footer/footer";
import FAQ from "@components/FAQ/FAQ";
import CTASection from "@components/finalCTA/finalCTA";
import Testimonials from "@/app/components/testimonials/testimonials";
import FeatureSection from "@/app/components/featuresSection/featuresSection";
import TwoColumnSection from "@/app/components/TwoColumnSection/TwoColumnSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faLightbulb, faClock, faBullseye, faBrain, faRocket, 
    faGlobe, 
    faRobot,  
    faPaintBrush, 
    faCogs, 
    faChartLine, faBolt, faShieldAlt, faArrowUpRightDots  } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

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
    <div className="w-full" >
      <style>
        {`
        #headerButtonDiv {
          display: none;

        }
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
      <header className="bg-gradient-to-b from-black via-gray-900 to-black md:rounded-3xl md:my-2 relative w-full min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-10 md:px-20 py-32 bg-black bg-opacity-80">
      <motion.div 
        className="absolute top-0 left-0 w-full h-full bg-[url('/future_city.jpg')] bg-cover bg-fixed opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
      />
        <NavBar />
        <div className="max-w-5xl mt-12">
            <h1 className="text-white text-xl sm:text-4xl md:text-5xl font-extrabold leading-snug sm:leading-tight">
            At <span className="text-primary">NovaEdge Media <FontAwesomeIcon icon={faRocket} /></span>, our mission is clear: to empower modern marketers to <span className="text-yellow-400">dominate the digital space <FontAwesomeIcon icon={faGlobe} /></span> with cutting-edge AI tools that think fast <FontAwesomeIcon icon={faRobot} />, learn faster <FontAwesomeIcon icon={faBrain} />, and never miss a beat <FontAwesomeIcon icon={faBullseye} />.
            <br className="hidden sm:inline" />
            We’re not just optimizing campaigns — we’re building a future where <span className="text-secondary">data meets creativity <FontAwesomeIcon icon={faPaintBrush} /></span>, automation fuels strategy <FontAwesomeIcon icon={faCogs} />, and marketers have the power to <span className="italic">outsmart, outperform, and outgrow <FontAwesomeIcon icon={faChartLine} /></span> the competition.
            </h1>
        </div>
      </header>
      <main className="w-full">
        <section className="h-[90vh] bg-cover md:rounded-3xl w-full bg-[url('/headergif.gif')]"></section>
        <section 
  className="relative w-full py-32 px-6 sm:px-12 md:px-20 flex flex-col md:flex-row items-center justify-between text-white overflow-hidden gap-10"
>
  {/* Floating Background Accents */}
  <div className="absolute top-10 left-10 w-24 h-24 bg-[#3c4d93] opacity-20 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute bottom-10 right-10 w-16 h-16 bg-[#d4af37] opacity-30 rounded-full blur-3xl animate-pulse"></div>

  {/* Founder Image and Info */}
  <motion.a 
    href="#founder" 
    className="group flex flex-col items-center text-center"
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
  >
    <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[#d4af37] shadow-lg mb-4 hover:scale-105 transition-transform duration-300">
      <img 
        src="#" 
        alt="Clebio de Souza" 
        className="w-full h-full object-cover"
      />
    </div>
    <p className="text-lg font-semibold text-[#d4af37]">Clebio de Souza</p>
    <p className="text-sm text-gray-300">Founder & CEO</p>
  </motion.a>

  {/* Content Container */}
  <div className="relative max-w-2xl">
    <motion.h2 
      className="text-3xl sm:text-5xl font-extrabold leading-snug text-[#d4af37]"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <FontAwesomeIcon icon={faShieldAlt} className="mr-2" />
      The Future is Here — And Marketers Will Lead It
    </motion.h2>

    <motion.p 
      className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 1 }}
    >
      <span className="text-[#3c4d93] font-bold underline decoration-[#d4af37]">NovaEdge Media</span> wasn’t just built to create another marketing tool — 
      it was born to solve a deeper problem: <span className="font-semibold text-[#d4af37]">the fear that marketers would be replaced </span> 
      in a world increasingly dominated by artificial intelligence.  
    </motion.p>

    <motion.p 
      className="mt-4 text-lg sm:text-xl text-gray-300 leading-relaxed"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 1 }}
    >
      Instead of resisting the future, we chose to <span className="text-[#d4af37] font-bold italic">reshape it</span>.  
      <FontAwesomeIcon icon={faBolt} className="text-[#3c4d93] mx-2" />  
      NovaEdge empowers marketers to embrace AI as their greatest advantage — not their competition.
    </motion.p>

    <motion.p 
      className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 1 }}
    >
      <FontAwesomeIcon icon={faLightbulb} className="text-[#d4af37] mr-2" />
      Founded in <span className="text-[#3c4d93] font-semibold">2025</span> by a former soldier turned entrepreneur, 
      NovaEdge began with a bold belief: that with the right AI by their side, marketers could do more than keep up —  
      <span className="italic text-[#d4af37]">they could lead.</span>
    </motion.p>

    <motion.p 
      className="mt-4 text-lg sm:text-xl text-gray-300 leading-relaxed"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 1 }}
    >
      We built an AI assistant that <FontAwesomeIcon icon={faRobot} className="text-[#3c4d93] mx-1" />  
      <span className="font-bold text-[#d4af37]">thinks like a marketer</span> and <span className="text-[#3c4d93] underline decoration-[#d4af37]">works like a machine</span>  
      <FontAwesomeIcon icon={faArrowUpRightDots} className="text-[#d4af37] mx-1" /> —  
      so creative minds can focus on strategy, storytelling, and growth, while automation handles the rest.
    </motion.p>
  </div>
</section>

        <FeatureSection features={features} />
        <TwoColumnSection cards={cardsData} />
        <div className="w-full h-[10px] bg-gradient-to-t from-gray-900 to-blue-50"></div>
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
