import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShopify, faMeta } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const integrations = [
  {
    name: "Google Ads",
    logo: (
      <object
        type="image/svg+xml"
        data="./google_Ads.svg"
        className="m-8 drop-shadow-lg"
        style={{
          width: "6rem",
          height: "6rem",
        }}
      ></object>
    ),
    description: "Use smart tools to make your Google Ads work better",
    bgColor: "bg-[#C79A17] text-white shadow-lg shadow-yellow-900",
  },
  {
    name: "Meta Ads",
    logo: (
      <FontAwesomeIcon
        className="text-8xl text-[#1877F2] m-8 drop-shadow-lg"
        icon={faMeta}
      />
    ),
    description: "Make your social media Ads pop with clever targeting",
    bgColor: "bg-[#3c4d93] text-white shadow-lg shadow-blue-900",
  },
  {
    name: "Shopify",
    logo: (
      <FontAwesomeIcon
        className="text-8xl text-[#95BF47] m-8 drop-shadow-lg"
        icon={faShopify}
      />
    ),
    description: "Connect with Shopify to sell more and make marketing simpler",
    bgColor: "bg-[#095E2F] text-white shadow-lg shadow-green-900",
  },
];

const Integrations = () => {
  return (
    <section className="bg-gray-900 px-6 py-16 md:py-24 md:rounded-b-3xl">
      <div className="container mx-auto text-center">
        {/* Title */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-4">
            Easy Integrations
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl font-bold max-w-2xl mx-auto leading-relaxed">
            Team up with top platforms to make your marketing awesome
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className={`p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transition-all duration-300 group ${integration.bgColor}`}
              >
                {integration.logo}
                <h4 className="font-semibold text-2xl">{integration.name}</h4>
                <p className="text-sm font-semibold mt-3 max-w-xs leading-relaxed">
                  {integration.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Footer Text */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-semibold mt-12 text-md leading-relaxed">
            Our tools help these platforms make marketing{" "}
            <span className="text-yellow-400 font-bold">smarter</span>,{" "}
            <span className="text-blue-400 font-bold">faster</span> and{" "}
            <span className="text-green-400 font-bold">easier</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Integrations;