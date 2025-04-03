import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <section className="text-center px-2 lg:px-6 pb-16">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl sm:text-4xl sm:whitespace-pre-wrap font-bold text-white p-10 drop-shadow">
          {"From Struggle to Scale\nThe AI Advantage"}
        </h2>
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex rounded-3xl flex-wrap items-center justify-center py-8 px-0 md:px-2 lg:px-16 lg:my-0 max-w-screen-2xl bg-gray-900 mx-auto"
      >
        {/* Step 1 */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]"
        >
          <div className="min-h-[30rem] flex m-6 items-center justify-evenly w-84 flex-col bg-white text-black pt-8 pb-14 px-8 rounded-2xl">
            <div className="mt-4">
              <h3 className="text-xl font-bold text-center mb-8">Step 1: The Old Way</h3>
            </div>
            <div className="mt-4">
              <p className="py-4">
                Digital marketers waste time on repetitive tasks. This takes their focus away from what truly matters. This old way is exhausting and holds back growth.
              </p>
            </div>
            <div className="mt-4">
              <p className="font-semibold">
                <FontAwesomeIcon icon={faHandPointRight} /> Then, a revolution begins...
              </p>
            </div>
          </div>
        </motion.div>

        {/* Step 2 */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]"
        >
          <div className="min-h-[30rem] flex m-6 items-center justify-evenly w-84 flex-col bg-white text-black pt-8 pb-14 px-8 rounded-2xl">
            <div className="mt-4">
              <h3 className="text-xl font-bold text-center mb-8">Step 2: The Breakthrough</h3>
            </div>
            <div className="mt-4">
              <p className="py-4">
                Now imagine a helper that takes care of the hard work. NovaEdge Media automates ads and provides insights. This lets digital marketers focus on creativity and strategy.
              </p>
            </div>
            <div className="mt-4">
              <p className="font-semibold">
                <FontAwesomeIcon icon={faHandPointRight} /> The system runs itself. But what’s next?
              </p>
            </div>
          </div>
        </motion.div>

        {/* Step 3 */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]"
        >
          <div className="min-h-[30rem] flex m-6 items-center justify-evenly w-84 flex-col bg-white text-black pt-8 pb-14 px-8 rounded-2xl">
            <div className="mt-4">
              <h3 className="text-xl font-bold text-center mb-8">Step 3: Flourish Together</h3>
            </div>
            <div className="mt-4">
              <p className="py-4">
                Teaming up with AI makes your marketing smarter and stronger. It doesn't replace you—but enhances what you do best.
              </p>
            </div>
            <div className="mt-4">
              <p className="font-semibold">
                <FontAwesomeIcon icon={faHandPointRight} /> AI is the future. Lead it!
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}