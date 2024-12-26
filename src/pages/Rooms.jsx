import axios from "axios";
import { useEffect, useState } from "react";
import RoomCard from "../components/RoomCard";
import Header from "../components/Header";
import RomeDeatils from "../components/RomeDeatils";
import Footer from "../components/Footer";

export default function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [minPrice, setMinPrice] = useState(0);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await axios.get(
          "https://b10-a11-server-site.vercel.app/add-room"
        );
        if (res.status === 200) {
          setRooms(res.data);
        }
      } catch (error) {
        console.error("fetching error", error);
      }
    };
    fetchRooms();
  }, []);

  // ------------------
  useEffect(() => {
    const filterRooms = rooms.filter(
      (room) => room.price >= minPrice && room.price <= maxPrice
    );
    setFilteredRooms(filterRooms);
  }, [minPrice, maxPrice, rooms]);

  return (
    <div className="">
      <Header />
      <div className="max-w-[1440px] mx-auto">
        <div className="p-4 flex gap-4">
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            placeholder="Min Price"
            className="border p-2"
          />
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            placeholder="Max Price"
            className="border p-2"
          />
          <button
            onClick={() => setFilteredRooms(rooms)}
            className="btn btn-primary"
          >
            Clear Filter
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3">
          {filteredRooms?.map((room, index) => (
            <RoomCard key={index} room={room} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
