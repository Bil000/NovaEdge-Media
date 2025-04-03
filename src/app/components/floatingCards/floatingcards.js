import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description, buttonText, buttonLink }) => (
  <div className="md:text-left bg-gray-50 border border-gray-100 rounded-2xl p-4 md:p-6 max-w-xs relative shadow-md hover:shadow-2xl hover:border-blue-100 transition-all duration-300 ease-in-out levitate">
    <div className="flex items-center gap-3 mb-4">
      <div className="rounded-full text-blue-600">{icon}</div>
      <h3 className="font-semibold text-blue-900 text-lg md:text-xl">{title}</h3>
    </div>
    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{description}</p>
    <div className="flex w-full justify-center md:justify-start mt-4">
      <button
        className="bg-gradient-to-br from-yellow-500 to-yellow-400 hover:bg-yellow-300 w-[9.5em] text-gray-900 p-2 text-xs font-semibold rounded-full hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
      >
        <a href={buttonLink}>{buttonText}</a>
      </button>
    </div>
  </div>
);


const FloatingCards = ({ 
  imageSrc, 
  imageAlt, 
  topCard, 
  bottomCard 
}) => {
  return (
    <section className=" w-full h-screen flex items-center justify-center bg-white py-24 px-6">
      <style>{`
        @media (min-width: 900px) {
            .leftCard {
                left: -3rem;
            }
            .rightCard {
                right: -3rem;
            } 
        @media (min-width: 940px) {
            .leftCard {
                left: -4.5rem;
            }
            .rightCard {
                right: -4.5rem;
            } 
        @media (min-width: 1024px) {
            .leftCard {
                left: -6rem;
            }
            .rightCard {
                right: -6rem;
            } 
        @media (min-width: 1300px) {
            .leftCard {
                left: -10rem;
            }
            .rightCard {
                right: -10rem;
            } 
      `}</style>  
      <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
      >
      <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center">
        <img 
          className="w-full max-w-3xl object-cover rounded-3xl shadow-2xl ease-in-out" 
          src={imageSrc} 
          alt={imageAlt}
        />
        
        {/* Top-left card */}
        <div className="leftCard absolute -top-32 sm:-top-24 md:top-16 md:-left-2 transform scale-90 md:scale-100">
          <FeatureCard
            icon={<FontAwesomeIcon icon={topCard.icon} className="text-xl" />}
            title={topCard.title}
            description={topCard.description}
            buttonText={topCard.buttonText || "Get Started"}
            buttonLink={topCard.buttonLink || "#"}
          />
        </div>

        {/* Bottom-right card */}
        <div className="rightCard absolute -bottom-32 sm:-bottom-24 md:bottom-16 md:-right-2 transform scale-90 md:scale-100">
          <FeatureCard
            icon={<FontAwesomeIcon icon={bottomCard.icon} className="text-xl" />}
            title={bottomCard.title}
            description={bottomCard.description}
            buttonText={bottomCard.buttonText || "Get Started"}
            buttonLink={bottomCard.buttonLink || "#"}
          />
        </div>
      </div>
      </motion.div>
    </section>
  );
};

export default FloatingCards;