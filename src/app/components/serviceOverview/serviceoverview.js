"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import navigation styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faGears, faCopy, faCrosshairs, faChartLine, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function Services() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Track screen size on mount
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 770);
    };

    handleResize(); // Set initial screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener
    };
  }, []);

  const services = [
    { icon: faChartSimple, title: "Smarter Campaigns with Data", description: "Learns from past performance to refine and optimize future campaigns for better results." },
    { icon: faGears, title: "Marketing Helper Extension", description: "Provides real-time AI-driven tips and personalized suggestions to improve your content and campaigns across all platforms." },
    { icon: faCopy, title: "AI-Powered Content Creation", description: "Generates ad copy, social media posts, and emails tailored to your audience." },
    { icon: faCrosshairs, title: "Deep Audience Insights", description: "Identifies the most valuable customers and segments to target for maximum impact." },
    { icon: faChartLine, title: "Actionable Reports & Analytics", description: "Turn complex data into clear, actionable recommendations so you can make confident, informed decisions." },
    { icon: faGlobe, title: "Seamless Website Integration", description: "Connect NovaEdge Media to your client's website easily to collect leads, manage chats, and track campaigns—all in one spot." }
  ];

  return (
    <section
      className="md:rounded-b-3xl bg-gray-900 text-white py-16 pt-6 pb-8"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-6xl px-4 md:mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-6">Smarter Marketing with AI</h2>
        <p className="text-lg mb-12">
          NovaEdge Media is your top AI helper for digital marketing. It’s made to empower you. Our tool boosts efficiency and performance.
          It refines ad precision, automates client contact, and softens your advertising process.
          This provides a simple way for you to grow and create a big impact.
        </p>
      </motion.div>

      {isSmallScreen ? (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="px-4 sm:px-6"
        >
          <Swiper
            modules={[Pagination, Autoplay, Navigation]} // Added Navigation module
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={{ clickable: true }} // Enable navigation arrows
            className="max-w-lg mx-auto z-1 px-4 sm:px-6"
          >
            {services.map((service, index) => (
              <SwiperSlide
                key={index}
                className="flex content-center text-center bg-gray-800 p-6 rounded-2xl shadow-lg"
                style={{ height: "320px" }}
              >
                <FontAwesomeIcon className="text-6xl mb-4" icon={service.icon} />
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      ) : (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl px-4 mx-auto"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="shadow-lg text-center bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 hover:scale-105 duration-300"
            >
              <FontAwesomeIcon className="text-4xl md:text-6xl p-6" icon={service.icon} />
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </motion.div>
      )}

      {/* Pagination bullets */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="swiper-pagination swiper-pagination-white mt-4"
      ></motion.div>
    <div className="mx-auto mt-12 mb-6 flex items-center justify-center flex-col md:flex-row">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >  
            <button
              className="bg-yellow-400 mb-4 md:mb-0 shadow-md shadow-yellow-900 w-[9.5em] text-gray-900 px-6 py-3 text-lg font-semibold rounded-full hover:bg-yellow-500 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 w-[300px]"  // Fixed width using Tailwind
            >
              <a href="#">Get Started</a>
            </button>
            </motion.div>
            <div className="w-4 px-2"></div>
            <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <button
              className="bg-blue-800 shadow-lg w-[9.5em] px-6 py-3 text-lg font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 w-[300px]"  // Fixed width using Tailwind
            >
              <a href="#">Book a Demo</a>
            </button>
            </motion.div>
      </div>
    </section>
  );
}