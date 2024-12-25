import { useContext } from "react";
import Header from "../components/Header";
import { AuthContext } from "./Authprovider";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { googleLogin, login } = useContext(AuthContext);
  const haldleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Login successful");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message || "login faild");
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then(() => {
        toast.success("Login successful");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message || "login faild");
      });
  };

  return (
    <div>
      <Header />
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="bg-white shadow-lg p-6 w-full rounded-xl max-w-sm">
          <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
            Login
          </h1>
          <form onSubmit={handleLogin}>
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
            <div>
              <button className="text-sm mb-4 text-sky-400">
                forgot password ?
              </button>
            </div>
            <button type="submit" className="btn w-full mb-4 bg-sky-400">
              Login
            </button>
          </form>
          <button
            className="btn w-full mb-4 bg-orange-500"
            onClick={haldleGoogleLogin}
          >
            Login With Google
          </button>
          <div className="flex gap-4 text-sm  items-center justify-center ">
            <p>Dont have an account ?</p>
            <NavLink to={"/register"} className="text-sky-700   underline">
              Register Now
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
