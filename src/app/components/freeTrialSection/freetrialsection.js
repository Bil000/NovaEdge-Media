import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function FreeTrial ({DemoFeatures}) {
    return (
        <section className="card1 md:rounded-t-3xl bg-gradient-to-b from-blue-50 to-white py-16 sm:py-20 md:py-24 px-4 md:px-8 lg:px-16">
          <div className="text-center mb-20">
            <motion.div
             initial={{ y: 50, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-6">
               Experience Smarter Marketing in Seconds
              </h2>  
            </motion.div>
            <motion.div
             initial={{ y: 50, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-gray-600 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto">
               See How NovaEdge Media Automates And Improves Your Campaigns Effortlessly
              </p>
            </motion.div>            
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {DemoFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-5 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl text-white shadow-lg">
                    <FontAwesomeIcon icon={feature.icon} className="text-white [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)] text-4xl" />
                    </div>
                    <h3 className="text-2xl font-semibold text-blue-900 mt-8 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-20">
          <motion.div
             initial={{ y: 50, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
            >            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-br from-blue-600 to-blue-500 hover:bg-blue-800 transition-all duration-300 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Free Trial
            </motion.button>
          </motion.div>
          </div>
        </section>
    )
}