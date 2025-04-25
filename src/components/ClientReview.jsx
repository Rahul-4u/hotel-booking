import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../user/Authprovider";
import ClintCard from "./ClintCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ClientReview() {
  const { darkMode } = useContext(AuthContext);
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await axios.get(
          "https://b10-a11-server-site.vercel.app/filter-rivew"
        );
        if (res.status === 200) {
          setCards(res.data);
        }
      } catch (error) {
        console.error("Fetching error:", error);
      }
    };
    fetchRooms();
  }, []);

  return (
    <section
      className={`py-12 transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-10">Client Reviews</h1>
        <div className="slider-container">
          <Slider
            {...settings}
            className="mx-auto w-[95%] md:w-[90%] lg:w-[85%]"
          >
            {cards?.map((card, index) => (
              <ClintCard key={index} card={card} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
