import { useContext, useState } from "react";
import { MdArrowOutward, MdArrowDownward } from "react-icons/md";
import { AuthContext } from "../user/Authprovider";
import { NavLink } from "react-router-dom";

// Dynamic FAQ data
const faqData = [
  {
    question: "Where Can I Find Information?",
    answer:
      "You can find all the information you need in the Help section or by contacting our support.",
  },
  {
    question: "Can I Buy Directly From The Factory?",
    answer:
      "Yes, we provide factory-direct purchases for bulk orders. Contact us for more details.",
  },
  {
    question: "What Kinds of Payment Do You Accept?",
    answer:
      "We accept credit/debit cards, PayPal, and other major payment methods for your convenience.",
  },
  {
    question: "When do I receive my order?",
    answer:
      "Your order will be delivered within 3-5 business days depending on your location.",
  },
];

export default function FAQ() {
  const { darkMode } = useContext(AuthContext);
  const [open, setOpen] = useState(null);

  const handleToggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div
      className={`md:flex md:my-20 items-center max-w-[1440px] mx-auto justify-between ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {/* Image Section */}
      <div className="md:w-1/2 p-6 flex justify-center">
        <img
          src="https://i.ibb.co.com/JRqdk7nq/Hand-drawn-cartoon-faq-business-plant-illustration-dai-social-136911-wh1200-removebg-preview.png"
          className="w-full max-w-md h-auto rounded-xl shadow-xl object-cover mx-auto"
          alt="FAQ Illustration"
        />
      </div>

      {/* FAQ Section */}
      <div className="md:w-1/2 p-6">
        <h1 className="lg:text-5xl md:text-3xl text-2xl font-semibold mb-6">
          Frequently Asked <br /> Questions
        </h1>

        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`flex flex-col my-4 border-b-2 ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <button
              onClick={() => handleToggle(index)}
              className={`my-1 flex gap-5 lg:text-2xl md:text-xl font-semibold items-center ${
                darkMode
                  ? "text-white hover:text-gray-300"
                  : "text-black hover:text-gray-700"
              }`}
              aria-expanded={open === index}
              aria-controls={`faq-${index}`}
            >
              {faq.question}
              <span className="text-2xl font-semibold transition-transform duration-300">
                {open === index ? <MdArrowDownward /> : <MdArrowOutward />}
              </span>
            </button>
            {open === index && (
              <p
                id={`faq-${index}`}
                className={`py-3 transition-all duration-300 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {faq.answer}
              </p>
            )}
          </div>
        ))}

        <NavLink
          to="/rooms"
          className={`btn btn-primary mt-6 ${
            darkMode
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-blue-500 hover:bg-blue-600"
          } text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300`}
        >
          Get Started
        </NavLink>
      </div>
    </div>
  );
}
