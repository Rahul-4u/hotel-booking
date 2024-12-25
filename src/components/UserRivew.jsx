import { useContext, useState } from "react";
import { AuthContext } from "../user/Authprovider";
import Rating from "react-rating";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function UserRivew({ setModal, daynamicId, name }) {
  const { user } = useContext(AuthContext);
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();
  const { displayName, photoURL } = user || {};

  const handleRivew = async (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    const timestamp = new Date().toISOString();
    const addNewrivew = {
      displayName,
      timestamp,
      comment,
      daynamicId,
      rating,
      photoURL,
      name,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/rivew",
        addNewrivew
      );
      if (response.status === 200) {
        toast.success("Review submitted successfully");
        setModal(false);
        e.target.reset();
      } else {
        toast.error("Failed to submit review");
      }
    } catch (error) {
      console.error("Error submitting review", error);
      toast.error("Failed to submit review");
    }
  };

  return (
    <div className="fixed z-50  top-0 bottom-0 left-0 w-full h-full   bg-black bg-opacity-50 flex  justify-center items-center">
      <div className="w-1/2 mx-auto  min-h-48 my-36 bg-slate-400 shadow-lg rounded-xl">
        <form onSubmit={handleRivew} className="card-body">
          <div className="form-control mt-4">
            <label className=" label">
              <span className="label-text">Rating</span>
            </label>
            <Rating
              initialRating={rating}
              emptySymbol={<span className="text-gray-300 text-2xl">☆</span>}
              fullSymbol={<span className="text-yellow-500 text-2xl">★</span>}
              fractions={2}
              onChange={(rate) => {
                setRating(rate);
              }}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Comment</span>
            </label>
            <textarea
              type="text"
              name="comment"
              placeholder="Enter your comment"
              className="input input-bordered h-24"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Submit Review</button>
          </div>
        </form>
      </div>
    </div>
  );
}
