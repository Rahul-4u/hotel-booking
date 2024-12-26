import axios from "axios";
import Header from "./Header";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

export default function MyBookingUpadate() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [upBooking, setUpBooking] = useState({
    name: "",
    price: "",
    bookingDate: "",
    roomtype: ",",
  });

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const response = await axios.get(
          `https://b10-a11-server-site.vercel.app/my-booking/${id}`
        );
        if (response.status === 200) {
          setUpBooking(response.data);
        }
      } catch (error) {
        console.error("error add room", error);
      }
    };
    fetchBooking();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://b10-a11-server-site.vercel.app/my-booking/${id}`,

        upBooking,
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        toast.success("Room added successfully");
        navigate("/myBooking");
        // e.target.reset();
        //   onDelete(_id);
      } else {
        toast.error("Failed to add room");
      }
    } catch (error) {
      console.error("error add room", error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpBooking({ ...upBooking, [name]: value });
  };
  return (
    <div>
      <Header />
      <div className="p-6  bg-slate-400 max-w-[750px] min-h-screen my-4 rounded-lg mx-auto">
        <h1 className="text-2xl font-bold mb-4">Update Booking</h1>
        <form onSubmit={handleUpdate}>
          <div>
            <label className="block mb-4 text-xl  ">Name</label>
            <input
              type="text"
              name="name"
              value={upBooking.name}
              onChange={handleChange}
              className="border w-2/3 p-8 py-2 shadow-sm rounded-2xl"
            />
          </div>
          <div>
            <label className="block mb-4 text-xl  ">Price</label>
            <input
              type="text"
              name="price"
              value={upBooking.price}
              onChange={handleChange}
              className="border w-2/3 p-8 py-2 shadow-sm rounded-2xl"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-4 text-xl  ">BookingDate</label>
            <input
              type="text"
              name="bookingDate"
              value={upBooking.bookingDate}
              onChange={handleChange}
              className="border w-2/3 p-8 py-2 shadow-sm rounded-2xl"
            />
          </div>

          <button className="btn w-1/2 bg-sky-600 text-white">Update</button>
          {/* </NavLink> */}
        </form>
      </div>
    </div>
  );
}
