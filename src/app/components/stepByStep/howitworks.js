import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faBullhorn, faMagic, faChartLine, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  return (
    <section className="text-center mx-auto px-4 py-16 md:py-24">
      {/* Enhanced Section Title */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 shadow-md">
          How to Get Started
        </h2>
        <p className="text-xl md:text-2xl font-bold mt-3 max-w-2xl mx-auto">
          NovaEdge Media makes digital marketing effortless. Follow these simple steps to launch high-performing campaigns in no time.
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-wrap justify-center items-center gap-6 mt-10"
      >
        {/* Step 1: Sign Up */}
        <div className="h-[16em] w-[17em] flex justify-center items-center flex-col bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all text-center w-60">
          <FontAwesomeIcon icon={faUserPlus} className="text-white text-5xl mb-4" />
          <h3 className="font-semibold text-2xl mb-2">Sign Up</h3>
          <p className="text-sm font-semibold mt-3 max-w-xs leading-relaxed">
            Create your account choose a plan and get instant access to NovaEdge Media.
          </p>
        </div>

        {/* Arrow */}
        <FontAwesomeIcon icon={faArrowRight} className="text-gray-500 text-3xl hidden xl:block" />

        {/* Step 2: Set Up Campaigns */}
        <div className="h-[16em] w-[17em] flex justify-center items-center flex-col bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all text-center w-60">
          <FontAwesomeIcon icon={faBullhorn} className="text-white text-5xl mb-4" />
          <h3 className="font-semibold text-2xl mb-2">Set Up</h3>
          <p className="text-sm font-semibold mt-3 max-w-xs leading-relaxed">
            Define your ad campaign details, audience, and content preferences.
          </p>
        </div>

        {/* Arrow */}
        <FontAwesomeIcon icon={faArrowRight} className="text-gray-500 text-3xl hidden xl:block" />

        {/* Step 3: AI Optimization */}
        <div className="h-[16em] w-[17em] flex justify-center items-center flex-col bg-gradient-to-r from-pink-500 to-red-600 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all text-center w-60">
          <FontAwesomeIcon icon={faMagic} className="text-white text-5xl mb-4" />
          <h3 className="font-semibold text-2xl mb-2">AI Optimization</h3>
          <p className="text-sm font-semibold mt-3 max-w-xs leading-relaxed">
            Let NovaEdge AI optimize your campaigns for higher conversions.
          </p>
        </div>

        {/* Arrow */}
        <FontAwesomeIcon icon={faArrowRight} className="text-gray-500 text-3xl hidden xl:block" />

        {/* Step 4: Get Results */}
        <div className="h-[16em] w-[17em] flex justify-center items-center flex-col bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all text-center w-60">
          <FontAwesomeIcon icon={faChartLine} className="text-white text-5xl mb-4" />
          <h3 className="font-semibold text-2xl mb-2">Get Results</h3>
          <p className="text-sm font-semibold mt-3 max-w-xs leading-relaxed">
            Get real-time insights and campaign adjustments to maximize ROI.
          </p>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <button
          className="bg-yellow-400 mt-8 shadow-md shadow-yellow-900 w-[9.5em] text-gray-900 px-6 py-3 text-lg font-semibold rounded-full hover:bg-yellow-500 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 w-[300px]"
        >
          <a href="#">Get Started</a>
        </button>
      </motion.div>
    </section>
  );
};

export default HowItWorks;