import { useEffect, useMemo, useState } from "react";
import { Clock, Trash2, Search, Code2, RotateCcw } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function History() {
  const navigate = useNavigate();

  const [history, setHistory] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("codeforge_history")) || [];

    setHistory(data);
  }, []);

  const filteredHistory = useMemo(() => {
    return history.filter((item) =>
      item.language.toLowerCase().includes(search.toLowerCase())
    );
  }, [history, search]);

  const deleteHistory = (id) => {
    const updated = history.filter((item) => item.id !== id);

    setHistory(updated);

    localStorage.setItem(
      "codeforge_history",
      JSON.stringify(updated)
    );
  };

  const clearHistory = () => {
    if (!window.confirm("Clear entire history?")) return;

    localStorage.removeItem("codeforge_history");
    setHistory([]);
  };

  const openInCompiler = (item) => {
    localStorage.setItem(
      "compiler_session",
      JSON.stringify({
        language: item.language,
        code: item.code,
        input: item.input,
      })
    );

    navigate("/compiler");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <div className="flex flex-col lg:flex-row justify-between gap-5 mb-8">

        <div>
          <h1 className="text-4xl font-bold">
            Execution History
          </h1>

          <p className="text-slate-400 mt-2">
            Review your previous code executions.
          </p>
        </div>

        <div className="flex gap-3">

          <div className="relative">

            <Search
              size={18}
              className="absolute left-3 top-3 text-slate-400"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search language..."
              className="pl-10 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-lg outline-none"
            />

          </div>

          {history.length > 0 && (
            <button
              onClick={clearHistory}
              className="bg-red-600 hover:bg-red-700 px-4 rounded-lg"
            >
              Clear
            </button>
          )}

        </div>

      </div>

      {filteredHistory.length === 0 ? (

        <div className="flex flex-col items-center justify-center py-24">

          <Code2
            size={70}
            className="text-slate-700"
          />

          <h2 className="text-2xl font-semibold mt-6">
            No History Found
          </h2>

          <p className="text-slate-500 mt-2">
            Execute your first program to see it here.
          </p>

        </div>

      ) : (

        <div className="space-y-6">

          {filteredHistory.map((item) => (

            <div
              key={item.id}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500 transition"
            >

              <div className="flex justify-between items-start">

                <div>

                  <span className="inline-block bg-cyan-600 px-3 py-1 rounded-full text-sm capitalize">
                    {item.language}
                  </span>

                  <div className="flex items-center gap-2 text-slate-400 mt-3 text-sm">

                    <Clock size={14} />

                    {item.time}

                  </div>

                </div>

                <div className="flex gap-2">

                  <button
                    onClick={() => openInCompiler(item)}
                    className="bg-cyan-600 hover:bg-cyan-700 px-3 py-2 rounded-lg flex items-center gap-2"
                  >
                    <RotateCcw size={16} />
                    Open
                  </button>

                  <button
                    onClick={() => deleteHistory(item.id)}
                    className="bg-red-600 hover:bg-red-700 p-2 rounded-lg"
                  >
                    <Trash2 size={18} />
                  </button>

                </div>

              </div>

              <div className="mt-6">

                <h3 className="text-slate-400 mb-2">
                  Code
                </h3>

                <pre className="bg-slate-950 rounded-lg p-4 overflow-x-auto text-sm">
{item.code}
                </pre>

              </div>

              {item.input && (

                <div className="mt-5">

                  <h3 className="text-slate-400 mb-2">
                    Input
                  </h3>

                  <pre className="bg-slate-950 rounded-lg p-4">
{item.input}
                  </pre>

                </div>

              )}

              <div className="mt-5">

                <h3 className="text-slate-400 mb-2">
                  Output
                </h3>

                <pre className="bg-slate-950 rounded-lg p-4 whitespace-pre-wrap">
{item.output}
                </pre>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}