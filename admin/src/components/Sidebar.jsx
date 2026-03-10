import { NavLink } from "react-router-dom";
import { PlusCircle, List, MessageSquare, LayoutDashboard } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-[20%] fixed top-0 left-0 bottom-0 bg-obsidian border-r border-white/5 pt-28">
      <div className="flex flex-col gap-2">
        <div className="px-8 mb-4">
          <p className="text-[11px] uppercase tracking-[0.4em] text-white font-black">
            Core Management
          </p>
        </div>

        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-4 px-8 py-4 transition-all duration-300 group ${
              isActive
                ? "active text-white"
                : "text-white/70 hover:bg-white/[0.06] hover:text-white"
            }`
          }
          to="/add"
        >
          <PlusCircle
            size={20}
            className="text-primary/80 group-hover:text-primary transition-colors"
          />
          <p className="hidden md:block text-sm uppercase tracking-[0.2em] font-bold">
            Add Architecture
          </p>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-4 px-8 py-4 transition-all duration-300 group ${
              isActive
                ? "active text-white"
                : "text-white/70 hover:bg-white/[0.06] hover:text-white"
            }`
          }
          to="/list"
        >
          <List
            size={20}
            className="text-primary/80 group-hover:text-primary transition-colors"
          />
          <p className="hidden md:block text-sm uppercase tracking-[0.2em] font-bold">
            Registry List
          </p>
        </NavLink>

        <div className="px-8 mt-8 mb-4">
          <p className="text-[11px] uppercase tracking-[0.4em] text-white font-black">
            Engagement
          </p>
        </div>

        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-4 px-8 py-4 transition-all duration-300 group ${
              isActive
                ? "active text-white"
                : "text-white/70 hover:bg-white/[0.06] hover:text-white"
            }`
          }
          to="/orders"
        >
          <MessageSquare
            size={20}
            className="text-primary/80 group-hover:text-primary transition-colors"
          />
          <p className="hidden md:block text-sm uppercase tracking-[0.2em] font-bold">
            Project Inquiries
          </p>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
