import { motion } from "framer-motion";

export default function HeroSection({ tagline, subtext }) {
    return (
        <section className="heroSection flex flex-col items-center justify-center text-center text-white w-full">
           <motion.div
            initial={{ y: 80, opacity: 0, scale: 0.95 }}
            whileInView={{ 
                y: 0, 
                opacity: 1, 
                scale: 1,
                transition: {
                    type: "spring",
                    damping: 7,
                    stiffness: 50,
                    mass: 0.5,
                    delay: 0.2
                }
            }}
            viewport={{ once: true }}
           >
                <h1 className="text-2xl sm:text-3xl md:text-4xl sm:whitespace-pre-wrap lg:text-5xl font-extrabold leading-tight">
                    {tagline}
                </h1>
                <h3 className="font-bold py-6 text-lg sm:whitespace-pre-wrap sm:text-xl leading-relaxed">
                    {subtext}
                </h3>    
           </motion.div>           
           <motion.div
            initial={{ y: 80, opacity: 0, scale: 0.95 }}
            whileInView={{ 
                y: 0, 
                opacity: 1, 
                scale: 1,
                transition: {
                    type: "spring",
                    damping: 7,
                    stiffness: 40,
                    mass: 0.5,
                    delay: 0.4
                }
            }}
            viewport={{ once: true }}
            className="w-full flex flex-col items-center justify-center"
           >     
            <div className=" mx-auto flex items-center md:justify-around flex-col md:flex-row">
                <button 
                className="bg-white md:mb-0 mb-4 text-black w-[9.6em] px-6 py-2 text-base font-semibold rounded-full border hover:border-yellow-500 hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
                >
                  <a href="#">Get Started</a>
                </button>
                    <div className="w-4 px-2"></div>
                <button
                className="bg-transparent border border-white mb-4 md:mb-0 w-[9.6em] px-6 py-2 text-base font-semibold rounded-full hover:border-blue-700 hover:bg-blue-700 hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                >           
                  <a href="#">Book a Demo</a>
                </button>
            </div>
           </motion.div>
        </section>
    )
}