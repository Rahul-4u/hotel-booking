import { useContext, useEffect, useState } from "react";
import BookNowModal from "./BookNowModal";
import axios from "axios";
import { Navigate, NavLink, useParams } from "react-router-dom";
import { AuthContext } from "../user/Authprovider";

export default function RoomCard({ room }) {
  const { id } = useParams();
  const { name, photo, description, price, roomtyp, _id, daynamicId } = room;
  const [reviews, setReviews] = useState([]);
  const [modal, setModal] = useState(false);
  const { user, darkMode } = useContext(AuthContext);
  const [privet, setPrivet] = useState(false);

  // Fetch reviews and filter by room ID
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(
          `https://b10-a11-server-site.vercel.app/roomWithReviews/${daynamicId}`
        );
        if (res.status === 200) {
          setReviews(res.data.reviews || []);
        }
      } catch (error) {
        console.error("Fetching reviews error", error);
      }
    };
    fetchReviews();
  }, [daynamicId]);

  // Handle modal opening
  const handleModal = () => {
    if (!user || !user.email) {
      setPrivet(true);
    } else {
      setModal(!modal);
    }
  };

  // Redirect to login if user is not authenticated
  if (privet) {
    return <Navigate to={"/login"} />;
  }

  // Shorten long descriptions
  const shortDescription =
    description && description.length > 85
      ? description.substring(0, 85) + "..."
      : description || "No description available.";

  return (
    <div className="max-w-sm mx-auto">
      <div
        className={`rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        }`}
      >
        {/* Room Image */}
        <NavLink to={`/room-details/${_id}`}>
          <figure>
            <img
              className="w-full h-64 object-cover"
              src={photo || "https://via.placeholder.com/400"}
              alt={name || "Room"}
            />
          </figure>
        </NavLink>

        {/* Room Details */}
        <div className={`p-6 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
          <h2 className="text-2xl font-bold mb-2">{name || "Unknown Room"}</h2>
          <p className="text-sm mb-4">{shortDescription}</p>

          {/* Room Type & Price */}
          <div className="flex justify-between items-center mb-4">
            <span
              className={`text-sm font-semibold px-3 py-1 rounded-full ${
                darkMode
                  ? "bg-blue-600 text-white"
                  : "bg-blue-100 text-blue-800"
              }`}
            >
              {roomtyp || "Unknown Type"}
            </span>
            <span
              className={`text-xl font-bold ${
                darkMode ? "text-green-400" : "text-green-600"
              }`}
            >
              ${price || "N/A"}
            </span>
          </div>

          {/* Reviews Count */}
          <p
            className={`text-sm font-medium ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Reviews: {reviews.length}
          </p>
        </div>

        {/* Book Now Button */}
        <button
          onClick={handleModal}
          className={`w-full py-3 font-semibold transition-colors duration-300 ${
            darkMode
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          Book Now
        </button>
      </div>

      {/* Modal */}
      {modal && (
        <BookNowModal
          room={room}
          daynamicId={daynamicId}
          handleModal={handleModal}
        />
      )}
    </div>
  );
}
