import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { routes } from "@/app/routes";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="footer md:rounded-t-3xl bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Newsletter - Comes first on md screens */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center order-first md:order-last"
          >
            <h5 className="text-xl font-semibold mb-4">Subscribe for Weekly Updates</h5>
            <input
              type="text"
              placeholder="First Name"
              className="w-full mb-2 px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-blue-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-blue-400"
            />
            <button className="w-full mt-3 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
              Subscribe
            </button>
          </motion.div>

          {/* NovaEdge Media Info */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 md:order-first"
          >
            <h5 className="text-xl font-semibold mb-4">NovaEdge Media</h5>
            <p>AI-powered solutions for digital marketers</p>
          </motion.div>

          {/* Quick Links - Align left on small screens */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-start md:items-center w-full"
          >
            <h5 className="text-xl font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2 text-left md:text-center w-full">
              <li className="w-full">
                <a href={routes.footer.company} className="block w-full hover:text-blue-400">
                    Company
                </a>
              </li>
              <li className="w-full">
                <a href={routes.footer.terms} className="block w-full hover:text-blue-400">
                  Terms
                </a>
              </li>
              <li className="w-full">
                <a href={routes.footer.privacyPolicy} className="block w-full hover:text-blue-400">
                  Privacy Policy
                </a>
              </li>
              <li className="w-full">
                <a href={routes.footer.licensing} className="block w-full hover:text-blue-400">
                  Licensing
                </a>
              </li>
              <li className="w-full">
                <a href={routes.footer.contact} className="block w-full hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center order-3"
          >
            <h5 className="text-xl font-semibold mb-4 hidden md:block">Follow Us</h5>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/company/novaedge-media/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-2xl hover:text-blue-400 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61568840656861"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} className="text-2xl hover:text-blue-500 transition-all duration-600 shadow-xl hover:shadow-2xl transform hover:scale-105" />
              </a>
              <a
                href="https://www.instagram.com/novaedgemedia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-2xl hover:text-pink-400 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105" />
              </a>
              <a
                href="https://www.youtube.com/@NovaEdgeMedia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faYoutube} className="text-2xl hover:text-red-400 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Copyright */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center mt-8 border-t border-gray-700 pt-4"
      >
        &copy; {new Date().getFullYear()} NovaEdge Media. All rights reserved
      </motion.div>
    </footer>
  );
};

export default Footer;