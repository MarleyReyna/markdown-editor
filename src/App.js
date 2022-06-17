import { useState } from "react";
import "./App.scss";
import Header from "./Header/Header";
import Editor from "./Editor/Editor";
import Sidebar from "./Sidebar/Sidebar";
import Delete from "./Delete/Delete";
import Files from "./Files";
import useLocalStorage from "./useLocalStorage";

function App() {
  const [darkmode, setdarkMode] = useLocalStorage("darkmode", false);
  const [menu, setMenu] = useState(false);
  const [files, setFiles] = useLocalStorage("localFiles", [...Files]);
  const [current, setCurrent] = useLocalStorage("current", 1);
  const [showDelete, setShowDelete] = useState(false);

  return (
    <div
      className={showDelete ? "App deleteShown" : "App"}
      id={darkmode ? "darkModeApp" : "App"}
    >
      <Sidebar
        darkmode={darkmode}
        setdarkMode={setdarkMode}
        menu={menu}
        files={files}
        setFiles={setFiles}
        setCurrent={setCurrent}
      />
      <Delete
        darkmode={darkmode}
        files={files}
        setFiles={setFiles}
        current={current}
        setCurrent={setCurrent}
        showDelete={showDelete}
        setShowDelete={setShowDelete}
      />
      <section className={!menu ? "main-section" : "main-section menu"}>
        <Header
          darkmode={darkmode}
          setMenu={setMenu}
          files={files}
          setFiles={setFiles}
          current={current}
          setShowDelete={setShowDelete}
        />
        <Editor
          darkmode={darkmode}
          setdarkMode={setdarkMode}
          menu={menu}
          files={files}
          current={current}
          setFiles={setFiles}
        />
      </section>
    </div>
  );
}

export default App;
