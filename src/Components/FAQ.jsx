import React, { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

const faqs = [
  {
    question: "How do I enroll for classes?",
    answer: "You can enroll by visiting our website and signing up.",
  },
  {
    question: "How are classes conducted?",
    answer: "Classes are conducted online through live video sessions.",
  },
  {
    question: "Can I download course materials?",
    answer:
      "Yes, course materials are available for download after enrollment.",
  },
  {
    question: "How do I pay for a class?",
    answer: "You can pay via credit card, PayPal, or bank transfer.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="2xl:px-52 xl:px-24 px-10  relative bg-cover flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.7) 30%, transparent 70%),
          url('src/Assest/Web_Images/Bg Plexus.png')
        `,
        backgroundPosition: "-450px 180px", // x = -450px, y = 180px
        backgroundRepeat: "no-repeat", // Prevents image repetition
        backgroundSize: "cover", // Ensures the image covers the entire container
      }}
    >
      <div className="w-full max-w-3xl flex flex-col justify-center items-center">
        {/* Header */}
        <div className="text-center flex flex-col justify-center items-center">
          <p className="text-green-600 font-reddit uppercase text-sm font-semibold mb-3">
            Support
          </p>
          <h2 className="text-[28px] xl:text-[40px] 2xl:text-[48px] text-primarytext mb-2 font-medium w-auto lg:text-nowrap">
            Frequently asked questions
          </h2>
          <p className="text-gray-500 mb-10 font-sans text-[14px] xl:text-[18px] 2xl:text-[18px]">
            Can’t find the answer you’re looking for? Please{" "}
            <a href="#" className="text-gray-500 underline font-medium">
              chat with our friendly team.
            </a>
          </p>
        </div>

        {/* FAQ Section */}
        <div className="space-y-4 pb-20 lg:mt-10 lg:w-[45vw] w-[90vw[">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300">
              {/* Question */}
              <button
                className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="lg:text-lg text-[16px] font-normal lg:font-medium text-gray-700">
                  {faq.question}
                </span>
                <span
                  className={`text-2xl text-gray-500 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <IoChevronDownOutline />
                </span>
              </button>

              {/* Answer */}
              <div
                className={`text-gray-600 overflow-hidden transition-all duration-500 ${
                  openIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="pb-4 lg:text-sm text-[14px] text-[#7b7b7b]">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
