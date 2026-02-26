import { NavLink } from "react-router-dom";
import { PlusCircle, List, MessageSquare, LayoutDashboard } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-[20%] min-h-[calc(100vh-80px)] bg-obsidian border-r border-white/5 pt-12">
      <div className="flex flex-col gap-2">
        <div className="px-8 mb-4">
          <p className="text-[9px] uppercase tracking-[0.4em] text-white/70 font-black">Core Management</p>
        </div>

        <NavLink
          className={({ isActive }) => 
            `flex items-center gap-4 px-8 py-4 transition-all duration-300 group ${
              isActive ? 'active' : 'hover:bg-white/[0.02] text-white/40'
            }`
          }
          to="/add"
        >
          <PlusCircle size={18} className="text-primary/70 group-hover:text-primary transition-colors" />
          <p className="hidden md:block text-[11px] uppercase tracking-[0.2em] font-bold">Add Architecture</p>
        </NavLink>

        <NavLink
          className={({ isActive }) => 
            `flex items-center gap-4 px-8 py-4 transition-all duration-300 group ${
              isActive ? 'active' : 'hover:bg-white/[0.02] text-white/40'
            }`
          }
          to="/list"
        >
          <List size={18} className="text-primary/70 group-hover:text-primary transition-colors" />
          <p className="hidden md:block text-[11px] uppercase tracking-[0.2em] font-bold">Registry List</p>
        </NavLink>

        <div className="px-8 mt-8 mb-4">
          <p className="text-[9px] uppercase tracking-[0.4em] text-white/70 font-black">Engagement</p>
        </div>

        <NavLink
          className={({ isActive }) => 
            `flex items-center gap-4 px-8 py-4 transition-all duration-300 group ${
              isActive ? 'active' : 'hover:bg-white/[0.02] text-white/40'
            }`
          }
          to="/orders"
        >
          <MessageSquare size={18} className="text-primary/70 group-hover:text-primary transition-colors" />
          <p className="hidden md:block text-[11px] uppercase tracking-[0.2em] font-bold">Project Inquiries</p>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
