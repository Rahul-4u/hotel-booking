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
    daynamicId,
  } = book;

  const handleDelete = async (e) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/my-booking/${_id}`,
        {
          withCredentials: true,
        }
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
    <div className="overflow-x-auto">
      <table className="table border">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Room Details</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 4 */}
          <tr>
            <td>
              <div className="flex ">
                <div className="w-44  rounded-lg ">
                  <img
                    className=" rounded-lg"
                    src={photo}
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
            </td>
            <td>
              <h1 className="text-lg font-semibold">
                {" "}
                <span> Name :</span> {name}
              </h1>
              <span className=" font-semibold"> Price : {price} $</span>
              <h1 className=" font-semibold">
                {" "}
                Booking Date : {bookingDate}
              </h1>{" "}
              <img
                className="h-8 w-8 my-2 rounded-full"
                src={photoURL}
                alt=""
              />
            </td>

            <td className="flex flex-col items-center justify-center space-y-2">
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
            </td>
          </tr>
        </tbody>
        {/* foot */}
      </table>
      {modal && <UserRivew daynamicId={daynamicId} setModal={setModal} />}
    </div>
  );
}
