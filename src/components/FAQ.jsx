import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const handleTogle = (index) => {
    setOpen(open === index ? null : index);
  };
  return (
    <div className="md:flex md:my-20  items-center">
      <div className="md:w-1/2 ">
        <img
          src="https://i.ibb.co.com/9HV9wP9/download-28.jpg"
          className="md:w-11/12  w-full mx-auto  rounded-lg shadow-2xl"
        />
      </div>
      <div className="md:w-1/2">
        <h1 className="lg:text-5xl md:3xl text-2xl font-semibold">
          Frequently Asked <br /> Questions
        </h1>
        <div className="flex flex-col my-4 border-b-2 border-black">
          <button
            onClick={() => handleTogle(1)}
            className="my-1 flex gap-5 lg:text-2xl md:text-xl font-semibold "
          >
            Where Can I Find Information?{" "}
            <span className="text-2xl font-semibold">
              {" "}
              <MdArrowOutward />{" "}
            </span>
          </button>
          {open === 1 && (
            <p className="py-3">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          )}
        </div>
        <div className="flex flex-col my-4 border-b-2 border-black">
          <button
            onClick={() => handleTogle(2)}
            className="my-1 flex gap-5 lg:text-2xl md:text-xl font-semibold "
          >
            Can I Buy Directly From The Factory?{" "}
            <span className="text-2xl font-semibold">
              {" "}
              <MdArrowOutward />{" "}
            </span>
          </button>
          {open === 2 && (
            <p className="py-3">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          )}
        </div>
        <div className="flex flex-col my-4 border-b-2 border-black">
          <button
            onClick={() => handleTogle(3)}
            className="my-1 flex gap-5 lg:text-2xl md:text-xl font-semibold "
          >
            What Kinds of Payment Do You Accept?{" "}
            <span className="text-2xl font-semibold">
              {" "}
              <MdArrowOutward />{" "}
            </span>
          </button>
          {open === 3 && (
            <p className="py-3">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          )}
        </div>
        <div className="flex flex-col my-4 border-b-2 border-black">
          <button
            onClick={() => handleTogle(4)}
            className="my-1 flex gap-5 lg:text-2xl md:text-xl font-semibold "
          >
            When do I receive my order?{" "}
            <span className="text-2xl font-bold">
              {" "}
              <MdArrowOutward />{" "}
            </span>
          </button>
          {open === 4 && (
            <p className="py-3">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          )}
        </div>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  );
}
