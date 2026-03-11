import { LayoutDashboard } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex lg:hidden items-center justify-center min-h-[60vh] px-4">
      <div className="text-center">
        <div className="w-20 h-20 bg-primary/15 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary/30">
          <LayoutDashboard size={36} className="text-primary" />
        </div>
        <h1 className="serif-title text-4xl sm:text-5xl text-white mb-4">
          Welcome to <span className="italic text-primary">Admin Panel</span>
        </h1>
        <p className="text-white/50 text-sm uppercase tracking-widest">
          Use the menu to navigate
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
