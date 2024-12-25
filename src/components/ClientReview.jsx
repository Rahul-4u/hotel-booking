import axios from "axios";
import { useEffect, useState } from "react";
import ClintCard from "./ClintCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ClientReview() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
        console.error("fetching error", error);
      }
    };
    fetchRooms();
  }, []);
  return (
    <div className="">
      <div>
        <h1 className="text-3xl font-bold my-10 text-center">Client Review</h1>
        <div>
          <div className="slider-container  ">
            <Slider
              {...settings}
              className=" flex items-center justify-center gap-10 w-11/12 mx-auto"
            >
              {cards?.map((card, index) => (
                <ClintCard key={index} card={card} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
