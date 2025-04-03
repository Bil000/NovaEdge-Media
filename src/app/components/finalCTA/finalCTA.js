import {motion} from "framer-motion";
const CTASection = () => {
  return (
    <section className="CTA px-4 lg:h-screen flex content-center justify-center flex-col py-[6em] lg:py-[10em] bg-gray-900 text-center md:rounded-b-3xl">
    
    <div className="md:w-[60%] mx-auto">
          <motion.div       
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
          >        
              <motion.div       
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
              >
                  <h2 className="text-4xl shadow-lg md:text-6xl text-shadow-lg mb-8 font-extrabold text-white tracking-tight">
                    Unlock the Full Potential of Your Marketing Strategy
                  </h2>
              </motion.div>
              <motion.div       
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
              >
                  <p className="mt-6 shadow-lg text-lg md:text-2xl font-bold text-gray-100 leading-relaxed max-w-2xl mx-auto">
                    Are You Ready To Elevate Your Marketing To New Heights? 
                    Partner With The Assistant That Has Been Enabling Marketers To Dominate The Digital Space!
                  </p>
              </motion.div>
              <motion.div       
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
              >
                  <div className="flex justify-center mt-8">
                    <button
                    className="bg-yellow-400 mb-4 sm:mb-0 shadow-md shadow-yellow-900 max-w-[180px] text-gray-900 px-6 py-3 text-lg font-semibold rounded-full hover:bg-yellow-500 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 w-[300px]"  // Fixed width using Tailwind
                  >
                    <a href="#">GET STARTED</a>
                  </button>
                  </div>
              </motion.div>
          </motion.div>
      </div>
    </section>
  );
};

export default CTASection;