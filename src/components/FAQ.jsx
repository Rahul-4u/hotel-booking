import { useContext, useState } from "react";
import { MdArrowOutward, MdArrowDownward } from "react-icons/md";
import { AuthContext } from "../user/Authprovider";

export default function FAQ() {
  const { darkMode } = useContext(AuthContext); // Getting darkMode value from context
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
      {/* Image Container - Adjusted for larger size */}
      <div className="md:w-1/2 p-6">
        <img
          src="https://i.ibb.co.com/9HV9wP9/download-28.jpg"
          className="w-full h-auto rounded-lg shadow-2xl"
          alt="FAQ Illustration"
        />
      </div>

      {/* FAQ Content */}
      <div className="md:w-1/2 p-6">
        <h1 className="lg:text-5xl md:text-3xl text-2xl font-semibold mb-6">
          Frequently Asked <br /> Questions
        </h1>

        {[
          "Where Can I Find Information?",
          "Can I Buy Directly From The Factory?",
          "What Kinds of Payment Do You Accept?",
          "When do I receive my order?",
        ].map((question, index) => (
          <div
            key={index}
            className={`flex flex-col my-4 border-b-2 ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <button
              onClick={() => handleToggle(index + 1)}
              className={`my-1 flex gap-5 lg:text-2xl md:text-xl font-semibold items-center ${
                darkMode
                  ? "text-white hover:text-gray-300"
                  : "text-black hover:text-gray-700"
              }`}
              aria-expanded={open === index + 1}
              aria-controls={`faq-${index + 1}`}
            >
              {question}
              <span className="text-2xl font-semibold transition-transform duration-300">
                {open === index + 1 ? <MdArrowDownward /> : <MdArrowOutward />}
              </span>
            </button>
            {open === index + 1 && (
              <p
                id={`faq-${index + 1}`}
                className={`py-3 transition-all duration-300 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            )}
          </div>
        ))}

        <button
          className={`btn btn-primary mt-6 ${
            darkMode
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-blue-500 hover:bg-blue-600"
          } text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300`}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
