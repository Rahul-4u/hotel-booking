import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function ServisesAdd() {
  const navigate = useNavigate();
  const handleRoom = async (e) => {
    e.preventDefault();
    const from = e.target;
    const taitel = from.taitel.value;
    const photo = from.photo.value;
    const dec = from.dec.value;

    console.log(taitel, photo, dec);

    const newCard = {
      taitel,
      dec,
      photo,
    };

    try {
      const response = await axios.post(
        "https://b10-a11-server-site.vercel.app/add-servies",
        newCard
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
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRoom} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">taitel</span>
                </label>
                <input
                  type="text"
                  name="taitel"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="dec"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
