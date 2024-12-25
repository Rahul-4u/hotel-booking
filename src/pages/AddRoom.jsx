import { toast } from "react-toastify";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddRoom() {
  const navigate = useNavigate();
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

    const addNewRoom = {
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
        "http://localhost:8000/add-room",
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
      // toast.error("N/A");
    }
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 py-12 px-6">
        <div className="mx-w-2/3 mx-auto bg-white shadow-xl rounded-lg p-8">
          <h1 className="text-3xl font-semibold text-center mb-8 text-gray-700">
            Add New Room
          </h1>

          {/* form  --------1--------add */}
          <form onSubmit={handleRoom} className=" space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-600">Room Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              {/* --------2------- */}
              <div>
                <label className="block text-gray-600">Price (per night)</label>
                <input
                  type="number"
                  name="price"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              {/* --------3------- */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Room Type</span>
                </label>

                {/*  */}
                <select
                  name="roomtyp"
                  className="select select-ghost border-sky-200 w-full max-w-xs"
                >
                  <option disabled selected>
                    Select Room Type{" "}
                  </option>
                  <option>Single</option>
                  <option>Double</option>
                  <option>Suite</option>
                </select>
              </div>
              {/* --------4------- */}
              <div>
                <label className="block text-gray-600">Max Guests</label>
                <input
                  type="number"
                  name="maxguests"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              {/* ------5--------- */}
              <div>
                <label className="block text-gray-600">Room Size (sq ft)</label>
                <input
                  type="number"
                  name="size"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              {/* -------6-------- */}
              <div>
                <label className="block text-gray-600">Description</label>
                <textarea
                  type="text"
                  name="description"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              {/* --------7------- */}
              <div>
                <label className="block text-gray-600">Facilities</label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="WiFi"
                      name="facilities"
                      className="mr-2"
                    />
                    WiFi
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="AC"
                      name="facilities"
                      className="mr-2"
                    />
                    AC
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="TV"
                      name="facilities"
                      className="mr-2"
                    />
                    TV
                  </label>
                </div>
              </div>
              {/* -------8-------- */}
              <div>
                <label className="block text-gray-600">Room Image</label>
                <input
                  type="text"
                  name="photo"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              {/* --------9------- */}
              <div>
                <label className="block text-gray-600">Available</label>
                <input
                  type="number"
                  name="available"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-600">
                  Special Offer (if any)
                </label>
                <input
                  type="text"
                  name="special"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full btn px-4 bg-blue-600 rounnded-lg  text-white"
            >
              Add Room
            </button>
            {/* --------------- */}
          </form>
        </div>
      </div>
    </div>
  );
}
