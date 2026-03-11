import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Home, Shield, Menu, X } from "lucide-react";
import { assets } from "../assets/assets";

const Navbar = ({ setToken, sidebarOpen, setSidebarOpen }) => {
  return (
    <nav className="sticky top-0 z-50 w-full h-14 sm:h-16 bg-obsidian border-b border-white/5 px-4 sm:px-6 lg:px-10 flex items-center justify-between">
      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden text-white/70 hover:text-white shrink-0">
          {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <Link to="/" className="flex items-center gap-1.5 sm:gap-2 group min-w-0">
          <img src={assets.logo} alt="Winsume Lift Logo" className="h-8 sm:h-11 w-auto shrink-0 transition-transform group-hover:scale-105" />
          <div className="flex flex-col min-w-0">
            <span className="serif-title text-xs sm:text-lg font-semibold tracking-wider sm:tracking-widest uppercase text-white leading-none truncate">Winsume Lift India</span>
            <span className="text-[8px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary font-semibold">Private Limited</span>
          </div>
        </Link>
      </div>
      
      <div className="flex items-center gap-2 sm:gap-6 shrink-0">
        <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-green-500/5 border border-green-500/20 rounded-full">
          <Shield size={10} className="text-green-500" />
          <span className="text-[9px] text-green-500 font-bold uppercase tracking-widest">Protocol Active</span>
        </div>
        <button
          onClick={() => window.location.href = import.meta.env.VITE_FRONTEND_URL || "/"}
          className="flex items-center gap-1 px-2.5 py-1 sm:px-5 sm:py-2 text-[8px] sm:text-[10px] font-black uppercase tracking-[0.1em] sm:tracking-[0.2em] text-black bg-primary hover:bg-white transition-all rounded-sm shimmer-effect"
        >
          <Home size={12} />
          <span className="hidden sm:inline">Home</span>
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
