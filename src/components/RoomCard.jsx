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
  const { user } = useContext(AuthContext);
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
    <div className="max-w-lg mx-auto">
      <div className="bg-white shadow-lg border border-gray-200 rounded-xl overflow-hidden transition transform hover:scale-105 duration-300">
        <NavLink to={`/room-details/${_id}`}>
          <figure>
            <img
              className="w-full h-72 object-cover"
              src={photo || "https://via.placeholder.com/400"}
              alt={name || "Room"}
            />
          </figure>
          <div className="p-6 bg-slate-100">
            <h2 className="text-xl font-semibold text-gray-800">
              {name || "Unknown Room"}
            </h2>
            <p className="text-gray-600 text-sm mt-2">{shortDescription}</p>

            {/* Room Type & Price */}
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm font-semibold text-white bg-blue-600 px-3 py-1 rounded-full">
                {roomtyp || "Unknown Type"}
              </span>
              <span className="text-lg font-bold text-green-600">
                ${price || "N/A"}
              </span>
            </div>

            {/* Reviews Count */}
            <p className="mt-3 text-gray-700 font-medium">
              Reviews: {reviews.length}
            </p>
          </div>
        </NavLink>

        {/* Book Now Button */}
        <button
          onClick={handleModal}
          className="w-full bg-blue-500 text-white py-3 font-semibold hover:bg-blue-600 transition"
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
