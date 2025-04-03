import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
const TwoColumnCard = ({
  title,
  highlightedText,
  description,
  features,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt,
  reverseLayout = false
}) => {
  return (
    <div className={`w-full flex flex-col xl:mx-[100px] lg:flex-row ${reverseLayout ? 'lg:flex-row-reverse' : ''} justify-evenly xl:justify-center text-left mb-16`}>
      {/* Text Content */}
      <div className={`w-full lg:w-1/2 flex flex-col ${reverseLayout ? 'lg:pl-16' : 'lg:pr-8'}`}>
        <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
         >
        <h3 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-6">
          {title} <span className="text-blue-600">{highlightedText}</span>
        </h3>
        </motion.div>
        <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
         >
        <p className="sm:text-lg lg:text-xl text-gray-600 mb-6 font-medium xl:whitespace-pre-wrap">
          {description}
        </p>
        </motion.div>
        <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
         >
        <ul className="text-gray-700 space-y-4 pl-2 lg:pl-0 flex items-start flex-col">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center transition-all duration-300 hover:translate-x-2">
              <FontAwesomeIcon icon={faSquareCheck} className="text-xl text-blue-600 pr-3" />
              <p >{feature}</p>
            </li>
          ))}
        </ul>
        </motion.div>
        <div className="mt-8 flex gap-4">
          <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
         >
          <a 
            href={buttonLink} 
            className="px-6 py-3 bg-blue-800 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            {buttonText}
          </a>
          </motion.div>
        </div>
      </div>
      
      {/* Image */}
      <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
         >
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full max-w-3xl lg:max-w-xl object-cover mx-auto lg:mx-0 rounded-xl mt-6 lg:mt-0 shadow-lg lg:hover:shadow-2xl transition-all duration-500 transform lg:hover:scale-105 border border-gray-200"
      />
      </motion.div>
    </div>
  );
};

const TwoColumnSection = ({ cards, bgGradient = 'from-blue-50 to-white' }) => {
    return (
      <section className={`card2 py-16 sm:py-20 md:py-24 px-4 bg-gradient-to-t ${bgGradient} flex flex-col items-center`}>
        {cards.map((card, index) => (
          <TwoColumnCard key={index} {...card} />
        ))}
      </section>
    );
  };
  
  export default TwoColumnSection;