import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { PlusCircle, List, MessageSquare } from "lucide-react";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-4 px-8 py-4 transition-all duration-300 group ${
      isActive
        ? "active text-white"
        : "text-white/70 hover:bg-white/[0.06] hover:text-white"
    }`;

  return (
    <>
      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-30 lg:hidden transition-opacity duration-300 ${sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <aside className={`w-64 lg:w-[20%] fixed top-0 left-0 bottom-0 bg-obsidian border-r border-white/5 pt-28 z-40 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="flex flex-col gap-2">
          <div className="px-8 mb-4">
            <p className="text-[11px] uppercase tracking-[0.4em] text-white font-black">
              Core Management
            </p>
          </div>

          <NavLink className={linkClass} to="/add" onClick={() => setSidebarOpen(false)}>
            <PlusCircle size={20} className="text-primary/80 group-hover:text-primary transition-colors" />
            <p className="text-sm uppercase tracking-[0.2em] font-bold">Add Architecture</p>
          </NavLink>

          <NavLink className={linkClass} to="/list" onClick={() => setSidebarOpen(false)}>
            <List size={20} className="text-primary/80 group-hover:text-primary transition-colors" />
            <p className="text-sm uppercase tracking-[0.2em] font-bold">Registry List</p>
          </NavLink>

          <div className="px-8 mt-8 mb-4">
            <p className="text-[11px] uppercase tracking-[0.4em] text-white font-black">
              Engagement
            </p>
          </div>

          <NavLink className={linkClass} to="/orders" onClick={() => setSidebarOpen(false)}>
            <MessageSquare size={20} className="text-primary/80 group-hover:text-primary transition-colors" />
            <p className="text-sm uppercase tracking-[0.2em] font-bold">Project Inquiries</p>
          </NavLink>
        </div>
      </aside>
    </>
  );
};

Sidebar.propTypes = {
  sidebarOpen: PropTypes.bool.isRequired,
  setSidebarOpen: PropTypes.func.isRequired,
};

export default Sidebar;
