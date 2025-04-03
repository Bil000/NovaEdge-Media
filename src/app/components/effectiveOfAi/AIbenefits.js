import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function AIBenefits() {
  return (
    <>
      <section className="py-16 px-4 md:rounded-t-3xl bg-gradient-to-b from-blue-50 to-white flex flex-col items-center">
        <div className="w-full flex flex-col xl:mx-[100px] lg:flex-row justify-evenly xl:justify-center text-left">
          {/* First Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col lg:pr-8"
          >
            <h3 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-6">
              From Data to Winning: <span className="text-blue-600">AI Powered Campaigns</span>
            </h3>
            <p className="sm:text-lg lg:text-xl text-gray-600 mb-6 font-medium xl:whitespace-pre-wrap">
              {"Digital marketing is changing. NovaEdge Media helps you do better by improving campaigns in the right way"}
            </p>
            <ul className="text-gray-700 space-y-4 pl-2 lg:pl-0 flex items-start flex-col">
              <li className="flex items-center transition-all duration-300 hover:translate-x-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-xl text-blue-600 pr-3" />
                <p className="font-medium">Analytics that improve ad targeting at every iteration</p>
              </li>
              <li className="flex items-center py-2 transition-all duration-300 hover:translate-x-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-xl text-blue-600 pr-3" />
                <p>
                  Smart spending for <span className="font-bold">Google Ads & Meta Ads</span>, moving money to the best ads
                </p>
              </li>
              <li className="flex items-center transition-all duration-300 hover:translate-x-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-xl text-blue-600 pr-3" />
                <p>AI finds the right words to help you deliver more by doing less</p>
              </li>
            </ul>
            <div className="mt-8 flex gap-4">
              <a className="px-6 py-3 bg-blue-800 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                Book a Demo
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="./ai-marketing-1.jpg"
              alt="AI-Powered Campaigns"
              className="w-full max-w-3xl lg:max-w-xl object-cover mx-auto lg:mx-0 rounded-xl mt-6 lg:mt-0 shadow-lg lg:hover:shadow-2xl transition-all duration-500 transform lg:hover:scale-105 border border-gray-200"
            />
          </motion.div>
        </div>
        {/* Second Section */}
        <div className="w-full flex flex-col xl:mx-[100px] lg:flex-row-reverse justify-around xl:justify-center text-left mt-16">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pl-16 w-full lg:w-1/2 flex flex-col"
          >
            <h3 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-6">
              Easy Improvement: <span className="text-blue-600">AI That Helps You</span>
            </h3>
            <p className="sm:text-lg lg:text-xl text-gray-600 mb-6 font-medium xl:whitespace-pre-wrap">
              {"NovaEdge Media makes marketing simple. Let AI do the hard work so that you can focus on new ideas"}
            </p>
            <ul className="text-gray-700 space-y-4 pl-2 lg:pl-0 flex items-start flex-col">
              <li className="flex items-center transition-all duration-300 hover:translate-x-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-xl text-blue-600 pr-3" />
                <p className="font-medium">AI gives tips to help you deliver the best strategies</p>
              </li>
              <li className="flex items-center py-2 transition-all duration-300 hover:translate-x-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-xl text-blue-600 pr-3" />
                <p>Checks that help you avoid wasted ad spending</p>
              </li>
              <li className="flex items-center transition-all duration-300 hover:translate-x-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-xl text-blue-600 pr-3" />
                <p>Simple reports that turn information into good ideas</p>
              </li>
            </ul>
            <div className="mt-8 flex gap-4">
              <a className="px-6 py-3 bg-blue-800 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                Book a Demo
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="./ai-marketing-2.jpg"
              alt="AI-Driven Marketing Insights"
              className="w-full max-w-3xl lg:max-w-xl object-cover mx-auto lg:mx-0 rounded-xl mt-6 lg:mt-0 shadow-lg lg:hover:shadow-2xl transition-all duration-500 transform lg:hover:scale-105 border border-gray-200"
            />
          </motion.div>
        </div>
      </section>
      <div className="w-full h-[10px] bg-gradient-to-t from-gray-900 to-white"></div>
    </>
  );
}