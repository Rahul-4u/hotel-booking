import axios from "axios";
import { useEffect, useState } from "react";
import ClintCard from "./ClintCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OfferCard from "./OfferCard";

export default function SpecialOffer() {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => setIsOpen(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
        const res = await axios.get("http://localhost:8000/offer");
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
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg text-center w-2/3 mx-auto">
          {/* <h1 className="text-3xl font-bold my-10 text-center">
            Client Review
          </h1> */}
          <div>
            <div className="slider-container  ">
              <Slider
                {...settings}
                className=" flex items-center justify-center gap-10 w-11/12 mx-auto"
              >
                {cards?.map((card, index) => (
                  <OfferCard key={index} closeModal={closeModal} card={card} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
