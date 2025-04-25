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
    <section
      className={`max-w-7xl mx-auto px-4 py-16 transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <h1
        className={`text-4xl font-bold text-center mb-12 tracking-tight ${
          darkMode ? "text-white" : "text-gray-800"
        }`}
      >
        {title}
      </h1>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : services.length > 0 ? (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group transform hover:scale-[1.02] transition duration-300 ease-in-out rounded-2xl overflow-hidden shadow-xl p-6 flex flex-col justify-between ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
              }`}
            >
              <figure className="flex justify-center mb-4">
                <img
                  src={service.photo || "https://via.placeholder.com/100"}
                  alt={service.taitel || "Service Image"}
                  className="w-24 h-24 object-cover rounded-full shadow-md border-4 border-blue-100 group-hover:border-blue-400 transition duration-300"
                />
              </figure>
              <div className="flex-1 text-center">
                <h2 className="text-xl font-semibold mb-2 capitalize">
                  {service.taitel || "Untitled Service"}
                </h2>
                <p
                  className={`text-sm leading-relaxed ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {service.dec || "No description available."}
                </p>
              </div>
              <div className="mt-6 text-center">
                <NavLink
                  to="/rooms"
                  className={`inline-block font-semibold transition ${
                    darkMode
                      ? "text-blue-300 hover:text-white"
                      : "text-blue-600 hover:text-blue-800"
                  }`}
                >
                  View All Rooms →
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          className={`text-center mt-10 text-lg font-medium ${
            darkMode ? "text-gray-300" : "text-gray-500"
          }`}
        >
          No services available at the moment. Please check back later!
        </div>
      )}
    </section>
  );
}
