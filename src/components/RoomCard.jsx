import { useContext, useEffect, useState } from "react";
import BookNowModal from "./BookNowModal";
import axios from "axios";
import { Navigate, NavLink, useParams } from "react-router-dom";
import { AuthContext } from "../user/Authprovider";

export default function RoomCard({ room }) {
  const { id } = useParams();
  const { name, photo, description, price, roomtyp, _id, daynamicId } = room;
  const [reviews, setReviews] = useState([]);
  const [modal, setModal] = useState(false);
  const { user } = useContext(AuthContext);
  const [privet, setPrivet] = useState(false);
  const [navmenu, setNavmeny] = useState(true);

  // Fetch reviews and filter by room _id
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
      <div className="card shadow-xl border bg-slate-200 my-8 p-4 rounded-xl">
        <NavLink to={`/room-details/${_id}`}>
          <div>
            <figure>
              <img className="h-96 rounded-xl" src={photo} alt="Room" />
            </figure>
            <div className="card-body bg-slate-200">
              <h2 className="card-title">{name}</h2>
              <p>{shortDescription}</p>
              <p className="font-semibold">Room Type: {roomtyp}</p>
              <p className="font-semibold">Price: $ {price}</p>
              <p className="font-semibold">Reviews: {reviews.length}</p>
            </div>
          </div>
        </NavLink>
        <button onClick={handleModal} className="btn bg-sky-600 text-white">
          Book now
        </button>
      </div>

      {modal && (
        <BookNowModal
          room={room}
          daynamicId={daynamicId}
          handleModal={handleModal}
        />
      )}
    </div>
  );
}
