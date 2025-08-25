"use client";

import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import faqData from "../../utils/jsons/faq.json";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(3);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="pb-16 bg-[#F6F8FF] px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-medium text-[#2D2D2D] mb-12 font-montserrat text-center sm:text-left pl-3">
          Frequently Asked Questions
        </h2>

        {/* Desktop view (2 columns) */}
        <div className="hidden lg:grid grid-cols-2 gap-8">
          {/* Left side - Questions list */}
          <div className="space-y-4 bg-white p-4 rounded-lg">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                  activeIndex === index ? "bg-blue-50" : "hover:bg-gray-50"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-200 ${
                    activeIndex === index ? "bg-[#0D80F2]" : "bg-gray-200"
                  }`}
                >
                  {activeIndex === index && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>

                <span
                  className={`flex-1 text-base sm:text-lg ${
                    activeIndex === index
                      ? "text-gray-800 font-medium"
                      : "text-gray-600"
                  }`}
                >
                  {faq.question}
                </span>

                {activeIndex === index && (
                  <ChevronRight className="w-5 h-5 text-[#0D80F2] shrink-0" />
                )}
              </div>
            ))}
          </div>

          {/* Right side - Animated whole box */}
          <AnimatePresence mode="wait">
            {activeIndex !== null && (
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.4 }}
                className="w-full h-auto bg-[#FAFBFF] shadow-md rounded-xl p-5"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-[#0D80F2] mb-4">
                  {faqData[activeIndex].question}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {faqData[activeIndex].answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile view (Accordion style) */}
        <div className="lg:hidden space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4">
              {/* Question */}
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <span
                  className={`text-base sm:text-lg ${
                    activeIndex === index
                      ? "text-[#0D80F2] font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  {faq.question}
                </span>
                <ChevronRight
                  className={`w-5 h-5 transition-transform duration-300 ${
                    activeIndex === index
                      ? "rotate-90 text-[#0D80F2]"
                      : "text-gray-500"
                  }`}
                />
              </div>

              {/* Answer with animation */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-3"
                  >
                    <p className="text-gray-600 text-sm sm:text-base">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
