import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReviewComponent from './components/review';

const faqs = [
  {
    question: "What makes Baddies Clinic unique?",
    answer:
      "At Baddies Clinic, we blend hair artistry with luxury service. Whether you're buying a wig or booking a styling session, you're stepping into a space where beauty and confidence come first.",
  },
  {
    question: "Do you sell high-quality wigs?",
    answer:
      "Yes! All our wigs are made from premium fibers or 100% human hair. Each piece is crafted to ensure durability, natural appearance, and comfort.",
  },
  {
    question: "Can I book an appointment for both male and female styling?",
    answer:
      "Absolutely. We cater to all genders with expert hair services — from sleek installations to bold dreadlock designs and trims.",
  },
  {
    question: "Do you offer dreadlock services?",
    answer:
      "Yes, we specialize in dreadlocks — from starter locs to maintenance and creative styles. Our stylists are experienced in various loc techniques.",
  },
  {
    question: "What’s your appointment policy?",
    answer:
      "To serve you best, we work strictly by appointment. You can reschedule or cancel up to 24 hours in advance. Late arrivals may require a new booking.",
  },
  {
    question: "Can I request a custom wig?",
    answer:
      "Definitely. We accept custom wig orders based on length, color, density, and style preferences. Just reach out, and we’ll make your vision come alive.",
  },
  {
    question: "How do I know which wig suits me?",
    answer:
      "Our team is always ready to assist. You can chat with us, and we’ll recommend wigs that complement your face shape, lifestyle, and personal style.",
  },
  {
    question: "Do you offer group bookings or bridal styling?",
    answer:
      "Yes, we provide styling for bridal parties, events, and group bookings. Contact us for tailored packages and early scheduling.",
  },
];

const FAQAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="p-8 bg-pink-50 min-h-screen">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-pink-700 font-luxe">
            Why Choose Baddies Clinic?
          </h1>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Your hair, your crown — whether you're rocking a wig, locs, or getting styled for a special day, we’re here to make you feel your baddest.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 mb-4 bg-white rounded-lg shadow-md"
            >
              {/* Question */}
              <div
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-center p-5 cursor-pointer transition duration-300 hover:bg-pink-100"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <motion.div
                  className="text-pink-500"
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                >
                  ▼
                </motion.div>
              </div>

              {/* Answer */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className="px-5 pb-5 text-gray-600"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      <ReviewComponent />
    </>
  );
};

export default FAQAccordion;
