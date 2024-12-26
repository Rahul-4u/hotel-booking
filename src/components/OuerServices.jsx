import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function OuerServices() {
  const [card, setCard] = useState();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await axios.get(
          "https://b10-a11-server-site.vercel.app/card"
        );
        if (res.status === 200) {
          setCard(res.data);
        }
      } catch (error) {
        console.error("fetching error", error);
      }
    };
    fetchRooms();
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-semibold text-center mt-5 py-10">
        Our Services & Amenities
      </h1>
      ;
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 my-10 ">
        {card?.map((cart, index) => (
          <div key={index} className="card   bg-slate-400 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={cart?.photo}
                alt="Shoes"
                className="rounded-xl w-24 h-24 "
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title"> {cart?.taitel} </h2>
              <p>{cart?.dec}</p>
              <div className="card-actions">
                <NavLink to={"/rooms"}>All Rooms</NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
