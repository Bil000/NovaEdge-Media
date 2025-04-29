"use client";
import NavBar from "@components/navBar/nav";
import Footer from "@components/footer/footer";
import CTASection from "@components/finalCTA/finalCTA";
import FeatureSection from "@/app/components/featuresSection/featuresSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLightbulb, faBullseye, faBrain, faRocket, faGlobe, faRobot, faPaintBrush, faCogs, faChartLine, faBolt, faShieldAlt, faStarAndCrescent, faFilePen, faChartSimple, faMoneyBill1Wave  } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function Home() {
  const features = [
    {
      icon: faStarAndCrescent,
      title: "Smarter Campaigns Powered by Data & AI",
      description: "We combine performance data with real-time AI analysis to help you launch campaigns that learn, adapt, and win — faster than ever.",
    },
    {
      icon: faFilePen,
      title: "AI-Powered Content & Website Integration",
      description: "From scroll-stopping ads to SEO-optimized blogs, NovaEdge generates content that clicks — and connects directly with your website to convert traffic into leads.",
    },
    {
      icon: faChartSimple,
      title: "Personalized Insights & Real-Time Suggestions",
      description: "Get marketing tips that actually matter — tailored to your audience, your results, and your brand. It’s like having a strategist in your browser.",
    },
    {
      icon: faMoneyBill1Wave,
      title: "Optimized Budgets & Deep Targeting",
      description: "Automatically shift your ad spend toward what’s working, while laser-targeting your most valuable customers across platforms.",
    }]

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
      <NavBar />
      <header className="bg-gradient-to-b from-black via-gray-900 to-black md:rounded-3xl md:my-2 relative w-full min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-10 md:px-20 py-32 bg-black bg-opacity-80">
      <motion.div 
        className="absolute top-0 left-0 w-full h-full bg-[url('/future_city.jpg')] bg-cover bg-fixed opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
      />
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
          className="relative w-full py-32 px-6 sm:px-12 md:px-20 xl:text-left text-center flex flex-col xl:flex-row items-center justify-between text-white overflow-hidden gap-10"
        >
          {/* Floating Background Accents */}
          <div className="absolute top-10 left-10 w-24 h-24 bg-[#3c4d93] opacity-20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-[#d4af37] opacity-30 rounded-full blur-3xl animate-pulse"></div>

          {/* Founder Image and Info */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
                >
              <img
                src="../../clebioImage.jpg"
                alt="NovaEdge Media's Founder—Clebio"
                className="w-full max-w-md lg:max-w-lg object-cover mx-auto lg:mx-0 rounded-xl mt-6 lg:mt-0 shadow-lg lg:hover:shadow-2xl transition-all duration-500 transform lg:hover:scale-105 border border-gray-200"
              />
            <div className="w-full text-left absolute left-10 md:left-12 bottom-2">
            <p className="text-lg sm:text-xl font-semibold text-gray-300">Clebio de Souza</p>
            <p className="text-sm sm:text-lg">Founder & CEO</p>
            </div>
          </motion.div>

          {/* Content Container */}
          <div className="relative max-w-2xl ">
            <motion.h2 
              className="text-3xl lg:text-4xl font-extrabold leading-snug text-[#d4af37]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <FontAwesomeIcon icon={faShieldAlt} className="mr-2" />
              The Future is Here — And Marketers Will Lead It
            </motion.h2>

            <motion.p 
              className="mt-6 text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              <span className="text-[19px] font-bold ">NovaEdge Media</span> wasn’t just built to create another marketing tool — 
              it was born to solve a deeper problem: <span className="font-semibold text-[#d4af37]">the fear that marketers would be replaced </span> 
              in a world increasingly dominated by artificial intelligence.  
            </motion.p>

            <motion.p 
              className="mt-4 text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              Instead of resisting the future, we chose to <span className="text-[19px] italic">reshape it</span>.  
              NovaEdge Media empowers marketers to embrace AI as their greatest advantage — not their competition.
            </motion.p>

            <motion.p 
              className="mt-6 text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              <FontAwesomeIcon icon={faLightbulb} className="text-[#d4af37] mr-2" />
              Founded in <span className="text-[#d4af37] font-semibold">2024</span> by a former soldier turned entrepreneur, 
              NovaEdge Media began with a bold belief: that with the right AI by their side, marketers could do more than keep up —  
              <span className="font-bold text-[19px]">they could lead.</span>
            </motion.p>

            <motion.p 
              className="mt-4 text-lg  text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              We built an AI assistant that <span className="font-bold text-[#d4af37]">thinks like a marketer</span> and <span className="italic">works like a machine</span>  
              —  
              so creative minds can focus on strategy, storytelling, and growth, while automation handles the rest.
            </motion.p>
          </div>
        </section>
        <FeatureSection 
          features={features}
          title={
            <>
              <FontAwesomeIcon icon={faBolt} className="mr-2" />
              How We Help
            </>
          }
          subtitle={`NovaEdge Media is more than a tool\n—It's your marketing sidekick`}
        /> 
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
