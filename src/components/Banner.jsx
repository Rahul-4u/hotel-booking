import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { NavLink } from "react-router-dom";
import { HiArrowSmallRight } from "react-icons/hi2";

export default function Banner() {
  return (
    <div>
      <Carousel autoPlay={true} interval={3000} infiniteLoop={true}>
        <div
          className=" relative w-full  h-[500px] md:[500px]    lg:[600px]  md:justify-start justify-center   items-center flex "
          style={{
            backgroundImage: "url('https://i.ibb.co.com/1vNwWkZ/img14.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className=" absolute  bg-black inset-0  opacity-50"></div>{" "}
          <div className="block z-10 md:w-1/2 max-w-[1440px] mx-auto md:text-start animate__animated animate__fadeInRight">
            <h1 className="lg:text-6xl text-white z-10 text-3xl    font-bold mb-2  ">
              Experience the Ultimate Luxury
            </h1>
            <p className="text-slate-300">
              Relax in comfort and style at our premier hotel.
            </p>
            <NavLink to={"/rooms"} className="btn my-4  bg-sky-600 ">
              Explore Rooms <HiArrowSmallRight className="text-bold " />{" "}
            </NavLink>
          </div>
        </div>
        <div
          className=" relative w-full h-[500px]  md:[500px] lg:[600px] text-white flex justify-around items-center "
          style={{
            backgroundImage: "url('https://i.ibb.co.com/3sLkw32/img13-1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className=" absolute bg-black inset-0 z-10 opacity-50"></div>
          <div className="block z-10 md:w-1/2 max-w-[1440px] mx-auto md:text-start animate__animated animate__fadeInRight">
            <h1 className="lg:text-6xl  font-bold  text-3xl   text-block  ">
              Your Dream Vacation Awaits
            </h1>
            <p>Escape to our beach resort and enjoy a serene getaway.</p>
            <NavLink to={"/rooms"} className="btn my-4  bg-sky-600 ">
              Explore Rooms <HiArrowSmallRight className="text-bold " />{" "}
            </NavLink>
          </div>
        </div>
        <div
          className=" relative w-full h-[500px] md:[500px] lg:[600px] text-white flex justify-around items-center "
          style={{
            backgroundImage: "url('https://i.ibb.co.com/mHtz5np/img12-1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className=" absolute  bg-black inset-0  opacity-50"></div>{" "}
          <div className="block z-10 md:w-1/2 max-w-[1440px] mx-auto md:text-start animate__animated animate__fadeInRight">
            <h1 className="lg:text-5xl text-2xl mb-2  font-bold  ">
              Stay in the Heart <br /> of the City
            </h1>
            <p> Perfectly located near top attractions and restaurants.</p>
            <NavLink to={"/rooms"} className="btn my-4  bg-sky-600 ">
              Explore Rooms <HiArrowSmallRight className="text-bold " />{" "}
            </NavLink>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
