import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";
import MyBooking from "../pages/MyBooking";
import Rooms from "../pages/Rooms";
import Login from "../user/Login";
import Register from "../user/Register";
import AddRoom from "../pages/AddRoom";
import MyBookingUpadate from "../components/MyBookingUpadate";
import UserRivew from "../components/UserRivew";
import RoomCard from "../components/RoomCard";
import SpecialOffer from "../components/SpecialOffer";
import SpecialOfferAdd from "../components/SpecialOfferAdd";
import PrivateRoute from "./PrivateRoute";
import BookNowModal from "../components/BookNowModal";
import ErrorPage from "../pages/ErrorPage";
import RomeDeatils from "../components/RomeDeatils";
import PrivacyPolicy from "../components/PrivacyPolicy";
import TermsAndConditions from "../components/TermsAndConditions";
import ServisesAdd from "../components/ServisesAdd";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/rooms",
    element: <Rooms />,
  },
  {
    path: "/add-room",
    element: (
      <PrivateRoute>
        <AddRoom />
      </PrivateRoute>
    ),
  },
  {
    path: "/myBooking",
    element: (
      <PrivateRoute>
        <MyBooking />
      </PrivateRoute>
    ),
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/rivew/:id",
    element: <RoomCard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/update-booking/:id",
    element: <MyBookingUpadate />,
  },
  {
    path: "/rivew",
    element: <UserRivew />,
  },
  {
    path: "/special-offer",
    element: <SpecialOfferAdd />,
  },
  {
    path: "/room-details/:id",
    element: <RomeDeatils />,
  },
  {
    path: "/privecy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/trems",
    element: <TermsAndConditions />,
  },
  {
    path: "/serives",
    element: <ServisesAdd />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default Router;
