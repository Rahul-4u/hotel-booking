import { NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaInstagramSquare,
  // FaXTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../user/Authprovider";

export default function Footer() {
  const { darkMode } = useContext(AuthContext);

  return (
    <footer
      className={`footer p-10 ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-base-200 text-base-content"
      }`}
    >
      {/* Logo and Social Media */}
      <aside>
        <img
          className="w-1/2 mb-4"
          src="https://i.ibb.co.com/k1Lnzrf/images.png"
          alt="Hotel Haven Logo"
        />
        <p className="text-2xl font-semibold mb-4">Hotel Haven</p>
        <div className="flex gap-4 text-2xl">
          <a
            className={`hover:text-sky-600 transition-colors duration-300 ${
              darkMode ? "text-gray-400" : "text-gray-700"
            }`}
            href="https://facebook.com"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            className={`hover:text-orange-500 transition-colors duration-300 ${
              darkMode ? "text-gray-400" : "text-gray-700"
            }`}
            href="https://instagram.com"
            rel="noreferrer"
          >
            <FaInstagramSquare />
          </a>
          <a
            className={`hover:text-black transition-colors duration-300 ${
              darkMode ? "text-gray-400" : "text-gray-700"
            }`}
            href="https://twitter.com"
            rel="noreferrer"
          >
            {/* <FaXTwitter /> */}
          </a>
          <a
            className={`hover:text-sky-600 transition-colors duration-300 ${
              darkMode ? "text-gray-400" : "text-gray-700"
            }`}
            href="https://linkedin.com"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </aside>

      {/* Services */}
      <nav>
        <h6 className="footer-title">Services</h6>
        <NavLink
          to={"/privecy"}
          className={`link link-hover ${
            darkMode
              ? "text-gray-400 hover:text-white"
              : "text-gray-700 hover:text-black"
          }`}
        >
          Privacy Policy
        </NavLink>
        <NavLink
          to={"/trems"}
          className={`link link-hover ${
            darkMode
              ? "text-gray-400 hover:text-white"
              : "text-gray-700 hover:text-black"
          }`}
        >
          Terms & Conditions
        </NavLink>
      </nav>

      {/* Navigation Links */}
      <nav>
        <h6 className="footer-title">Nav Link</h6>
        <NavLink
          to={"/"}
          className={`link link-hover ${
            darkMode
              ? "text-gray-400 hover:text-white"
              : "text-gray-700 hover:text-black"
          }`}
        >
          Home
        </NavLink>
        <NavLink
          to={"/rooms"}
          className={`link link-hover ${
            darkMode
              ? "text-gray-400 hover:text-white"
              : "text-gray-700 hover:text-black"
          }`}
        >
          Rooms
        </NavLink>
        <NavLink
          to={"/myBooking"}
          className={`link link-hover ${
            darkMode
              ? "text-gray-400 hover:text-white"
              : "text-gray-700 hover:text-black"
          }`}
        >
          My Booking
        </NavLink>
      </nav>

      {/* Contact Information */}
      <nav>
        <h6 className="footer-title">Contact Information</h6>
        <p className={`${darkMode ? "text-gray-400" : "text-gray-700"}`}>
          Coxs Bazar
        </p>
        <p className={`${darkMode ? "text-gray-400" : "text-gray-700"}`}>
          025543.5465.87
        </p>
        <p className={`${darkMode ? "text-gray-400" : "text-gray-700"}`}>
          kahulwp24@gmail.com
        </p>
      </nav>
    </footer>
  );
}
