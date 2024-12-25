import axios from "axios";
import { useEffect, useState } from "react";
import RoomCard from "../components/RoomCard";
import Header from "../components/Header";

export default function Rooms() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await axios.get("http://localhost:8000/add-room");
        if (res.status === 200) {
          setRooms(res.data);
        }
      } catch (error) {
        console.error("fetching error", error);
      }
    };
    fetchRooms();
  }, []);

  return (
    <div className="">
      <Header />
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3">
          {rooms?.map((room, index) => (
            <RoomCard key={index} room={room} />
          ))}
        </div>
      </div>
    </div>
  );
}
