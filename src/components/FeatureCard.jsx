import { useContext, useState } from "react";
import { AuthContext } from "../user/Authprovider";
import { Navigate, NavLink, useParams } from "react-router-dom";
import BookNowModal from "./BookNowModal";

const FeatureCard = ({ room }) => {

  const { user, darkMode } = useContext(AuthContext);
    const [modal, setModal] = useState(false);

    const [privet, setPrivet] = useState(false);
  
    const { id } = useParams();

  const { name, photo, description, price, roomtyp, _id, daynamicId } = room;

  const shortDescription =
    description && description.length > 85
      ? description.substring(0, 85) + "..."
      : description || "No description available.";
  
  const handleModal = () => {
    if (!user || !user.email) {
      setPrivet(true);
    } else {
      setModal(!modal);
    }
  };
   if (privet) {
     return <Navigate to={"/login"} />;
   }


  return (
    <div className="max-w-sm mx-auto transition-all duration-300">
      <div
        className={`rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        }`}
      >
        <div className="relative">
          <NavLink to={`/room-details/${_id}`}>
            <img
              className="w-full h-64 object-cover"
              src={photo || "https://via.placeholder.com/400"}
              alt={name || "Room"}
            />
            <span className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
              {roomtyp || "Unknown Type"}
            </span>
          </NavLink>
        </div>

        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-bold">{name || "Unknown Room"}</h2>
          <p className="text-sm leading-relaxed">{shortDescription}</p>

          <div className="flex justify-between items-center">
            <p
              className={`text-sm font-medium ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Featured
            </p>
            <p className="text-lg font-bold text-green-500">
              ${price || "N/A"}
            </p>
          </div>

          <button
            onClick={handleModal}
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold rounded-xl transition-all duration-300"
          >
            Book Now
          </button>
        </div>
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
};

export default FeatureCard;
