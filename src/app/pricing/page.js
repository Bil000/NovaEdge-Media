"use client"
import NavBar from "@components/navBar/nav";
import HeroSection from "@components/heroSection/herosection";
import Footer from "@components/footer/footer";
import FAQ from "@components/FAQ/FAQ";
import CTASection from "@components/finalCTA/finalCTA";
import Testimonials from "../components/testimonials/testimonials";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight, faCheckCircle, faCubes, faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import { faCcMastercard, faCcPaypal, faCcStripe, faCcVisa } from "@fortawesome/free-brands-svg-icons";
import { useState } from 'react';

export default function Home() {
  const [isMonthly, setIsMonthly] = useState(true);
  const [toggleKey, setToggleKey] = useState(0);

  const handleToggle = (monthly) => {
    setIsMonthly(monthly);
    // Force re-render by changing key
    setToggleKey(prevKey => prevKey + 1);
  };

  const pricingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  // const handleToggle = (value) => {
  //   setTransitioning(true);
  //   setTimeout(() => {
  //     setIsMonthly(value);
  //     setTransitioning(false);
  //   }, 250); // Delay to allow whiteout effect
  // };  // Track if the user selected monthly or yearly
  return (
    <>
      <style>
        {`
          .CTA {
            border-radius: 0;

        }
          .footer {
            border-radius: 0;
          }  
          #headerButtonDiv {
            display: none;
        }
          .scroll-container { 
            padding-top: 0;
          }
          .heroSection {
            margin-top: 2rem;
        }
          .fade-out {
            opacity: 0;
            transition: opacity 0.3s ease-out, background-color 0.3s ease-out;
        }
         .fade-in {
            opacity: 1;
            transition: opacity 0.3s ease-in, background-color 0.3s ease-in;
        }
          #testimonials, .CTA, .footer {
            background-color: transparent;
        }
        `}
      </style>
      <NavBar />
      <div 
            className="absolute top-0 left-0 w-full h-full bg-[url('https://res.cloudinary.com/dytmmuosl/image/upload/v1746004498/phf3zx9l2owzb4rnqw3q.jpg')] bg-cover bg-fixed opacity-20"
            style={{ zIndex: -1 }}
          />
      <div className="w-full" style={{ zIndex: 1 }}>
          <header className="headerCardSize w-full flex-col flex relative content-center justify-center">
            <HeroSection tagline={"STRAIGHTFORWARD PRICES\n&\nPOWERFUL RESULTS"}  
                        subtext={"Get The Tools You Need To Elevate Your Marketing\nNo Hidden Fees, No Surprises. See Our Plans"} 
            />
          </header>
          <main className="w-full">

            <section
              className="md:rounded-t-md mx-[5px] text-center px-2 lg:px-6 pb-16"
            >
              <div className="p-6"></div>
              <style>{`li {display: inline}`}</style>
              
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2
                  className="mx-auto text-2xl md:text-3xl lg:text-4xl sm:whitespace-pre-wrap font-bold text-white p-6 drop-shadow bg-transparent border border-white"
                  style={{ maxWidth: "44rem" }}
                >
                  {"Choose Your Plan and Scale with AI"}
                </h2>
              </motion.div>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex rounded-3xl flex-wrap items-center justify-center py-8 lg:my-0 opacity-96"
              >
                {/* Toggle Button */}
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex items-center justify-center p-2 my-4"
                >
                  <div className="relative flex border rounded-full p-1 bg-gray-100 w-full max-w-[300px]">
                    <div
                      className={`absolute top-0 bottom-0 w-1/2 bg-blue-600 rounded-full transition-all duration-300 ${
                        isMonthly ? "left-0" : "left-1/2"
                      }`}
                    />
                    <button
                      className={`relative z-0 px-4 py-2 w-1/2 text-center font-semibold ${
                        isMonthly ? "text-white" : "text-black"
                      }`}
                      onClick={() => handleToggle(true)}
                    >
                      Monthly
                    </button>
                    <button
                      className={`relative z-0 px-4 py-2 w-1/2 text-center font-semibold ${
                        !isMonthly ? "text-white" : "text-black"
                      }`}
                      onClick={() => handleToggle(false)}
                    >
                      Yearly
                    </button>
                  </div>
                </motion.div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={toggleKey}
                    variants={pricingVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="grid lg:grid-cols-3 gap-4 p-4 items-stretch"
                  >
                    {/* Starter Plan */}
                    <motion.div
                      className="pricing-card font-light min-h-[30rem] flex flex-col text-left items-start w-full bg-white text-black pt-8 pb-14 px-8 shadow-xl"
                    >
                      {!isMonthly && (
                        <div className="bg-transparent p-2 text-center text-black border-black border-2 rounded-md font-semibold shadow-md">
                          Save 20%
                        </div>
                      )}
                      <div className="h-20 mb-4 w-full flex items-center justify-between flex-row text-3xl sm:text-4xl font-medium text-center">
                        <h3 className="mr-1">
                          Starter <span className="hidden xl:inline-block">Plan</span>
                        </h3>
                        <p className="text-2xl sm:text-3xl flex p-0 m-0">
                          {isMonthly ? "$39" : "$29"}
                          <span className="font-light text-sm p-0 m-0 sm:text-base self-start">
                            /month
                          </span>
                        </p>
                      </div>
                      <hr className="w-full bg-color-[#e8e3e3]" />
                      <div className="text-left w-full">
                        <p className="py-4 text-base sm:text-lg">
                          Enhance your marketing efforts using AI as a solo marketer or small business owner. Simple tools that lead to real results.
                        </p>
                        <button className="bg-transparent w-full font-semibold border border-black mb-4 md:mb-0 px-6 py-2 text-base sm:text-lg hover:border-yellow-500 hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105">
                          <a href="#">Start Free 7—Day Trial</a>
                        </button>
                        <h2 className="my-4 font-semibold text-lg">Starter Plan includes:</h2>
                        <ul className="flex flex-col w-full space-y-4">
                          <li className="text-base w-full">
                            <FontAwesomeIcon icon={faCheckCircle} /> 1 User Seat
                          </li>
                          <li className="text-base w-full">
                            <FontAwesomeIcon icon={faCheckCircle} /> AI Content Creation — Use AI tools and ready-to-go templates to generate ads, social media posts, and emails
                          </li>
                          <li className="text-base w-full">
                            <FontAwesomeIcon icon={faCheckCircle} /> Basic Reports — Simple reports that show what's working and what needs improvement
                          </li>
                          <li className="text-base w-full">
                            <FontAwesomeIcon icon={faCheckCircle} /> Basic Website Integration — Track website visitors and basic lead generation
                          </li>
                          <li className="text-base w-full">
                            <FontAwesomeIcon icon={faCheckCircle} /> 50 Content Generation Requests/Month
                          </li>
                          <li className="text-base w-full">
                            <FontAwesomeIcon icon={faCheckCircle} /> Marketer Helper Extension (Basic)
                          </li>
                          <li className="text-base w-full">
                            <ul className="flex flex-col w-full pl-5 space-y-2 text-sm">
                              <li className="w-full">
                                <FontAwesomeIcon icon={faHandPointRight} /> Quick tips on grammar, spelling, and readability
                              </li>
                              <li className="w-full">
                                <FontAwesomeIcon icon={faHandPointRight} /> Basic advice on improving calls-to-action and targeting your audience
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                    {/* Business Plan */}
                    <motion.div
                      className="font-light min-h-[30rem] flex flex-col text-left items-start w-full bg-white text-black pt-8 pb-14 px-8 shadow-xl"
                    >
                      {!isMonthly && (
                        <div className="bg-transparent p-2 text-center text-black border-black border-2 rounded-md font-semibold shadow-md">
                          Save 20%
                        </div>
                      )}
                      <div className="h-20 mb-4 w-full flex items-center justify-between flex-row text-3xl sm:text-4xl font-medium text-center">
                        <h3 className="mr-1">
                          Business <span className="hidden xl:inline-block">Plan</span>
                        </h3>
                        <p className="text-2xl sm:text-3xl flex">
                          {isMonthly ? "$59" : "$49"}
                          <span className="font-light text-sm sm:text-base self-start"> /month</span>
                        </p>
                      </div>
                      <hr className="w-full bg-color-[#e8e3e3]" />
                      <div className="text-left w-full">
                        <p className="py-4 text-base sm:text-lg">
                          Boost your marketing team with AI tools. Cut down on tasks and improve campaign success for larger businesses.
                        </p>
                        <button className="bg-transparent font-semibold w-full border border-black mb-4 md:mb-0 px-6 py-2 text-base sm:text-lg hover:border-yellow-500 hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105">
                          <a href="#">Start Free 7—Day Trial</a>
                        </button>
                        <h2 className="my-4 font-semibold text-lg">Everything in Starter, plus:</h2>
                        <ul className="flex flex-col w-full space-y-4">
                          <li className="text-base w-full">
                            <FontAwesomeIcon icon={faCheckCircle} /> 3 user seats
                          </li>
                          <li className="text-base w-full">
                            <FontAwesomeIcon icon={faCheckCircle} /> Campaign Optimization — AI learns from past campaigns to help improve future ones and adjust your budget to the highest performing Ads
                          </li>
                          <li className="text-base w-full">
                            <FontAwesomeIcon icon={faCheckCircle} /> Detailed Reports and Insights — Deeper insights on what's working and how to improve
                          </li>
                          <li className="text-base w-full">
                            <FontAwesomeIcon icon={faCheckCircle} /> Deep Audience Insights — Segments your audience based on behaviors and preferences, improving targeting for future campaigns
                          </li>
                          <li className="text-base w-full">
                            <FontAwesomeIcon icon={faCheckCircle} /> 150 content generation requests/month
                          </li>
                          <li className="text-base w-full">
                            <FontAwesomeIcon icon={faCheckCircle} /> Marketer Helper Extension (Advanced)
                          </li>
                          <li className="text-base w-full">
                            <ul className="flex flex-col w-full pl-5 space-y-2 text-sm">
                              <li className="w-full">
                                <FontAwesomeIcon icon={faHandPointRight} /> Tips to improve your tone, structure, and engagement
                              </li>
                              <li className="w-full">
                                <FontAwesomeIcon icon={faHandPointRight} /> Personalized marketing advice based on real-time campaign data
                              </li>
                              <li className="w-full">
                                <FontAwesomeIcon icon={faHandPointRight} /> Ideas for better content to boost results
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                    {/* Enterprise Plan */}
                    <motion.div
                      className="font-light min-h-[30rem] flex flex-col text-left items-start w-full bg-white text-black pt-8 pb-14 px-8 shadow-xl"
                    >
                      {!isMonthly && (
                        <div className="bg-transparent p-2 text-center text-black border-black border-2 rounded-md font-semibold shadow-md">
                          Save 20%
                        </div>
                      )}
                      <div className="w-full mb-4 h-20 flex items-center justify-between flex-row text-3xl sm:text-4xl font-medium text-center">
                        <h3 className="mr-1">
                          Enterprise <span className="hidden xl:inline-block">Plan</span>
                        </h3>
                        <div className="text-3xl sm:text-4xl flex">
                          <FontAwesomeIcon icon={faCubes} />
                          <p className="font-light self-start leading-none" style={{ fontSize: "0.90rem" }}>
                            <span className="p-0 m-0 block">Custom</span>
                            <span className="p-0 m-0 block">Pricing</span>
                          </p>
                        </div>
                      </div>
                      <hr className="w-full bg-color-[#e8e3e3]" />
                      <div className="text-left w-full">
                        <p className="py-4 text-base sm:text-lg">
                          Need a tailored solution for your team? Contact our sales today and discover how we can elevate your marketing today!
                        </p>
                        <button className="bg-blue-800 w-full text-white border border-blue mb-4 md:mb-0 px-6 py-2 text-base sm:text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105">
                          <a href="#">Contact Sales</a>
                        </button>
                        <h2 className="my-4 font-semibold text-lg">Everything in Business, plus:</h2>
                        <ul className="flex flex-col w-full space-y-4">
                          <li className="text-base w-full">
                            <FontAwesomeIcon icon={faCheckCircle} /> Customized User Seats
                          </li>
                          <li className="text-base w-full">
                            <FontAwesomeIcon icon={faCheckCircle} /> Enterprise-Grade Security & Governance
                          </li>
                          <li className="text-base w-full">
                            <FontAwesomeIcon icon={faCheckCircle} /> Custom AI Solutions for Teams
                          </li>
                          <li className="text-base w-full">
                            <FontAwesomeIcon icon={faCheckCircle} /> Advanced Website Integration — Track campaigns in detail, manage leads, and support via chat
                          </li>
                          <li className="text-base w-full">
                            <FontAwesomeIcon icon={faCheckCircle} /> Enterprise-grade Website Integration
                          </li>
                          <li className="text-base w-full">
                            <FontAwesomeIcon icon={faCheckCircle} /> Unlimited Content Generation Requests/Month
                          </li>
                          <li className="text-base w-full">
                            <FontAwesomeIcon icon={faCheckCircle} /> Marketer Helper Extension (Premium)
                          </li>
                          <li className="text-base w-full">
                            <ul className="flex flex-col w-full pl-5 space-y-2 text-sm">
                              <li className="w-full">
                                <FontAwesomeIcon icon={faHandPointRight} /> Real-time tips to improve your content as you work
                              </li>
                              <li className="w-full">
                                <FontAwesomeIcon icon={faHandPointRight} /> Personalized suggestions based on your brand's performance and style
                              </li>
                              <li className="w-full">
                                <FontAwesomeIcon icon={faHandPointRight} /> Advanced strategies for improving campaigns across all platforms
                              </li>
                              <li className="w-full">
                                <FontAwesomeIcon icon={faHandPointRight} /> Actionable insights to increase engagement and fine-tune targeting
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </section>
            <section className="py-16 px-2 sm:px-4 bg-gradient-to-t from-gray-900 md:rounded-b-3xl text-white">
              <div className="max-w-7xl mx-auto text-center mb-12">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mb-8"
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">Feature Comparison</h2>
                </motion.div>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mb-8"
                >
                  <p className="text-lg font-semibold sm:whitespace-pre-wrap">
                    {'Choose the right plan for your marketing needs and start\noptimizing your campaigns today with NovaEdge Media'}
                  </p>
                </motion.div>
              </div>
              <div className="overflow-x-auto shadow-xl rounded-lg border border-gray-700 bg-gray-800">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8"
              >
                <table className="min-w-full text-sm text-gray-300">
                  <thead className="bg-gray-700">
                    <tr>
                      <th className="px-6 py-4 text-left text-lg font-semibold text-gray-200">Feature</th>
                      <th className="px-6 py-4 text-center text-lg font-semibold text-gray-200">Starter <span className="hidden xl:inline-block">Plan</span></th>
                      <th className="px-6 py-4 text-center text-lg font-semibold text-gray-200">Business <span className="hidden xl:inline-block">Plan</span></th>
                      <th className="px-6 py-4 text-center text-lg font-semibold text-gray-200">Enterprise <span className="hidden xl:inline-block">Plan</span></th>
                    </tr>
                  </thead>
                  <tbody className="overflow-hidden">
                    <tr className="border-t border-gray-700">
                      <td className="px-6 py-4 text-lg font-medium">User Seats</td>
                      <td className="px-6 py-4 text-center text-lg">1</td>
                      <td className="px-6 py-4 text-center text-lg">3</td>
                      <td className="px-6 py-4 text-center text-lg">Custom</td>
                    </tr>
                    <tr className="border-t border-gray-700">
                      <td className="px-6 py-4 text-lg font-medium">AI Content Creation</td>
                      <td className="px-6 py-4 text-center">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-lg mx-auto" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-lg mx-auto" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-lg mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-t border-gray-700">
                      <td className="px-6 py-4 text-lg font-medium">Campaign Optimization</td>
                      <td className="px-6 py-4 text-center">
                        <FontAwesomeIcon icon={faCircleXmark} className="text-red-500 text-lg mx-auto" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-lg mx-auto" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-lg mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-t border-gray-700">
                      <td className="px-6 py-4 text-lg font-medium">Detailed Reports and Insights</td>
                      <td className="px-6 py-4 text-center">
                        <FontAwesomeIcon icon={faCircleXmark} className="text-red-500 text-lg mx-auto" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-lg mx-auto" />
                      </td>
                      <td className="px-6 py-4 text-center">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-lg mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-t border-gray-700">
                      <td className="px-6 py-4 text-lg font-medium">Deep Audience Insights</td>
                      <td className="px-6 py-4 text-center">
                        <FontAwesomeIcon icon={faCircleXmark} className="text-red-500 text-lg mx-auto" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-lg mx-auto" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-lg mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-t border-gray-700">
                      <td className="px-6 py-4 text-lg font-medium">Advanced Website Integration</td>
                      <td className="px-6 py-4 text-center">
                      <FontAwesomeIcon icon={faCircleXmark} className="text-red-500 text-lg mx-auto" />
                      </td>
                      <td className="px-6 py-4 text-center">
                      <FontAwesomeIcon icon={faCircleXmark} className="text-red-500 text-lg mx-auto" />
                      </td>
                      <td className="px-6 py-4 text-center">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-lg mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-t border-gray-700">
                      <td className="px-6 py-4 text-lg font-medium">Content Generation Requests/Month</td>
                      <td className="px-6 py-4 text-lg text-center">50</td>
                      <td className="px-6 py-4 text-lg text-center">150</td>
                      <td className="px-6 py-4 text-lg text-center">Unlimited</td>
                    </tr>
                    <tr className="border-t border-gray-700">
                      <td className="px-6 py-4 text-lg font-medium">Marketer Helper Extension</td>
                      <td className="px-6 py-4 text-center">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-lg mx-auto" />
                      </td>
                      <td className="px-6 py-4 text-center">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-lg mx-auto" />
                      </td>
                      <td className="px-6 py-4 text-center">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-lg mx-auto" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>
              </div>
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
            <FAQ />
            <Testimonials />
            <CTASection />
            <section className="p-12 md:p-16 text-center shadow-lg border-y-4 border-gray-300 border-double rounded-lg">
            {/* Title Section */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-300">We Accept</h2>
              <p className="text-lg md:text-xl font-medium text-gray-200 mt-2">Secure and Trusted Payment Methods</p>
            </motion.div>
            {/* Icons Section */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center items-center gap-8 text-4xl md:text-5xl text-white my-8"
            >
              <FontAwesomeIcon
                icon={faCcVisa}
                className="hover:text-blue-600 transition-all transform hover:scale-110"
              />
              <FontAwesomeIcon
                icon={faCcMastercard}
                className="hover:text-red-600 transition-all transform hover:scale-110"
              />
              <FontAwesomeIcon
                icon={faCcPaypal}
                className="hover:text-blue-500 transition-all transform hover:scale-110"
              />
              <FontAwesomeIcon
                icon={faCcStripe}
                className="hover:text-indigo-600 transition-all transform hover:scale-110"
              />
            </motion.div>
            {/* Description Section */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-base md:text-lg font-medium text-gray-100 mt-4">
                Rest assured, your transactions are safe with us.
              </p>
            </motion.div>
            </section>
          </main>
          <Footer />
      </div>
    </>
  );
}
