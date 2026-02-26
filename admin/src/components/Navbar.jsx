import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { LogOut, Shield } from "lucide-react";
import { assets } from "../assets/assets";

const Navbar = ({ setToken }) => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-obsidian border-b border-white/5 px-6 lg:px-12 py-3">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={assets.logo} alt="Winsume Lift Logo" className="h-20 w-auto transition-transform group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="serif-title text-2xl font-semibold tracking-widest uppercase text-white leading-none">Winsume Lift India</span>
            <span className="text-sm uppercase tracking-[0.2em] text-primary font-semibold">Private Limited</span>
          </div>
        </Link>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2 px-4 py-1.5 bg-green-500/5 border border-green-500/20 rounded-full">
            <Shield size={12} className="text-green-500" />
            <span className="text-[10px] text-green-500 font-bold uppercase tracking-widest">Protocol Active</span>
          </div>
          <button
            onClick={() => setToken("")}
            className="flex items-center gap-2 px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-black bg-primary hover:bg-white transition-all rounded-sm shimmer-effect"
          >
            Terminal Logout <LogOut size={14} />
          </button>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Navbar;
