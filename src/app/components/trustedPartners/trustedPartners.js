import { motion } from 'framer-motion';
export default function TrustedPartners () {
    return (
    <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
    >
        <section className="W-full mb-10">
            <div className="flex flex-col items-center justify-center w-full h-full py-10">
                <h2 className="text-3xl font-bold mb-4">Trusted Partners</h2>
                <p className="text-lg">We work with the best in the industry</p>
                <div className="flex flex-wrap flex-col max-w-lg justify-center">
                    <a href="https://zentecglobal.com.au/" target='_blank' >
                        <img
                            src="/zentec_globo.png"
                            alt="zentec_global logo"
                            className="w-24 md:w-32 max-w-full h-auto my-4 mx-auto"
                        />
                    </a>
                    <h3 className="text-xl font-semibold">Zentec Global</h3>
                    {/* Add more partner logos as needed */}
                </div>
            </div>
        </section> 
    </motion.div>
    );
}