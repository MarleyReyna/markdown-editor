import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import Header from "./Components/Header/Header";
import Editor from "./Components/Editor/Editor";
import Files from "./Files";
import useLocalStorage from "./useLocalStorage";
import "./App.scss";

const Sidebar = React.lazy(() => import("./Components/Sidebar/Sidebar"));
const Delete = React.lazy(() => import("./Components/Delete/Delete"));

function App() {
  const darkmode = useSelector((state) => state.darkmode.darkmode);
  const showDelete = useSelector((state) => state.showDelete.showDelete);
  const [files, setFiles] = useLocalStorage("localFiles", [...Files]);
  const [current, setCurrent] = useLocalStorage("current", 1);

  return (
    <div
      className={showDelete ? "App deleteShown" : "App"}
      id={darkmode ? "darkModeApp" : "App"}
    >
      <Suspense fallback={null}>
        <Sidebar files={files} setFiles={setFiles} setCurrent={setCurrent} />
      </Suspense>
      <Suspense fallback={null}>
        <Delete
          files={files}
          setFiles={setFiles}
          current={current}
          setCurrent={setCurrent}
        />
      </Suspense>
      <section className="main-section">
        <Header files={files} setFiles={setFiles} current={current} />
        <Editor files={files} current={current} setFiles={setFiles} />
      </section>
    </div>
  );
}

export default App;
