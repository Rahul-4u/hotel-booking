import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Register() {
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      toast.error("Passwords do not match!");
      return;
    }

    if (
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      password?.length < 6
    ) {
      setError(
        "Password must include at least one uppercase, one lowercase letter, and be at least 6 characters long."
      );
      toast.error(
        "Password must include at least one uppercase, one lowercase letter, and be at least 6 characters long."
      );
      return;
    }

    setError("");
    toast.success("Registration successful!");
    console.log({ name, email, photoURL, password });
    form.reset();
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Register
        </h1>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="photoURL" className="block text-gray-600 mb-2">
              Photo URL
            </label>
            <input
              type="url"
              name="photoURL"
              className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your photo URL"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-600 mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Confirm your password"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="btn w-full bg-sky-500 text-white py-2 rounded-md"
          >
            Register
          </button>
        </form>
        <p className="text-center text-sm mt-4 text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-sky-500 underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
