'use client'
import HeroSection from "@/app/components/heroSection/herosection"
import NavBar from "@/app/components/navBar/nav";
import { motion } from "framer-motion";
import TwoColumnSection from "@/app/components/TwoColumnSection/TwoColumnSection";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

const features = [
    {
      title: "1. Connect Your Website",
      highlightedText: "Go To Dashboard > Integrations",
      description: `Let’s get your website connected so NovaEdge can start tracking visitors, learning what works, and helping you convert more leads — automatically.`,
      features: [
        "🔧 How to do it:",
        "Choose your platform (WordPress, Shopify, Webflow, etc.)",
        `Follow the simple instructions to add your NovaEdge Tracking Code\n(No coding required – we guide you step by step)`,
        "Once added, click Verify Connection to activate tracking",
        //Dropdown "pro tip" with instructions to send to developer
      ],
      proTipText : "If you're not sure how to do this, don’t worry — you can chat with our team to guide you through it. Done! You’re now ready to let NovaEdge start learning from your traffic and helping you grow smarter.",
      buttonText: "Book a Demo",
      buttonLink: "#demo",
      imageSrc: "../../ai-marketing-7.jpg", // video explaining how to connect the website
      imageAlt: "AI-Powered Campaigns",
      dropdownId: "dropdown1",
      arrowId: "arrow1",
      isHidden: false,
      reverseLayout: false,
    },
    {
      title: "2. Set Up Your First Campaign",
      highlightedText: "Go To Campaigns > New Campaign",
      description: `NovaEdge Media does the hard work — you just tell it what you want to achieve.`,
      features: [
        "🔧 How to do it:",
        "Choose your goal (Leads, Sales, Engagement, etc.)",
        `Let NovaEdge:
         - Find the right audience for you
         - Generate smart ad creatives (or optionally upload your own)
         - Set the budget and optimize spend automatically`,
        //Dropdown "pro tip" with instructions to send to developer
      ],
      proTipText : "You don’t have to waste hours on manual tweaks — NovaEdge handles the complexity and keeps improving results in the background, so you can focus on strategy and creative direction.",
      buttonText: "Book a Demo",
      buttonLink: "#demo",
      imageSrc: "../../ai-marketing-7.jpg", // video explaining how to connect the website
      imageAlt: "AI-Powered Campaigns",
      dropdownId: "dropdown2",
      arrowId: "arrow2",
      isHidden: false,
      reverseLayout: true,
    },
    {
      title: "3. Activate Your Helper",
      highlightedText: "Go To Campaigns > New Campaign",
      description: `The NovaEdge Media is your on-demand marketing brain — ready to support your strategy, improve your campaigns, and save you hours of manual work`,
      features: [
        "🔧 How to do it:",
        `On your Dashboard, look for the ${<FontAwesomeIcon icon={faRobot} />} on the navigation bar`,
        `Click on the NovaEdge Assistant icon`,
        "Review recommendations, apply them instantly, and fine-tune them to match your style"
        //Dropdown "pro tip" with instructions to send to developer
      ],
      proTipText : "No more bouncing between tabs or second-guessing what to test next — the Assistant keeps your workflow sharp and momentum high.",
      buttonText: "Book a Demo",
      buttonLink: "#demo",
      imageSrc: "../../ai-marketing-7.jpg", // video explaining how to connect the website
      imageAlt: "AI-Powered Campaigns",
      dropdownId: "dropdown3",
      arrowId: "arrow3",
      isHidden: false,
    },
    {
      title: "4. Watch Insights & Let NovaEdge Improve",
      highlightedText: "Go To Reports > Insights",
      description: `NovaEdge continuously analyzes your data, gives you clear insights, and makes automatic adjustments to boost performance`,
      features: [
        "🔧 How to do it:",
        "Toggle Smart Optimization to ON",
        "Choose what NovaEdge should handle: budget shifts, ad tweaks, or audience updates",
        "Pick your mode: Automatic or Review Before Applying",
        //Dropdown "pro tip" with instructions to send to developer
      ],
      proTipText : "Your campaigns keep getting better in the background, while you stay focused on big-picture strategy. Done! NovaEdge is now actively optimizing your campaigns.",
      buttonText: "Book a Demo",
      buttonLink: "#demo",
      imageSrc: "../../ai-marketing-7.jpg", // video explaining how to connect the website
      imageAlt: "AI-Powered Campaigns",
      dropdownId: "dropdown4",
      arrowId: "arrow4",
      isHidden: false,
      reverseLayout: true,
    },
]

export default function Home () {
    return (
        <>
            <header
                id="header"
                className="w-full flex-col flex relative justify-center md:rounded-3xl md:mb-2 xl:mb-4 overflow-hidden"
            >
                <motion.div 
                    className="absolute top-0 left-0 w-full h-full bg-[url('https://res.cloudinary.com/dytmmuosl/image/upload/v1746176579/AI_Video_Generators_ty8xko.png')] bg-cover bg-fixed opacity-20"
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
            <main className="w-full">
              <TwoColumnSection cards={features} />
            </main>
        </>
    );
}