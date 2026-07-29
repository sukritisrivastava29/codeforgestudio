import { useState } from "react";
import Toolbar from "../components/compiler/Toolbar";
import CodeEditor from "../components/compiler/CodeEditor";
import InputBox from "../components/compiler/InputBox";
import OutputBox from "../components/compiler/OutputBox";

const starterCode = {
  cpp: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello CodeForgeAI!";
    return 0;
}`,
  python: `print("Hello CodeForgeAI!")`,
  javascript: `console.log("Hello CodeForgeAI!");`,
};

export default function Compiler() {
  const [language, setLanguage] = useState("cpp");
  const [theme, setTheme] = useState("vs-dark");
  const [code, setCode] = useState(starterCode.cpp);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState(
    "Welcome to CodeForgeAI.\nClick Run Code."
  );
  const [loading, setLoading] = useState(false);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setCode(starterCode[lang]);
  };

  const runCode = async () => {
    setLoading(true);

    try {
      /*
      const res = await compilerService.run({
          language,
          code,
          input
      });

      setOutput(res.output);
      */

      setTimeout(() => {
        setOutput(
`Program Executed Successfully

Language : ${language}

Output:
Hello CodeForgeAI!

Execution Time : 0.02 sec
Memory : 5 MB`
        );

        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error(error);
      setOutput("Compilation Error");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">

      <Toolbar
        language={language}
        changeLanguage={changeLanguage}
        runCode={runCode}
        loading={loading}
        theme={theme}
        setTheme={setTheme}
      />

      <div className="mt-5 rounded-xl overflow-hidden border border-slate-800">
        <CodeEditor
          language={language}
          theme={theme}
          code={code}
          setCode={setCode}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">

        <InputBox
          input={input}
          setInput={setInput}
        />

        <OutputBox
          output={output}
        />

      </div>

    </div>
  );
}