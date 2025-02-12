import { useContext } from "react";
import { AuthContext } from "../user/Authprovider";

const FeatureCard = ({ room }) => {
  const { darkMode } = useContext(AuthContext);
  const { name, photo, description, price, roomtyp } = room;

  // Ensure uniform description length (max 80 characters)
  const shortDescription =
    description && description.length > 80
      ? description.substring(0, 80) + "..."
      : description || "No description available.";

  return (
    <div
      className={`shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105 duration-300 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      {/* Room Image */}
      <img
        src={photo || "https://via.placeholder.com/300"}
        alt={name || "Room Image"}
        className="w-full h-60 object-cover"
      />

      {/* Room Details */}
      <div className="p-4">
        <h3 className="text-xl font-semibold">{name || "Unknown Room"}</h3>
        <p className="text-sm mt-1">{shortDescription}</p>

        {/* Room Type & Price */}
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm font-semibold px-3 py-1 rounded-full bg-blue-600 text-white">
            {roomtyp || "Unknown Type"}
          </span>
          <span className="text-lg font-bold text-green-500">
            ${price || "N/A"}
          </span>
        </div>

        {/* Book Now Button */}
        <button
          onClick={() => alert(`Booking room: ${name}`)}
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default FeatureCard;
