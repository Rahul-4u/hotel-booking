const FeatureCard = ({ room }) => {
  const { name, photo, description, price, roomtyp } = room;

  // Ensure uniform description length (max 80 characters)
  const shortDescription =
    description && description.length > 80
      ? description.substring(0, 80) + "..."
      : description || "No description available.";

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105 duration-300">
      {/* Room Image */}
      <img
        src={photo || "https://via.placeholder.com/300"}
        alt={name || "Room Image"}
        className="w-full h-60 object-cover"
      />

      {/* Room Details */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">
          {name || "Unknown Room"}
        </h3>
        <p className="text-gray-600 text-sm mt-1">{shortDescription}</p>

        {/* Room Type & Price */}
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm font-semibold text-white bg-blue-600 px-3 py-1 rounded-full">
            {roomtyp || "Unknown Type"}
          </span>
          <span className="text-lg font-bold text-green-600">
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
