import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Home, Shield, Menu, X } from "lucide-react";
import { assets } from "../assets/assets";

const Navbar = ({ setToken, sidebarOpen, setSidebarOpen }) => {
  return (
    <nav className="sticky top-0 z-50 w-full h-14 sm:h-16 bg-obsidian border-b border-white/5 px-4 sm:px-6 lg:px-10 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden text-white/70 hover:text-white">
          {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <Link to="/" className="flex items-center gap-2 group">
          <img src={assets.logo} alt="Winsume Lift Logo" className="h-9 sm:h-11 w-auto transition-transform group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="serif-title text-base sm:text-lg font-semibold tracking-widest uppercase text-white leading-none">Winsume Lift India</span>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-primary font-semibold">Private Limited</span>
          </div>
        </Link>
      </div>
      
      <div className="flex items-center gap-3 sm:gap-6">
        <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-green-500/5 border border-green-500/20 rounded-full">
          <Shield size={10} className="text-green-500" />
          <span className="text-[9px] text-green-500 font-bold uppercase tracking-widest">Protocol Active</span>
        </div>
        <button
          onClick={() => window.location.href = "http://localhost:5173"}
          className="flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-black bg-primary hover:bg-white transition-all rounded-sm shimmer-effect"
        >
          Home <Home size={12} />
        </button>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  setToken: PropTypes.func.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
  setSidebarOpen: PropTypes.func.isRequired,
};

export default Navbar;
