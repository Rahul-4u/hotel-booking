import { NavLink } from "react-router-dom";

export default function OfferCard({ closeModal, card }) {
  const { title, description, discount, startDate, endDate, imageUrl, type } =
    card;
  return (
    <div className="w-full mx-auto">
      <div className="card lg:card-side bg-base-100 shadow-xl grid gap-4 grid-cols-1 md:grid-cols-2 ">
        <div>
          <img src={imageUrl} alt="Album" />
        </div>
        <div className=" text-start flex-col space-y-3 ">
          <h1 className="flex items-center">
            <span>
              {" "}
              <img
                className="max-h-24 w-24"
                src="https://i.ibb.co.com/d4c8bK6/download-27.jpg"
                alt=""
              />
            </span>
            <span className="text-4xl font-semibold"> {discount}</span>
            <span>
              <img
                className="max-h-16 w-14"
                src="https://i.ibb.co.com/x3pjL6f/red-price-tag-label-percentage-600nw-1947684382.webp"
                alt=""
              />
            </span>{" "}
          </h1>
          <p className=" font-semibold text-red-600">
            {startDate} --- {endDate}
          </p>
          <h2 className="card-title">{title}</h2>
          <p>{type} </p>
          <p>{description}</p>
          <NavLink to={"/rooms"} className="btn  bg-red-600 text-white">
            Booking Now
          </NavLink>

          <div className="card-actions justify-end">
            <button
              onClick={closeModal}
              className="btn  bg-slate-400 text-white"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
