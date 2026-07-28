import { Bell, Search, Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex h-[72px] items-center justify-between border-b border-[var(--border)] bg-[var(--card)] px-8">

      <h1 className="text-2xl font-bold text-indigo-600">
        CodeForgeAI
      </h1>

      <div className="relative w-96">
        <Search
          className="absolute left-3 top-3"
          size={18}
        />

        <input
          placeholder="Search..."
          className="w-full rounded-lg border border-[var(--border)] bg-transparent py-2 pl-10 pr-4 outline-none"
        />
      </div>

      <div className="flex items-center gap-5">

        <button onClick={toggleTheme}>
          {theme === "dark" ? <Sun /> : <Moon />}
        </button>

        <Bell />

        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="h-10 w-10 rounded-full"
        />

      </div>

    </nav>
  );
}

export default Navbar;