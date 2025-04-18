import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import UserRivew from "./UserRivew";
import Swal from "sweetalert2";
import { AuthContext } from "../user/Authprovider";

export default function MyBookingCard({ book, onDelete }) {
  const [modal, setModal] = useState(false);
  const { darkMode } = useContext(AuthContext); // Get darkMode from context

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
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    });

    if (result.isConfirmed) {
      try {
        const response = await axios.delete(
          `https://b10-a11-server-site.vercel.app/my-booking/${_id}`,
          {
            withCredentials: true,
          }
        );
        if (response.status === 200) {
          toast.success("Room deleted successfully");
          onDelete(_id);
        } else {
          toast.error("Failed to delete room");
        }
      } catch (error) {
        console.error("Error deleting room:", error);
        toast.error("Something went wrong!");
      }
    } else {
      toast.info("Room deletion canceled.");
    }
  };

  return (
    <div
      className={`overflow-x-auto  ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-700"
      }`}
    >
      <table className="table border">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Room Details</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* row 4 */}
          <tr>
            <td>
              <div className="flex">
                <div className="w-44 rounded-lg">
                  <img className="rounded-lg" src={photo} alt="Room Image" />
                </div>
              </div>
            </td>
            <td>
              <h1 className="text-lg font-semibold">
                <span>Name:</span> {name}
              </h1>
              <span className="font-semibold">Price: {price} $</span>
              <h1 className="font-semibold">Booking Date: {bookingDate}</h1>
              <img
                className="h-8 w-8 my-2 rounded-full"
                src={photoURL}
                alt="User Avatar"
              />
            </td>

            <td className="flex flex-col items-center justify-center space-y-2">
              <NavLink
                onClick={handleModal}
                className={`btn ${
                  darkMode
                    ? "bg-sky-600 hover:bg-sky-700"
                    : "bg-sky-400 hover:bg-sky-500"
                } text-white`}
              >
                Review
              </NavLink>
              <NavLink
                to={`/update-booking/${_id}`}
                className={`btn ${
                  darkMode
                    ? "bg-sky-600 hover:bg-sky-700"
                    : "bg-sky-400 hover:bg-sky-500"
                } text-white`}
              >
                Update
              </NavLink>
              <NavLink
                onClick={handleDelete}
                className={`btn ${
                  darkMode
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-red-500 hover:bg-red-600"
                } text-white`}
              >
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
