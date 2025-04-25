import { toast } from "react-toastify";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import { useContext } from "react";
import { AuthContext } from "../user/Authprovider";

export default function AddRoom() {
  const navigate = useNavigate();
  const { darkMode } = useContext(AuthContext);

  const handleRoom = async (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const price = from.price.value;
    const roomtyp = from.roomtyp.value;
    const maxguests = from.maxguests.value;
    const size = from.size.value;
    const description = from.description.value;
    const facilities = Array.from(from.facilities)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);
    const photo = from.photo.value;
    const available = from.available.value;
    const special = from.special.value;
    const daynamicId = from.daynamicId.value;

    const addNewRoom = {
      daynamicId,
      name,
      price,
      roomtyp,
      maxguests,
      size,
      facilities,
      description,
      photo,
      available,
      special,
      reivew: 0,
    };

    try {
      const response = await axios.post(
        "https://b10-a11-server-site.vercel.app/add-room",
        addNewRoom
      );
      if (response.status === 200) {
        toast.success("Room added successfully");
        navigate("/");
        e.target.reset();
      } else {
        toast.error("Failed to add room");
      }
    } catch (error) {
      console.error("error add room", error);
      toast.error("Failed to add room");
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}>
      <Header />
      <div className="py-12 px-6">
        <div
          className={`max-w-3xl mx-auto shadow-xl rounded-lg p-8 ${
            darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-700"
          }`}
        >
          <h1
            className={`text-3xl font-semibold text-center mb-8 ${
              darkMode ? "text-white" : "text-gray-700"
            }`}
          >
            Add New Room
          </h1>

          {/* Form */}
          <form onSubmit={handleRoom} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2">Room Name</label>
                <input
                  type="text"
                  name="name"
                  className={`w-full p-3 rounded-md border ${
                    darkMode
                      ? "bg-gray-700 text-white border-gray-600"
                      : "bg-white text-gray-700 border-gray-300"
                  }`}
                  required
                />
              </div>

              <div>
                <label className="block mb-2">Price (per night)</label>
                <input
                  type="number"
                  name="price"
                  className={`w-full p-3 rounded-md border ${
                    darkMode
                      ? "bg-gray-700 text-white border-gray-600"
                      : "bg-white text-gray-700 border-gray-300"
                  }`}
                  required
                />
              </div>

              <div>
                <label className="block mb-2">Room Type</label>
                <select
                  name="roomtyp"
                  className={`w-full p-3 rounded-md border ${
                    darkMode
                      ? "bg-gray-700 text-white border-gray-600"
                      : "bg-white text-gray-700 border-gray-300"
                  }`}
                  required
                >
                  <option disabled selected>
                    Select Room Type
                  </option>
                  <option>Single</option>
                  <option>Double</option>
                  <option>Suite</option>
                </select>
              </div>

              <div>
                <label className="block mb-2">Max Guests</label>
                <input
                  type="number"
                  name="maxguests"
                  className={`w-full p-3 rounded-md border ${
                    darkMode
                      ? "bg-gray-700 text-white border-gray-600"
                      : "bg-white text-gray-700 border-gray-300"
                  }`}
                  required
                />
              </div>

              <div>
                <label className="block mb-2">Room Size (sq ft)</label>
                <input
                  type="number"
                  name="size"
                  className={`w-full p-3 rounded-md border ${
                    darkMode
                      ? "bg-gray-700 text-white border-gray-600"
                      : "bg-white text-gray-700 border-gray-300"
                  }`}
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block mb-2">Description</label>
                <textarea
                  name="description"
                  className={`w-full p-3 rounded-md border ${
                    darkMode
                      ? "bg-gray-700 text-white border-gray-600"
                      : "bg-white text-gray-700 border-gray-300"
                  }`}
                  rows={4}
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block mb-2">Facilities</label>
                <div className="flex flex-wrap gap-4">
                  {["WiFi", "AC", "TV", "Mini Bar", "Balcony", "Heater"].map(
                    (item) => (
                      <label key={item} className="flex items-center space-x-2">
                        <input type="checkbox" name="facilities" value={item} />
                        <span>{item}</span>
                      </label>
                    )
                  )}
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block mb-2">Photo URL</label>
                <input
                  type="text"
                  name="photo"
                  className={`w-full p-3 rounded-md border ${
                    darkMode
                      ? "bg-gray-700 text-white border-gray-600"
                      : "bg-white text-gray-700 border-gray-300"
                  }`}
                  required
                />
              </div>

              <div>
                <label className="block mb-2">Available</label>
                <select
                  name="available"
                  className={`w-full p-3 rounded-md ${
                    darkMode
                      ? "bg-gray-700 text-white border-gray-600"
                      : "bg-white text-gray-700 border-gray-300"
                  }`}
                  required
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>

              <div>
                <label className="block mb-2">Special</label>
                <select
                  name="special"
                  className={`w-full p-3 rounded-md ${
                    darkMode
                      ? "bg-gray-700 text-white border-gray-600"
                      : "bg-white text-gray-700 border-gray-300"
                  }`}
                  required
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block mb-2">Dynamic ID</label>
                <input
                  type="text"
                  name="daynamicId"
                  className={`w-full p-3 rounded-md border ${
                    darkMode
                      ? "bg-gray-700 text-white border-gray-600"
                      : "bg-white text-gray-700 border-gray-300"
                  }`}
                  required
                />
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
              >
                Add Room
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
