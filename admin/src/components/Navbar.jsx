import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Home, Shield, Menu, X } from "lucide-react";
import { assets } from "../assets/assets";

const Navbar = ({ setToken, sidebarOpen, setSidebarOpen }) => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-obsidian border-b border-white/5 px-4 sm:px-6 lg:px-10 py-3 sm:py-4">
      <div className="flex h-16 sm:h-20 items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden text-white/70 hover:text-white">
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <Link to="/" className="flex items-center gap-2 group">
            <img src={assets.logo} alt="Winsume Lift Logo" className="h-12 sm:h-16 w-auto transition-transform group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="serif-title text-lg sm:text-2xl font-semibold tracking-widest uppercase text-white leading-none">Winsume Lift India</span>
              <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-primary font-semibold">Private Limited</span>
            </div>
          </Link>
        </div>
        
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="hidden md:flex items-center gap-2 px-4 py-1.5 bg-green-500/5 border border-green-500/20 rounded-full">
            <Shield size={12} className="text-green-500" />
            <span className="text-[10px] text-green-500 font-bold uppercase tracking-widest">Protocol Active</span>
          </div>
          <button
            onClick={() => window.location.href = "http://localhost:5173"}
            className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-black bg-primary hover:bg-white transition-all rounded-sm shimmer-effect"
          >
            Home <Home size={14} />
          </button>
        </div>
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
