import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section className="px-4 py-16 bg-gray-900 text-center text-white relative">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold sm:whitespace-pre-wrap text-white drop-shadow-lg mb-6">
          {"The Transformation of Digital Marketing\nCampaigns by NovaEdge Media"}
        </h2>
        <hr className="w-20 mx-auto my-6 border-gray-600 border-t-2" />
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="text-lg mb-12 font-semibold max-w-2xl mx-auto">
          Digital marketers saw improved ad performance with NovaEdge Media, allowing them to save time and scale their efforts efficiently
        </p>
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative flex flex-wrap justify-center gap-6 px-6"
      >
        {/* Card 1 */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-gray-800 p-6 rounded-lg shadow-xl w-80 sm:w-96 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
        >
          <div className="flex items-center mb-4">
            <img
              src="../../testimonial4.jpg"
              alt="Jane Smith"
              className="w-16 h-16 rounded-full border-4 border-gray-700 mr-3 transition-all duration-300 hover:border-yellow-500"
            />
            <div className="text-left">
              <p className="font-semibold text-white text-lg">Jane Smith</p>
              <p className="text-gray-400 text-sm">Digital Marketing Manager, BeautyBrand</p>
            </div>
          </div>
          <p className="text-gray-300 italic">
            "NovaEdge Media changed our digital campaigns. Our ROI increased by 35% in the first month. Managing ads is now easier than ever."
          </p>
        </motion.div>
        {/* Card 2 */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-gray-800 p-6 rounded-lg shadow-xl w-80 sm:w-96 transform translate-y-10 transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
        >
          <div className="flex items-center mb-4">
            <img
              src="../../testimonial3.jpg"
              alt="John Doe"
              className="w-16 h-16 rounded-full border-4 border-gray-700 mr-3 transition-all duration-300 hover:border-yellow-500"
            />
            <div className="text-left">
              <p className="font-semibold text-white text-lg">John Doe</p>
              <p className="text-gray-400 text-sm">Founder, AdInnovators</p>
            </div>
          </div>
          <p className="text-gray-300 italic">
            "NovaEdge Media simplified our ad management process. It’s a game changer. It saves us time and boosts performance."
          </p>
        </motion.div>
        {/* Card 3 */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-gray-800 p-6 rounded-lg shadow-xl w-80 sm:w-96 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
        >
          <div className="flex items-center mb-4">
            <img
              src="../../testimonial2.jpg"
              alt="Mary Johnson"
              className="w-16 h-16 rounded-full border-4 border-gray-700 mr-3 transition-all duration-300 hover:border-yellow-500"
            />
            <div className="text-left">
              <p className="font-semibold text-white text-lg">Mary Johnson</p>
              <p className="text-gray-400 text-sm">Social Media Specialist, TrendyTech</p>
            </div>
          </div>
          <p className="text-gray-300 italic">
            "With NovaEdge Media, our targeting got much better. We saw a 50% increase in conversions. Now, our ads reach our audience directly."
          </p>
        </motion.div>
        {/* Card 4 */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-gray-800 p-6 rounded-lg shadow-xl w-80 sm:w-96 transform translate-y-10 transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
        >
          <div className="flex items-center mb-4">
            <img
              src="../../testimonial1.jpg"
              alt="Robert Lee"
              className="w-16 h-16 rounded-full border-4 border-gray-700 mr-3 transition-all duration-300 hover:border-yellow-500"
            />
            <div className="text-left">
              <p className="font-semibold text-white text-lg">Robert Lee</p>
              <p className="text-gray-400 text-sm">Marketing Director, EcomPulse</p>
            </div>
          </div>
          <p className="text-gray-300 italic">
            "Our marketing changed after we integrated NovaEdge Media. It automated our campaigns and gave us insights that led to success."
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonials;