import { useState } from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="FAQ w-full flex justify-center">
      <div className="mx-4 sm:mx-6 md:mx-16 lg:mx-48 px-4 py-20">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Frequently Asked Questions (FAQ)
          </h2>
        </motion.div>
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
             <div className="border-b border-gray-300">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full text-left py-4 px-6 text-lg sm:text-xl md:text-2xl font-medium flex relative items-center transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                >
                  <span className="mr-4">{faq.question}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-6 h-6 absolute right-4 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? "max-h-96 opacity-100 py-2 px-6"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-md sm:text-lg">{faq.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const faqData = [
  {
    question: "What is NovaEdge Media?",
    answer:
      "NovaEdge Media is an AI marketing assistant for digital marketers. It optimizes ad campaigns, provides suggestions, creates content, targets audiences, and analyzes data. Its focus is on automation and efficiency.",
  },
  {
    question: "How does NovaEdge Media work?",
    answer:
      "NovaEdge Media uses machine learning to analyze data and automate ad campaigns. It suggests content strategies and targets audiences. It also integrates seamlessly with platforms like Google Ads and Facebook Ads, helping marketers optimize in real-time.",
  },
  {
    question: "Can I integrate NovaEdge Media with my existing marketing tools?",
    answer:
      "Yes, NovaEdge Media integrates with many digital marketing platforms, including Google Ads, Facebook Ads, Shopify, and analytics tools. It fits into your workflow without disruption.",
  },
  {
    question: "Is NovaEdge Media suitable for small businesses?",
    answer:
      "Absolutely! NovaEdge Media is ideal for small businesses, especially those with limited resources. It offers an affordable way to optimize marketing campaigns and scale without large budgets.",
  },
  {
    question: "What makes NovaEdge Media different from other marketing tools?",
    answer:
      "NovaEdge Media is tailored for digital marketers. Unlike other tools, it's an all-in-one assistant designed to aid the marketer in every aspect.",
  },
  {
    question: "Is there a free trial for NovaEdge Media?",
    answer:
      "Yes, we offer a 7-day free trial. Digital marketers can explore all features of NovaEdge Media to see how it benefits their strategy before subscribing.",
  },
  {
    question: "What are the subscription plans, and can I cancel anytime?",
    answer:
      "NovaEdge Media offers flexible monthly and yearly plans tailored to your marketing needs. You can cancel anytime, and you'll retain access until the end of your billing period without further charges.",
  },
  {
    question: "What kind of customer support does NovaEdge Media offer?",
    answer:
      "We provide 24/7 customer support via email and live chat. Our team is ready to help with technical issues, integration questions, or any general inquiries about the platform.",
  },
  {
    question: "How does NovaEdge Media improve my ad campaigns and generate content?",
    answer:
      "NovaEdge Media uses AI to optimize ad campaigns by adjusting bids, targeting, and creatives for better results at lower costs. It also reallocates funds to top-performing ads for maximum ROI. Additionally, it generates ad copy, blog posts, and social media content tailored to your audience, saving marketers time and resources.",
  },
];

export default FAQ;