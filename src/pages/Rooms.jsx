import axios from "axios";
import { useContext, useEffect, useState } from "react";
import RoomCard from "../components/RoomCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AuthContext } from "../user/Authprovider";

export default function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [minPrice, setMinPrice] = useState(0);
  const { darkMode } = useContext(AuthContext); // Get darkMode from context

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await axios.get(
          "https://b10-a11-server-site.vercel.app/add-room"
        );
        if (res.status === 200) {
          setRooms(res.data);
          setFilteredRooms(res.data); // Initialize filteredRooms with all rooms
        }
      } catch (error) {
        console.error("Fetching error", error);
      }
    };
    fetchRooms();
  }, []);

  // Filter rooms based on price range
  useEffect(() => {
    const filterRooms = rooms.filter(
      (room) => room.price >= minPrice && room.price <= maxPrice
    );
    setFilteredRooms(filterRooms);
  }, [minPrice, maxPrice, rooms]);

  return (
    <div
      className={`min-h-screen mt-20 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <Header />
      <div className="max-w-[1440px] mx-auto p-4">
        {/* Filter Section */}
        <div
          className={`p-4 md:flex block space-y-3 gap-4 ${
            darkMode ? "bg-gray-800" : "bg-gray-100"
          } rounded-lg`}
        >
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            placeholder="Min Price"
            className={`border p-2 rounded-lg w-full md:w-auto ${
              darkMode
                ? "bg-gray-700 text-white border-gray-600"
                : "bg-white text-black border-gray-300"
            }`}
          />
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            placeholder="Max Price"
            className={`border p-2 rounded-lg w-full md:w-auto ${
              darkMode
                ? "bg-gray-700 text-white border-gray-600"
                : "bg-white text-black border-gray-300"
            }`}
          />
          <button
            onClick={() => {
              setMinPrice(0);
              setMaxPrice(10000);
              setFilteredRooms(rooms);
            }}
            className={`btn btn-primary w-full md:w-auto ${
              darkMode
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300`}
          >
            Clear Filter
          </button>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredRooms?.map((room, index) => (
            <RoomCard key={index} room={room} darkMode={darkMode} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
