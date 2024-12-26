import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../user/Authprovider";
import { FaRegUserCircle } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

export default function Header() {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState();
  const handleTogle = () => {
    setOpen(!open);
  };

  const logoutHandle = () => {
    logOut();
  };

  return (
    <div className="bg-slate-300  sticky top-0 z-50 backdrop-blur-md opacity-95">
      <div className=" navbar  max-w-[1440px] mx-auto ">
        <div className="navbar-start flex gap-4">
          <img
            className="h-12 w-12  rounded-full"
            src="https://i.ibb.co.com/k1Lnzrf/images.png"
            alt=""
          />
          <h1 className="font-bold ">
            HOTLE <span className=" text-orange-500">HAVEN</span>
          </h1>
        </div>
        {/* ------------------------------------ */}
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
        {/* ---------------------------------------- */}
        <div className="navbar-end lg:flex hidden gap-4">
          {user?.email ? (
            <NavLink onClick={logoutHandle} className="btn bg-orange-400">
              logOut
            </NavLink>
          ) : (
            <NavLink to={"/login"} className="btn bg-orange-400">
              {" "}
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
        <button
          onClick={handleTogle}
          className="navbar-end flex lg:hidden text-4xl "
        >
          {" "}
          <CiMenuFries />{" "}
        </button>
      </div>
      {open && (
        <div>
          <div className="navbar-center nav-link nav lg:hidden  top-[60px] left-0 p-8 z-50 bg-slate-200 flex flex-col w-full  gap-4 absolute">
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
