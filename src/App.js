import React, { useState, Suspense } from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import Editor from "./Components/Editor/Editor";
import Files from "./Files";
import useLocalStorage from "./useLocalStorage";

const Sidebar = React.lazy(() => import("./Components/Sidebar/Sidebar"));
const Delete = React.lazy(() => import("./Components/Delete/Delete"));

function App() {
  const [darkmode, setdarkMode] = useLocalStorage("darkmode", false);
  const [files, setFiles] = useLocalStorage("localFiles", [...Files]);
  const [current, setCurrent] = useLocalStorage("current", 1);
  const [showDelete, setShowDelete] = useState(false);

  return (
    <div
      className={showDelete ? "App deleteShown" : "App"}
      id={darkmode ? "darkModeApp" : "App"}
    >
      <Suspense fallback={null}>
        <Sidebar
          darkmode={darkmode}
          setdarkMode={setdarkMode}
          files={files}
          setFiles={setFiles}
          setCurrent={setCurrent}
        />
      </Suspense>
      <Suspense fallback={null}>
        <Delete
          darkmode={darkmode}
          files={files}
          setFiles={setFiles}
          current={current}
          setCurrent={setCurrent}
          showDelete={showDelete}
          setShowDelete={setShowDelete}
        />
      </Suspense>
      <section className="main-section">
        <Header
          darkmode={darkmode}
          files={files}
          setFiles={setFiles}
          current={current}
          setShowDelete={setShowDelete}
        />
        <Editor
          darkmode={darkmode}
          setdarkMode={setdarkMode}
          files={files}
          current={current}
          setFiles={setFiles}
        />
      </section>
    </div>
  );
}

export default App;
