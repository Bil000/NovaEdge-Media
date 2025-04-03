import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
export default function FeatureSection ({features}) {
  return (
    <>
      <style jsx>{`
        .animate-slide-from-left {
          animation: slideFromLeft 0.6s ease-out forwards;
        }
        .animate-slide-from-right {
          animation: slideFromRight 0.6s ease-out forwards;
        }
      `}
      </style>
      <div className="hidden md:block w-full md:rounded-t-xl mt-2 sm:mt-4 bg-white h-screen"></div>
      <section className="block md:hidden mb-2 sm:mb-4 bg-gradient-to-r from-[#3c4d93] to-gray-800 text-white pt-20 px-4 md:px-8 lg:px-16">
      <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
        >
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6">
                      What Does It Do?
                  </h2>
                  <h2 className="text-lg sm:text-xl md:text-2xl whitespace-pre-wrap font-semibold text-center mb-8">
                      {'Discover The Features Designated To\nMake Your Marketing Awesome'}
                  </h2>
        </motion.div>    
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => {
                      // Alternate animation classes based on index: even slides from left, odd from right.
                      const animationClass = index % 2 === 0 ? "animate-slide-from-left" : "animate-slide-from-right";
                      return (
                        <motion.div
                          key={index}
                          initial={{ y: 50, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                        >
                        <div
                          key={index}
                          className={`bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-transparent hover:border-white hover:shadow-2xl transition-all transform hover:scale-105 duration-300 ${animationClass}`}
                        >
                          <div className="bg-white shadow-lg mb-4 h-20 w-20 flex items-center justify-center rounded-full">
                            <FontAwesomeIcon icon={feature.icon} className="text-4xl text-[#3c4d93]" />
                          </div>
                          <h3 className="text-xl md:text-2xl font-semibold mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-gray-300 text-sm md:text-base">
                            {feature.description}
                          </p>
                        </div>
                      </motion.div>
                      );
                    })}
                  </div>
                  <div className="mx-auto md:w-[60%] lg:w-[40%] py-20 flex items-center md:justify-around flex-col md:flex-row">
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
              <section className="hidden md:block w-full rounded-b-3xl mb-2 sm:mb-4 bg-gradient-to-t from-blue-50 overflow-r-hidden to-white text-white relative h-[2500px]">
                {/* Fixed Header */}
                <div className=" w-[80%] sticky mx-auto top-[25vh] py-20 px-4 md:px-8 lg:px-16">
                  <h2 className="text-3xl text-blue-900 sm:text-4xl md:text-5xl font-bold text-center mb-6">
                      What Does It Do?
                  </h2>
                  <h2 className="text-lg text-gray-600 sm:text-xl md:text-2xl whitespace-pre-wrap font-semibold text-center mb-8">
                      {'Discover The Features Designated To\nMake Your Marketing Awesome'}
                  </h2>
                  <div className="mx-auto md:w-[60%] lg:w-full flex flex-col md:flex-row items-center justify-center gap-4">
                    <button className="bg-yellow-400 text-gray-900 px-4 py-2 text-md font-semibold rounded-full hover:bg-yellow-500 transition-all duration-300 hover:shadow-2xl transform hover:scale-105 w-34">
                      <a href="#">Get Started</a>
                    </button>
                    <button className="bg-blue-800 px-4 py-2 text-md font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 hover:shadow-2xl transform hover:scale-105 w-34">
                      <a href="#">Book a Demo</a>
                    </button>
                  </div>
                </div>
      
                {/* Scrollable Cards Container */}
                <div style={{overflow:"hidden"}} className="absolute top-[300px] bottom-[200px] left-0 right-0 overflow-y-auto px-4 md:px-8 lg:px-16">
                  <div className="flex flex-col gap-32 max-w-4xl mx-auto pt-64 pb-64">
                    {features.map((feature, index) => {
                      const animationClass = index % 2 === 0 
                        ? "animate-slide-from-left" 
                        : "animate-slide-from-right";
                      
                      return (
                        <div
                          key={index}
                          className={`bg-gradient-to-br from-blue-600/10 to-blue-500/10 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-transparent hover:border-white hover:shadow-2xl transition-all transform hover:scale-105 duration-300 ${
                            index % 2 === 0 ? "self-start" : "self-end"
                          } ${animationClass}`}
                          style={{ 
                            width: '40%',
                            maxWidth: '600px',
                            animationDelay: `${index * 0.15}s`
                          }}
                        >
                          <div className="bg-white shadow-lg mb-4 h-20 w-20 flex items-center justify-center rounded-full">
                            <FontAwesomeIcon icon={feature.icon} className="text-4xl text-blue-500" />
                          </div>
                          <h3 className="text-xl text-blue-900 md:text-2xl font-semibold mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 text-sm md:text-base">
                            {feature.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
    </>
  )
}