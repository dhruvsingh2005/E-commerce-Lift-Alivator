import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import { ArrowRight, User, Mail, Lock, ShieldCheck } from "lucide-react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

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
      console.log(error);
      const message = error.response?.data?.message || error.message;
      toast.error(message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div className="min-h-screen pt-32 flex flex-col items-center bg-background-dark px-6">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #c9a74a 1px, transparent 0)", backgroundSize: "48px 48px" }}></div>
      
      <form onSubmit={onSubmitHandler} className="w-full max-w-md glass-card border border-blue/10 p-10 rounded-sm relative z-10">
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
              type="password"
              className="w-full bg-white/5 border border-white/10 p-4 pl-12 outline-none focus:border-primary text-white text-sm transition-colors rounded-sm font-manrope"
              placeholder="Private Password"
              required
            />
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
