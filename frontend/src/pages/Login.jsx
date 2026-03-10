import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import { ArrowRight, User, Mail, Lock, ShieldCheck, Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/user/register", { name, email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          toast.success("Account Created Successfully");
        } else {
          toast.error(response.data.message);
        }
      } else {
        // First, try admin login. If admin creds, open admin panel.
        try {
          const adminResponse = await axios.post(backendUrl + "/api/user/admin", { email, password });
          if (adminResponse.data.success) {
            localStorage.setItem("adminToken", adminResponse.data.token);
            toast.success("Admin login successful");
            const adminUrl = import.meta.env.VITE_ADMIN_URL || "http://localhost:5174";
            window.location.href = adminUrl;
            return;
          }
        } catch (adminError) {
          const status = adminError.response?.status;
          if (status && status !== 400) {
            const message = adminError.response?.data?.message || adminError.message;
            toast.error(message);
            return;
          }
        }

        // Normal user login
        const response = await axios.post(backendUrl + "/api/user/login", { email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          toast.success("Logged In Successfully");
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log("Full Error Object:", error);
      toast.error(error.response?.data?.message || "Connection Error: Check if Backend is running");
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center px-6 overflow-hidden">
      
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/image_132917.jpg')", 
          filter: "brightness(0.4)" 
        }}
      ></div>

      {/* Decorative radial overlay to maintain the "gold" feel */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-1" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #c9a74a 1px, transparent 0)", backgroundSize: "48px 48px" }}></div>
      
      <form onSubmit={onSubmitHandler} className="w-full max-w-md backdrop-blur-md bg-black/60 border border-white/10 p-10 rounded-sm relative z-10 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
        <div className="text-center mb-10">
          <p className="text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-4 font-manrope">Security Portal</p>
          <h2 className="serif-title text-4xl text-white mb-2">{currentState}</h2>
          <div className="gold-hairline w-12 mx-auto"></div>
        </div>

        <div className="space-y-6">
          {currentState === "Sign Up" && (
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" size={18} />
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                className="w-full bg-white/5 border border-white/10 p-4 pl-12 outline-none focus:border-primary text-white text-sm transition-colors rounded-sm font-manrope"
                placeholder="Full Name"
                required
              />
            </div>
          )}

          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" size={18} />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className="w-full bg-white/5 border border-white/10 p-4 pl-12 outline-none focus:border-primary text-white text-sm transition-colors rounded-sm font-manrope"
              placeholder="Email Address"
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" size={18} />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type={showPassword ? "text" : "password"}
              className="w-full bg-white/5 border border-white/10 p-4 pl-12 pr-12 outline-none focus:border-primary text-white text-sm transition-colors rounded-sm font-manrope"
              placeholder="Private Password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-primary/40 hover:text-primary transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <div className="flex justify-between w-full text-[10px] uppercase tracking-widest font-bold mt-6 text-white/40">
          <p className="hover:text-primary cursor-pointer transition-colors">Forgot Access?</p>
          {currentState === "Login" ? (
            <p
              onClick={() => setCurrentState("Sign Up")}
              className="hover:text-primary cursor-pointer transition-colors"
            >
              Create Identity
            </p>
          ) : (
            <p
              onClick={() => setCurrentState("Login")}
              className="hover:text-primary cursor-pointer transition-colors"
            >
              Login Access
            </p>
          )}
        </div>

        <button className="w-full bg-primary text-black py-5 mt-10 rounded-sm font-black uppercase tracking-[0.4em] text-[10px] flex items-center justify-center gap-3 hover:bg-white transition-all shadow-xl shimmer-effect">
          {currentState === "Login" ? "AUTHORIZE ACCESS" : "GENERATE IDENTITY"} <ArrowRight size={14} />
        </button>

        <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-center gap-4 text-white/20">
          <ShieldCheck size={20} />
          <span className="text-[9px] uppercase tracking-[0.2em] font-medium leading-relaxed font-manrope">
            Winsume Platinum Encryption <br /> Standard Protocol Active
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;