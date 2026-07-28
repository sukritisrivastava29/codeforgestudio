import DashboardLayout from "../components/layout/DashboardLayout";

function Dashboard() {
  return (
    <DashboardLayout>

      <h1 className="mb-6 text-4xl font-bold">
        Welcome Back 👋
      </h1>

      <div className="grid gap-6 md:grid-cols-3">

        <div className="rounded-xl border p-6">
          Total Runs
        </div>

        <div className="rounded-xl border p-6">
          AI Requests
        </div>

        <div className="rounded-xl border p-6">
          Saved Projects
        </div>

      </div>

    </DashboardLayout>
  );
}

export default Dashboard;