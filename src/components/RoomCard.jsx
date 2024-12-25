import { useContext, useEffect, useState } from "react";
import BookNowModal from "./BookNowModal";
import axios from "axios";
import { Navigate, useParams } from "react-router-dom";
import { AuthContext } from "../user/Authprovider";

export default function RoomCard({ room }) {
  const { id } = useParams();
  const { name, photo, description, price, roomtyp, _id } = room;
  const [reviews, setReviews] = useState([]);
  const [modal, setModal] = useState(false);
  const { user } = useContext(AuthContext);
  const [privet, setPrivet] = useState(false);

  // Fetch reviews and filter by room _id
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        // Ensure correct URL with roomId parameter
        const res = await axios.get(
          `http://localhost:8000/rivew?roomId=${_id}`
        );
        console.log(res.data);
        if (res.status === 200) {
          setReviews(res.data);
        }
      } catch (error) {
        console.error("Fetching reviews error", error);
      }
    };
    fetchReviews();
  }, [_id]);

  const handleModal = () => {
    if (!user || !user.email) {
      setPrivet(true);
    }
    setModal(!modal);
  };
  if (privet) {
    return <Navigate to={"/login"} />;
  }

  const shortDescription =
    description.length > 80
      ? description.substring(0, 85) + "..."
      : description;

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="h-96" src={photo} alt="Room" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{shortDescription}</p>
          <p className="font-semibold">Room Type: {roomtyp}</p>
          <p className="font-semibold">Price: $ {price}</p>
          <p className="font-semibold">Reviews: {reviews.length}</p>{" "}
          {/* Show filtered reviews count */}
          <button onClick={handleModal} className="btn bg-sky-600 text-white">
            Book now
          </button>
        </div>
      </div>

      {modal && <BookNowModal room={room} handleModal={handleModal} />}
    </div>
  );
}
