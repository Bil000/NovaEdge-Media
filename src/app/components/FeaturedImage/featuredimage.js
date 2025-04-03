import { motion } from 'framer-motion';

const Card = ({ icon, title, description, tags }) => (
  <motion.div
    className="bg-white border border-gray-100 rounded-2xl p-6 max-w-xs relative hover:shadow-2xl hover:border-blue-100 transition-all duration-300 ease-in-out"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    animate={{ y: [0, -10, 0] }} // Animação de levitação
    transition={{
      duration: 2, // Duração da animação
      repeat: Infinity, // Repetir infinitamente
      ease: 'easeInOut', // Transição suave
    }}
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="p-3 bg-blue-50 rounded-xl text-blue-600">{icon}</div>
      <h3 className="font-semibold text-blue-900 text-xl">{title}</h3>
    </div>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    <div className="flex gap-2 mt-4">
      {tags.map((tag, index) => (
        <span
          key={index}
          className={`text-xs px-3 py-1 rounded-full font-medium ${
            tag === 'NEW'
              ? 'bg-green-100 text-green-700'
              : 'bg-purple-100 text-purple-700'
          }`}
        >
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

export default function FeatureCard({ cards }) {
  return (
    <div className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
      <img
        src="/path-to-your-image.jpg"
        alt="User at work"
        className="rounded-3xl shadow-2xl w-full max-w-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
      />

      {/* Renderizar cards passadas como props */}
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className={`absolute ${card.position}`} // Posição da card (ex: "top-10 left-10")
          initial={{ y: card.initialY, opacity: 0 }} // Animação de entrada
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        >
          <Card
            icon={card.icon}
            title={card.title}
            description={card.description}
            tags={card.tags}
          />
        </motion.div>
      ))}
    </div>
  );
}