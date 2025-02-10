import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../user/Authprovider";
import { FaRegUserCircle } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

export default function Header() {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const handleTogle = () => {
    setOpen(!open);
  };

  const logoutHandle = () => {
    logOut();
  };

  return (
    <div className="bg-primary fixed top-0 left-0 right-0 z-50 backdrop-blur-md opacity-95 w-full">
      <div className="navbar max-w-[1440px] mx-auto px-4">
        <div className="navbar-start flex gap-4">
          <img
            className="h-12 w-12 rounded-full"
            src="https://i.ibb.co.com/k1Lnzrf/images.png"
            alt="Logo"
          />
          <h1 className="font-bold">
            HOTEL <span className="text-orange-500">HAVEN</span>
          </h1>
        </div>

        {/* Desktop Navbar Links */}
        <div className="navbar-center lg:flex gap-4 hidden">
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "text-orange-500" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to={"/rooms"}
            className={({ isActive }) => (isActive ? "text-orange-500" : "")}
          >
            Rooms
          </NavLink>
          <NavLink
            to={"/add-room"}
            className={({ isActive }) => (isActive ? "text-orange-500" : "")}
          >
            Add Room
          </NavLink>
          <NavLink
            to={"/special-offer"}
            className={({ isActive }) => (isActive ? "text-orange-500" : "")}
          >
            Add Offer
          </NavLink>
          <NavLink
            to={"/myBooking"}
            className={({ isActive }) => (isActive ? "text-orange-500" : "")}
          >
            My Bookings
          </NavLink>
        </div>

        {/* Login/Logout Button and User Profile */}
        <div className="navbar-end lg:flex hidden gap-4">
          {user?.email ? (
            <NavLink onClick={logoutHandle} className="btn bg-orange-400">
              logOut
            </NavLink>
          ) : (
            <NavLink to={"/login"} className="btn bg-orange-400">
              <button>Login</button>
            </NavLink>
          )}

          {user?.email && user.email ? (
            <div>
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="User Profile"
                  className="h-10 w-10 rounded-full"
                />
              ) : (
                <div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-sm text-gray-500">No Image</span>
                </div>
              )}
            </div>
          ) : (
            <FaRegUserCircle className="text-2xl" />
          )}
        </div>

        {/* Mobile Navbar Toggle */}
        <button
          onClick={handleTogle}
          className="navbar-end flex lg:hidden text-4xl"
        >
          <CiMenuFries />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div>
          <div className="absolute top-[60px] left-0 w-full z-40 bg-slate-200 p-8 gap-4">
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "text-orange-500" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to={"/rooms"}
              className={({ isActive }) => (isActive ? "text-orange-500" : "")}
            >
              Rooms
            </NavLink>
            <NavLink
              to={"/add-room"}
              className={({ isActive }) => (isActive ? "text-orange-500" : "")}
            >
              Add Room
            </NavLink>
            <NavLink
              to={"/special-offer"}
              className={({ isActive }) => (isActive ? "text-orange-500" : "")}
            >
              Add Offer
            </NavLink>
            <NavLink
              to={"/myBooking"}
              className={({ isActive }) => (isActive ? "text-orange-500" : "")}
            >
              My Bookings
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}
