import { motion } from "framer-motion";

export default function NovaEdgeStats() {
  return (
    <section className="md:rounded-t-3xl bg-gradient-to-b from-[#3c4d93] to-gray-900 p-2 md:p-32">
      <div className="default-page-width">
        {/* Top icons */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex justify-between text-4xl text-white"
        >
          {[...Array(3)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-plus levitate"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
          ))}
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto px-4 py-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            THE FUTURE OF <span className="text-yellow-400">DIGITAL MARKETING</span>
          </h2>
          <p className="mt-6 text-lg md:text-2xl font-bold text-gray-100 leading-relaxed max-w-2xl mx-auto">
            Meet NovaEdge Media: the Most Advanced AI Tool designed to help Marketers Reach the Next Tier
          </p>

          {/* Visually Catchy Number */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8"
          >
            <h2 className="animate-pulse text-5xl md:text-7xl font-extrabold text-yellow-400 tracking-wide">
              +990.404
            </h2>
            <h3 className="text-xl md:text-3xl text-gray-200 font-semibold mt-6">
              Total of Optimized Campaigns in our Platform
            </h3>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mt-8"
          >
            <button
              className="bg-yellow-400 mb-4 sm:mb-0 shadow-md shadow-yellow-900 w-[180px] text-gray-900 px-6 py-3 text-lg font-semibold rounded-full hover:bg-yellow-500 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 w-[300px]"
            >
              <a href="#">GET STARTED</a>
            </button>
          </motion.div>
        </motion.div>

        {/* Bottom icons */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex justify-between text-4xl text-white"
        >
          {[...Array(3)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-plus levitate"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
          ))}
        </motion.div>
      </div>
    </section>
  );
}