import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FeatureCard from "./FeatureCard";
import { AuthContext } from "../user/Authprovider";

const FeaturedRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { user, darkMode } = useContext(AuthContext);
  const [title, setTitle] = useState("Featured Rooms");

  useEffect(() => {
    axios
      .get("https://b10-a11-server-site.vercel.app/featured-rooms")
      .then((response) => {
        setRooms(response.data);
        setLoading(false);

        // Dynamic title based on room availability and user
        if (response.data.length > 0) {
          setTitle(
            user?.displayName
              ? `Hey ${user.displayName}, Check Out These ${response.data.length} Featured Rooms!`
              : `Explore Our ${response.data.length} Stunning Featured Rooms`
          );
        } else {
          setTitle("No Featured Rooms Available Right Now");
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching rooms:", error);
      });
  }, [user]);

  return (
    <div
      className={` ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div
        className={`featured-rooms max-w-7xl mx-auto px-4 py-10 transition-all duration-300 ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>

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
          <div className="text-center mt-6 text-lg">
            Sorry, we currently have no featured rooms available. Please check
            back later!
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedRooms;
