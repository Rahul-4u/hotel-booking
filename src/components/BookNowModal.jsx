import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../user/Authprovider";
import axios from "axios";
import { toast } from "react-toastify";

export default function BookNowModal({ room, handleModal, roomId }) {
  const { name, photo, description, price } = room;
  const [bookingDate, setBookingDate] = useState("");
  const { user } = useContext(AuthContext);
  const { displayName, email, photoURL } = user;
  const navigate = useNavigate();

  const handleDateChange = (e) => {
    setBookingDate(e.target.value);
  };

  const handleConfirm = async (e) => {
    const myBooking = {
      name,
      price,
      photo,
      displayName,
      roomId,
      email,
      photoURL,
      bookingDate,
    };

    try {
      const response = await axios.post(
        "https://b10-a11-server-site.vercel.app/my-booking",
        myBooking
      );
      if (response.status === 200) {
        toast.success("Room added successfully");
        navigate("/");
        e.target.reset();
      } else {
        toast.error("Failed to add room");
      }
    } catch (error) {
      console.error("error add room", error);
      // toast.error("N/A");
    }
  };

  return (
    <div className=" fixed z-50  top-0 bottom-0 left-0 w-full h-full   bg-black bg-opacity-50 flex  justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-1/3 relative">
        <h3 className="text-2xl font-semibold mb-4">Book Your Room</h3>

        <div className="mb-4">
          <img
            src={photo}
            alt=""
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p className="text-xl font-semibold">{name}</p>
          <p className="text-gray-600  text-sm mb-2">{description}</p>
          <p className="text-lg font-bold text-blue-600">${price} / Night</p>
        </div>
        {/* ------- */}
        <div className="mb-4">
          <label
            htmlFor="booking-date"
            className="block text-sm font-medium text-gray-700"
          >
            Select Booking Date
          </label>
          <input
            type="date"
            id="booking-date"
            value={bookingDate}
            onChange={handleDateChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>
        {/* --------- */}
        <div>
          <p>
            <strong>Booking Summary</strong>
          </p>
          <p>Room: {name}</p>
          <p>Date: {bookingDate}</p>
          <p>Price: $ {price}</p>
        </div>
        {/* ------------ */}
        <div className="flex justify-between my-8">
          <NavLink onClick={handleConfirm} className="w-1/2 btn bg-sky-600">
            Confirm Booking
          </NavLink>
          <button onClick={handleModal} className="btn bg-red-600">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
