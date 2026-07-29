import DashboardLayout from "../components/layout/DashboardLayout";
import { Link } from "react-router-dom";
import {
  Code2,
  Bot,
  History,
  FolderOpen,
  ArrowRight,
} from "lucide-react";

function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        <div>
          <h1 className="text-4xl font-bold text-[var(--text)]">
            Welcome Back 👋
          </h1>

          <p className="mt-2 text-[var(--subtext)]">
            Ready to forge amazing code today?
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
            <Code2 className="mb-4 text-indigo-600" size={34} />
            <h2 className="text-3xl font-bold">0</h2>
            <p className="text-[var(--subtext)]">
              Total Runs
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
            <Bot className="mb-4 text-indigo-600" size={34} />
            <h2 className="text-3xl font-bold">0</h2>
            <p className="text-[var(--subtext)]">
              AI Requests
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
            <FolderOpen className="mb-4 text-indigo-600" size={34} />
            <h2 className="text-3xl font-bold">0</h2>
            <p className="text-[var(--subtext)]">
              Saved Projects
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
            <History className="mb-4 text-indigo-600" size={34} />
            <h2 className="text-3xl font-bold">100%</h2>
            <p className="text-[var(--subtext)]">
              Success Rate
            </p>
          </div>

        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
            <h2 className="mb-4 text-2xl font-bold">
              Recent Activity
            </h2>

            <div className="rounded-lg bg-[var(--bg)] p-6 text-center text-[var(--subtext)]">
              No activity yet.
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">

            <h2 className="mb-6 text-2xl font-bold">
              Quick Actions
            </h2>

            <div className="space-y-4">

              <Link
                to="/compiler"
                className="flex items-center justify-between rounded-xl border border-[var(--border)] p-4 transition hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-slate-800"
              >
                <span className="flex items-center gap-3">
                  <Code2 />
                  Open Compiler
                </span>

                <ArrowRight size={20} />
              </Link>

              <Link
                to="/chat"
                className="flex items-center justify-between rounded-xl border border-[var(--border)] p-4 transition hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-slate-800"
              >
                <span className="flex items-center gap-3">
                  <Bot />
                  AI Assistant
                </span>

                <ArrowRight size={20} />
              </Link>

              <Link
                to="/history"
                className="flex items-center justify-between rounded-xl border border-[var(--border)] p-4 transition hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-slate-800"
              >
                <span className="flex items-center gap-3">
                  <History />
                  View History
                </span>

                <ArrowRight size={20} />
              </Link>

            </div>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}

export default Dashboard;