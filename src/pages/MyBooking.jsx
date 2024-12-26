import { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import MyBookingCard from "../components/MyBookingCard";
import Footer from "../components/Footer";

export default function MyBooking() {
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const res = await axios.get(
          "https://b10-a11-server-site.vercel.app/my-booking",
          {
            withCredentials: true,
          }
        );
        if (res.status === 200) {
          setBooking(res.data);
        }
      } catch (error) {
        console.error("fetching error", error);
      }
    };
    fetchBooking();
  }, []);

  const handelDeleteUi = (id) => {
    setBooking(booking.filter((bookings) => bookings._id !== id));
  };
  return (
    <div>
      <Header />
      <h1>Booking : {booking?.length}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-6 my-8">
        {booking?.map((book, index) => (
          <MyBookingCard key={index} book={book} onDelete={handelDeleteUi} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
