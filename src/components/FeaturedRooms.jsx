import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FeatureCard from "./FeatureCard";

const FeaturedRooms = () => {
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://b10-a11-server-site.vercel.app/featured-rooms")
      .then((response) => {
        setRooms(response.data);
      });
  }, []);

  return (
    <div className="featured-rooms">
      <h2 className="text-2xl font-bold text-center">Featured Rooms</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {rooms?.map((room, index) => (
          <FeatureCard key={index} room={room} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedRooms;
