import { useContext } from "react";
import Header from "../components/Header";
import { AuthContext } from "./Authprovider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const { createUser, setUser, updateUserProfile } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstname = form.firstname.value;
    const lastname = form.lastname.value;
    const photourl = form.photourl.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({ displayName: firstname, photoURL: photourl })
          .then(() => {
            toast.success("Account Create succsse ful");
            navigate(location?.state ? location.state : "/");
          })
          .catch(() => {
            toast.error("Account update problem");
          });
      })
      .catch(() => {
        toast.error("Account create problem");
        // ..
      });
  };

  return (
    <div>
      <Header />
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="bg-white shadow-lg p-6 w-full rounded-xl max-w-sm">
          <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
            Register Now
          </h1>
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstname"
                className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring focus:ring-blue-200 "
                placeholder="Enter your First name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring focus:ring-blue-200 "
                placeholder="Enter your Last name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 mb-2">
                Photo URL
              </label>
              <input
                type="text"
                name="photourl"
                className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring focus:ring-blue-200 "
                placeholder="Enter your photo URL"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring focus:ring-blue-200 "
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring focus:ring-blue-200 "
                placeholder="Enter your password"
              />
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
