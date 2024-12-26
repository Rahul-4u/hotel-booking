import axios from "axios";
import { useEffect, useState } from "react";

export default function FeatureCard({ room }) {
  const { name, photo, description, price, daynamicId, roomtyp } = room;
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(
          `https://b10-a11-server-site.vercel.app/roomWithReviews/${daynamicId}`
        );
        if (res.status === 200) {
          setReviews(res.data.reviews);
        }
      } catch (error) {
        console.error("Fetching reviews error", error);
      }
    };
    fetchReviews();
  }, [daynamicId]);

  const shortDescription =
    description?.length > 80
      ? description.substring(0, 85) + "..."
      : description;
  return (
    <div>
      <div className="card bg-base-100  shadow-xl">
        <figure>
          <img className=" h-96" src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{shortDescription}</p>
          <p className="font-semibold">Room Type: {roomtyp}</p>
          <p className="font-semibold">Price : $ {price}</p>
          <p className="font-semibold">Reviews:{reviews?.length}</p>
        </div>
      </div>
    </div>
  );
}
