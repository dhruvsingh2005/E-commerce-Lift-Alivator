import { useState } from "react";
import PropTypes from "prop-types";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + "/api/user/admin", {
        email,
        password,
      });

      if (response.data.success) {
        setToken(response.data.token);
        toast.success("Login successful.");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      const message = error.response?.data?.message || "Please try again later.";
      toast.error(message);
    }
  };

  return (
    <div className="flex items-center justify-center text-black w-full min-h-screen">
     <div className="max-w-md px-8 py-6 bg-gray-100 rounded-lg shadow-md">
        <div className="mb-3 w-fit">
          <img src={assets.logo} alt="Trendify" />
        </div>
        <h1 className="mb-4 text-2xl font-bold">Admin Dashboard</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3 min-w-72">
            <p className="mb-2 text-sm font-medium text-gray-700">Email</p>
            <input
  onChange={(e) => setEmail(e.target.value)}
  value={email}
  className="w-full px-3 py-2 border border-gray-300 text-black bg-white placeholder-black rounded-md outline-none"
  type="email"
  placeholder="your@email.com"
  required
/>
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-gray-700">Password</p>
            <div className="relative">
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="w-full px-3 py-2 border border-gray-300 text-black placeholder-black rounded-md outline-none pr-10"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          <button
            className="w-full px-4 py-2 mt-5 text-white bg-black rounded-md"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
