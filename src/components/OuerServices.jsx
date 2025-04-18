import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../user/Authprovider";

export default function OurServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("Our Services & Amenities");
  const { darkMode } = useContext(AuthContext);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get(
          "https://b10-a11-server-site.vercel.app/card"
        );
        if (res.status === 200) {
          setServices(res.data);
          setTitle(
            res.data.length > 0
              ? `Explore Our ${res.data.length} Premium Services & Amenities`
              : "No Services Available at the Moment"
          );
        }
      } catch (error) {
        console.error("Fetching error", error);
        setTitle("Failed to Load Services");
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  return (
    <div
      className={`max-w-7xl mx-auto px-4 py-10 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <h1
        className={`text-4xl font-semibold text-center ${
          darkMode ? "text-white" : "text-gray-800"
        } mb-8`}
      >
        {title}
      </h1>

      {loading ? (
        <div className="flex justify-center items-center h-32">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : services.length > 0 ? (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
              } shadow-lg rounded-lg p-6 text-center`}
            >
              <figure className="flex justify-center">
                <img
                  src={service.photo || "https://via.placeholder.com/100"}
                  alt={service.taitel || "Service Image"}
                  className="rounded-xl w-24 h-24 object-cover"
                />
              </figure>
              <div className="mt-4">
                <h2
                  className={`text-xl font-semibold ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {service.taitel || "Untitled Service"}
                </h2>
                <p
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  } mt-2`}
                >
                  {service.dec || "No description available."}
                </p>
                <div className="mt-4">
                  <NavLink
                    to="/rooms"
                    className={`${
                      darkMode
                        ? "text-blue-300 hover:text-blue-400"
                        : "text-blue-500 hover:text-blue-700"
                    } font-medium`}
                  >
                    View All Rooms →
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          className={`text-center ${
            darkMode ? "text-gray-300" : "text-gray-500"
          } text-lg mt-6`}
        >
          No services available at the moment. Please check back later!
        </div>
      )}
    </div>
  );
}
