import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FeatureCard from "./FeatureCard";

const FeaturedRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://b10-a11-server-site.vercel.app/featured-rooms")
      .then((response) => {
        setRooms(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching rooms:", error);
      });
  }, []);

  return (
    <div className="featured-rooms max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Featured Rooms
      </h2>

      {loading ? (
        <div className="flex justify-center items-center h-32">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : rooms.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <FeatureCard key={room.id || index} room={room} />
          ))}
        </div>
      ) : (
        <div className="text-center mt-6 text-lg text-gray-500">
          No featured rooms available at the moment.
        </div>
      )}
    </div>
  );
};

export default FeaturedRooms;
