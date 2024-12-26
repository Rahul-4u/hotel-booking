import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <div>
      <footer className="footer bg-base-200 text-base-content p-10">
        <aside>
          <img
            className="w-1/2"
            src="https://i.ibb.co.com/k1Lnzrf/images.png"
            alt=""
          />

          <p className="text-2xl font-semibold">Hotel Haven</p>
          <div className="flex gap-4 text-2xl ">
            <a className="text-sky-600" href="https://facebook.com">
              {" "}
              <FaFacebook />
            </a>
            <a className="text-orange-500" href="https://twitter.com">
              <FaInstagramSquare />
            </a>
            <a className="text-black" href="https://instagram.com">
              <FaXTwitter />{" "}
            </a>
            <a className="text-sky-600" href="https://linkedin.com">
              <FaLinkedin />{" "}
            </a>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <NavLink to={"/privecy"}> Privacy Policy </NavLink>
          <NavLink to={"/trems"}>Terms & Conditions</NavLink>
        </nav>
        <nav>
          <h6 className="footer-title">Nav Link</h6>
          <NavLink to={"/"} className="link link-hover">
            Home
          </NavLink>
          <NavLink to={"/rooms"} className="link link-hover">
            Rooms
          </NavLink>
          <NavLink to={"/myBooking"} className="link link-hover">
            My Booking
          </NavLink>
        </nav>
        <nav>
          <h6 className="footer-title">Contact Information</h6>
          <a className="link link-hover">Coxs Bazar</a>
          <a className="link link-hover">025543.5465..87.</a>
          <a className="link link-hover">kahulwp24@gmail.com</a>
        </nav>
      </footer>
    </div>
  );
}
