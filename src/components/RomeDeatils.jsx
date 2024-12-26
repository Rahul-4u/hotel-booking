import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import { AuthContext } from "../user/Authprovider";
import BookNowModal from "./BookNowModal";

export default function RomeDeatils() {
  const { id } = useParams();
  const [roomDetails, setDetails] = useState(null);
  const [reviews, setRivews] = useState([]);
  const [modal, setModal] = useState(false);
  const { user } = useContext(AuthContext);
  const [privet, setPrivet] = useState(false);

  const handleModal = () => {
    if (!user || !user.email) {
      setPrivet(true);
    }
    setModal(!modal);
  };
  // --------------------daynamic details
  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/add-room/${id}`);
        if (res.status === 200) {
          setDetails(res.data);
        }
      } catch (error) {
        console.error("Fetching reviews error", error);
      }
    };
    fetchBooking();
  }, [id]);

  // ----------------------daynamic review url
  useEffect(() => {
    if (roomDetails && roomDetails.daynamicId) {
      const fetchReviews = async () => {
        try {
          const res = await axios.get(
            `http://localhost:8000/roomWithReviews/${roomDetails.daynamicId}`
          );
          if (res.status === 200) {
            setRivews(res.data.reviews);
          }
        } catch (error) {
          console.error("Fetching reviews error", error);
        }
      };
      fetchReviews();
    }
  }, [roomDetails]);

  return (
    <div>
      <Header />
      <div>
        {roomDetails && (
          <div className="card bg-base-100  shadow-xl lg:w-8/12 mx-auto my-10">
            <h1 className="text-4xl font-semibold text-center mt-16 mb-8">
              {roomDetails.name}
            </h1>

            <img className="p-10" src={roomDetails.photo} alt="Shoes" />

            <div className="card-body">
              <p> {roomDetails.description}</p>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
                <div className=" md:p-5 ">
                  <table className="table  ">
                    {/* head */}
                    <h1 className="text-3xl font-semibold my-4">Details</h1>

                    <tbody className="w-10">
                      {/* row 1 */}
                      <tr className="border-2 border-sky-600">
                        <th className="border-2 border-sky-600">1</th>
                        <td className="border-2 border-sky-600">Price</td>
                        <td className="border-2 border-sky-600">
                          {" "}
                          $ {roomDetails.price}
                        </td>
                      </tr>
                      {/* row 2 */}
                      <tr className="border-2 border-sky-600">
                        <th className="border-2 border-sky-600">2</th>
                        <td className="border-2 border-sky-600">Roomtyp</td>
                        <td className="border-2 border-sky-600">
                          {roomDetails.roomtyp}
                        </td>
                      </tr>
                      {/* row 3 */}{" "}
                      <tr className="border-2 border-sky-600">
                        <th className="border-2 border-sky-600">3</th>
                        <td className="border-2 border-sky-600">Maxguests</td>
                        <td className="border-2 border-sky-600">
                          {roomDetails.maxguests}
                        </td>
                      </tr>
                      {/* row 3 */}{" "}
                      <tr className="border-2 border-sky-600">
                        <th className="border-2 border-sky-600">4</th>
                        <td className="border-2 border-sky-600">facilities</td>
                        <td className="border-2 border-sky-600">
                          {roomDetails.facilities}
                        </td>
                      </tr>
                      {/* row 3 */}{" "}
                      <tr className="border-2 border-sky-600">
                        <th className="border-2 text-xl border-sky-600">5</th>
                        <td className="border-2 border-sky-600">Size</td>
                        <td className="border-2 border-sky-600">
                          {roomDetails.size}
                        </td>
                      </tr>
                      {/* row 3 */}
                      <tr className="border-2 border-sky-600">
                        <th className="border-2 border-sky-600">6</th>
                        <td className="border-2 border-sky-600">Available</td>
                        <td className="border-2 border-sky-600">
                          {roomDetails.available}
                        </td>
                      </tr>
                      {/*  */}
                      <tr className="border-2 border-sky-600">
                        <th className="border-2 border-sky-600">8</th>
                        <td className="border-2 border-sky-600">special</td>
                        <td className="border-2 border-sky-600">
                          {roomDetails.special}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <button
                    onClick={handleModal}
                    className="btn my-5 w-full bg-sky-600 text-white"
                  >
                    Book now
                  </button>
                </div>
                <div>
                  {reviews?.length > 0 && (
                    <div>
                      {reviews?.map((review, index) => (
                        <div key={index}>
                          <div className="card bg-base-100 shadow-xl">
                            <div className=" md:flex gap-4 my-4   bg-white p-2 shadow-xl">
                              <div>
                                {" "}
                                <img
                                  className="h-14 w-14 rounded-full"
                                  src={review.photoURL}
                                  alt=""
                                />
                              </div>
                              <div>
                                {" "}
                                <h2 className="card-title">
                                  {review.displayName}
                                </h2>
                                <p>{review.timestamp}</p>
                                <p>{review.comment}</p>
                                <p>{review.rating} ⭐</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {modal && (
        <BookNowModal
          room={roomDetails}
          daynamicId={roomDetails.daynamicId}
          handleModal={handleModal}
        />
      )}
    </div>
  );
}
