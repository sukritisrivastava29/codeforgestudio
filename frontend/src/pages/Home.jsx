import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import {
  Sun,
  Moon,
  Code2,
  Bot,
  Terminal,
  Zap,
  ArrowRight,
} from "lucide-react";

function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-all duration-300">

     
      <nav className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

          <h1 className="text-3xl font-bold text-indigo-600">
            CodeForgeAI
          </h1>

          <div className="flex items-center gap-4">

            <button
              onClick={toggleTheme}
              className="rounded-lg border border-[var(--border)] p-2 hover:bg-slate-200 dark:hover:bg-slate-800"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <Link
              to="/login"
              className="font-medium hover:text-indigo-600"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="rounded-lg bg-indigo-600 px-5 py-2 text-white transition hover:bg-indigo-700"
            >
              Get Started
            </Link>

          </div>

        </div>
      </nav>

      

      <section className="mx-auto flex max-w-7xl flex-col items-center px-8 py-24 text-center">

        <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
          AI Powered Code Execution Platform
        </span>

        <h1 className="mt-8 text-6xl font-extrabold leading-tight md:text-7xl">
          Write.
          <span className="text-indigo-600"> Execute.</span>
          <br />
          Improve with AI.
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-[var(--subtext)]">
          Run code in multiple programming languages, debug instantly,
          optimize your solutions using AI, and save your projects
          — all from one platform.
        </p>

        <div className="mt-10 flex gap-5">

          <Link
            to="/register"
            className="flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-white transition hover:bg-indigo-700"
          >
            Start Coding
            <ArrowRight size={20} />
          </Link>

          <Link
            to="/login"
            className="rounded-xl border border-[var(--border)] px-8 py-4 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Login
          </Link>

        </div>

      </section>

      

      <section className="mx-auto grid max-w-6xl gap-8 px-8 pb-24 md:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 transition hover:-translate-y-2 hover:shadow-xl">

          <Code2 className="mb-5 text-indigo-500" size={36} />

          <h2 className="mb-3 text-xl font-bold">
            Multi Language
          </h2>

          <p className="text-[var(--subtext)]">
            Java, Python, C++, JavaScript and many more.
          </p>

        </div>

        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 transition hover:-translate-y-2 hover:shadow-xl">

          <Bot className="mb-5 text-indigo-500" size={36} />

          <h2 className="mb-3 text-xl font-bold">
            AI Assistant
          </h2>

          <p className="text-[var(--subtext)]">
            Explain code, debug errors and generate better solutions.
          </p>

        </div>

        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 transition hover:-translate-y-2 hover:shadow-xl">

          <Terminal className="mb-5 text-indigo-500" size={36} />

          <h2 className="mb-3 text-xl font-bold">
            Instant Execution
          </h2>

          <p className="text-[var(--subtext)]">
            Compile and execute code in seconds.
          </p>

        </div>

        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 transition hover:-translate-y-2 hover:shadow-xl">

          <Zap className="mb-5 text-indigo-500" size={36} />

          <h2 className="mb-3 text-xl font-bold">
            Lightning Fast
          </h2>

          <p className="text-[var(--subtext)]">
            Optimized execution engine with real-time AI support.
          </p>

        </div>

      </section>

      

      <footer className="border-t border-[var(--border)] py-8 text-center text-[var(--subtext)]">
        © {new Date().getFullYear()} CodeForgeAI • Built with React + AI
      </footer>

    </div>
  );
}

export default Home;