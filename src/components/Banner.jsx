import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { NavLink } from "react-router-dom";
import { HiArrowSmallRight } from "react-icons/hi2";
import { useContext } from "react";
import { AuthContext } from "../user/Authprovider";

export default function Banner() {
  const { darkMode } = useContext(AuthContext);
  return (
    <div
      className={`transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white  text-orange-500"
      }`}
    >
      <Carousel autoPlay={true} interval={3000} infiniteLoop={true}>
        {/* Slide 1 */}
        <div
          className="relative w-full h-[500px] md:h-[500px] lg:h-[600px] flex justify-center items-center"
          style={{
            backgroundImage: "url('https://i.ibb.co/1vNwWkZ/img14.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="z-10 md:w-1/2 max-w-[1440px] mx-auto text-center md:text-start animate__animated animate__fadeInRight">
            <h1 className="lg:text-6xl text-3xl font-bold mb-2">
              Experience the Ultimate Luxury
            </h1>
            <p className="text-slate-300">
              Relax in comfort and style at our premier hotel.
            </p>
            <NavLink to="/rooms" className="btn my-4 bg-sky-600">
              Explore Rooms <HiArrowSmallRight className="text-bold" />
            </NavLink>
          </div>
        </div>

        {/* Slide 2 */}
        <div
          className="relative w-full h-[500px] md:h-[500px] lg:h-[600px] flex justify-center items-center"
          style={{
            backgroundImage: "url('https://i.ibb.co/3sLkw32/img13-1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="z-10 md:w-1/2 max-w-[1440px] mx-auto text-center md:text-start animate__animated animate__fadeInRight">
            <h1 className="lg:text-6xl text-3xl font-bold">
              Your Dream Vacation Awaits
            </h1>
            <p className="text-slate-300">
              Escape to our beach resort and enjoy a serene getaway.
            </p>
            <NavLink to="/rooms" className="btn my-4 bg-sky-600">
              Explore Rooms <HiArrowSmallRight className="text-bold" />
            </NavLink>
          </div>
        </div>

        {/* Slide 3 */}
        <div
          className="relative w-full h-[500px] md:h-[500px] lg:h-[600px] flex justify-center items-center"
          style={{
            backgroundImage: "url('https://i.ibb.co/mHtz5np/img12-1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="z-10 md:w-1/2 max-w-[1440px] mx-auto text-center md:text-start animate__animated animate__fadeInRight">
            <h1 className="lg:text-5xl text-2xl font-bold">
              Stay in the Heart <br /> of the City
            </h1>
            <p className="text-slate-300">
              Perfectly located near top attractions and restaurants.
            </p>
            <NavLink to="/rooms" className="btn my-4 bg-sky-600">
              Explore Rooms <HiArrowSmallRight className="text-bold" />
            </NavLink>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
