import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../user/Authprovider";
import { FaMoon, FaRegUserCircle, FaSun } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

export default function Header() {
  const { user, logOut, setDarkMode, darkMode } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const logoutHandle = () => logOut();
  const handleToggle = () => setOpen(!open);

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full backdrop-blur-md opacity-95 ${
        darkMode ? "bg-gray-900 text-white" : "bg-slate-300"
      }`}
    >
      <div className="navbar max-w-[1440px] mx-auto flex justify-between items-center p-4">
        <div className="flex gap-4 items-center">
          <img
            className="h-12 w-12 rounded-full"
            src="https://i.ibb.co.com/k1Lnzrf/images.png"
            alt="Logo"
          />
          <h1 className="font-bold text-lg">
            HOTLE <span className="text-orange-500">HAVEN</span>
          </h1>
        </div>
        <div className="hidden lg:flex gap-4">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-orange-500" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/rooms"
            className={({ isActive }) => (isActive ? "text-orange-500" : "")}
          >
            Rooms
          </NavLink>
          <NavLink
            to="/add-room"
            className={({ isActive }) => (isActive ? "text-orange-500" : "")}
          >
            Add Room
          </NavLink>
          <NavLink
            to="/special-offer"
            className={({ isActive }) => (isActive ? "text-orange-500" : "")}
          >
            Add Offer
          </NavLink>
          <NavLink
            to="/myBooking"
            className={({ isActive }) => (isActive ? "text-orange-500" : "")}
          >
            My Bookings
          </NavLink>
        </div>
        <div className="hidden lg:flex items-center gap-4">
          {user?.email ? (
            <button onClick={logoutHandle} className="btn bg-orange-400">
              Logout
            </button>
          ) : (
            <NavLink to="/login" className="btn bg-orange-400">
              Login
            </NavLink>
          )}

          {user?.photoURL ? (
            <img
              src={user.photoURL}
              alt="User Profile"
              className="h-10 w-10 rounded-full"
            />
          ) : (
            <FaRegUserCircle className="text-2xl" />
          )}
          <button onClick={toggleDarkMode} className="text-2xl">
            {darkMode ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-gray-500" />
            )}
          </button>
        </div>

        <button onClick={handleToggle} className="lg:hidden text-4xl">
          <CiMenuFries />
        </button>
      </div>
      {open && (
        <div className="lg:hidden absolute top-[60px] left-0 w-full bg-slate-200 flex flex-col p-4 gap-4">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-orange-500" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/rooms"
            className={({ isActive }) => (isActive ? "text-orange-500" : "")}
          >
            Rooms
          </NavLink>
          <NavLink
            to="/add-room"
            className={({ isActive }) => (isActive ? "text-orange-500" : "")}
          >
            Add Room
          </NavLink>
          <NavLink
            to="/special-offer"
            className={({ isActive }) => (isActive ? "text-orange-500" : "")}
          >
            Add Offer
          </NavLink>
          <NavLink
            to="/myBooking"
            className={({ isActive }) => (isActive ? "text-orange-500" : "")}
          >
            My Bookings
          </NavLink>
        </div>
      )}
    </div>
  );
}
