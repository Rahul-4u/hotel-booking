import { NavLink } from "react-router-dom";
import Header from "./Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import UserRivew from "./UserRivew";

export default function MyBookingCard({ book, onDelete }) {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };
  const {
    name,
    photo,
    price,
    bookingDate,
    bookingId,
    roomtyp,
    photoURL,
    displayName,
    _id,
    roomId,
  } = book;

  const handleDelete = async (e) => {
    try {
      const response = await axios.delete(
        `https://b10-a11-server-site.vercel.app/my-booking/${_id}`
      );
      if (response.status === 200) {
        toast.success("Room added successfully");
        // navigate("/");
        // e.target.reset();
        onDelete(_id);
      } else {
        toast.error("Failed to add room");
      }
    } catch (error) {
      console.error("error add room", error);
    }
  };

  return (
    <div>
      <div className="bg-white shadow-2xl p-4 mb-6">
        <div className="flex flex-col  gap-4">
          <div className="w-full">
            <img
              src={photo}
              alt=""
              className="rounded-xl h-80 w-full object-cover"
            />
          </div>
          <div className="flex gap-4">
            <div>
              {" "}
              <img className="h-10 w-10 rounded-full" src={photoURL} alt="" />
            </div>
            <div>
              <p>{displayName}</p>
              <h1 className=" font-bold text-xl">Room Name : {name}</h1>
              <p>{roomtyp}</p>
              <p>Price: ${price} </p>
              <p>Date: {bookingDate} </p>
            </div>
          </div>
          <div className="divider"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <NavLink
              onClick={handleModal}
              // to={"/rivew"}
              className="btn bg-sky-400"
            >
              Rivew
            </NavLink>
            <NavLink to={`/update-booking/${_id}`} className="btn bg-sky-400">
              Update
            </NavLink>
            <NavLink onClick={handleDelete} className="btn bg-sky-400">
              Delete
            </NavLink>
          </div>
        </div>
      </div>
      {modal && <UserRivew revId={roomId} setModal={setModal} />}
    </div>
  );
}
