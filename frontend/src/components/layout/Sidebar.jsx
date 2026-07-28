import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Code2,
  Bot,
  History,
  User,
  LogOut,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    title: "Compiler",
    icon: Code2,
    path: "/compiler",
  },
  {
    title: "AI Chat",
    icon: Bot,
    path: "/chat",
  },
  {
    title: "History",
    icon: History,
    path: "/history",
  },
  {
    title: "Profile",
    icon: User,
    path: "/profile",
  },
];

function Sidebar() {
  return (
    <aside className="h-[calc(100vh-72px)] w-64 border-r border-[var(--border)] bg-[var(--card)] p-5">

      <div className="space-y-2">

        {menu.map((item) => (
          <NavLink
            key={item.title}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-4 py-3 transition ${
                isActive
                  ? "bg-indigo-600 text-white"
                  : "hover:bg-slate-100 dark:hover:bg-slate-800"
              }`
            }
          >
            <item.icon size={20} />
            {item.title}
          </NavLink>
        ))}

      </div>

      <button className="mt-10 flex w-full items-center gap-3 rounded-lg px-4 py-3 text-red-500 hover:bg-red-50">
        <LogOut size={20} />
        Logout
      </button>

    </aside>
  );
}

export default Sidebar;