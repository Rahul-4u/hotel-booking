import Header from "../components/Header";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SpecialOfferAdd() {
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const imageUrl = form.imageUrl.value;
    const discount = form.discount.value;
    const startDate = form.startDate.value;
    const endDate = form.endDate.value;
    const type = form.type.value;

    const newOffer = {
      title,
      description,
      discount,
      startDate,
      endDate,
      imageUrl,
      type,
    };

    try {
      const response = await axios.post(
        "https://b10-a11-server-site.vercel.app/add-offer",
        newOffer
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
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="bg-white shadow-lg p-6 w-full rounded-xl max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
            Offer Add
          </h1>
          <form onSubmit={handleRegister}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Title</label>
                <input
                  type="text"
                  name="title"
                  className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring focus:ring-blue-200 "
                  placeholder="Enter your title"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">EndDate</label>
                <input
                  type="text"
                  name="endDate"
                  className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring focus:ring-blue-200 "
                  placeholder="Enter your endDate"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">ImageUrl</label>
                <input
                  type="text"
                  name="imageUrl"
                  className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring focus:ring-blue-200 "
                  placeholder="Enter your imageUrl"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">StartDatee</label>
                <input
                  type="text"
                  name="startDate"
                  className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring focus:ring-blue-200 "
                  placeholder="Enter your startDate "
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Discount</label>
                <input
                  type="text"
                  name="discount"
                  className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring focus:ring-blue-200 "
                  placeholder="Enter your discount "
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Description</label>
                <input
                  type="text"
                  name="description"
                  className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring focus:ring-blue-200 "
                  placeholder="Enter your description "
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Type</label>
                <input
                  type="text"
                  name="type"
                  className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring focus:ring-blue-200 "
                  placeholder="Enter your type "
                />
              </div>
            </div>

            <button type="submit" className="btn w-full mb-4 bg-sky-400">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
