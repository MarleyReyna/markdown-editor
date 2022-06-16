import { useState } from "react";
import "./App.scss";
import Header from "./Header/Header";
import Editor from "./Editor/Editor";
import Sidebar from "./Sidebar/Sidebar";
import Delete from "./Delete/Delete";
import Files from "./Files";

function App() {
  const [darkmode, setdarkMode] = useState(
    false
    // JSON.parse(localStorage.getItem("darkmode"))
  );
  const [menu, setMenu] = useState(false);
  const [files, setFiles] = useState(
    [...Files]
    // JSON.parse(localStorage.getItem("localFiles"))
  );
  const [current, setCurrent] = useState(
    1
    // JSON.parse(localStorage.getItem("current"))
  );
  const [showDelete, setShowDelete] = useState(false);

  // useEffect(() => {
  //   localStorage.setItem("localFiles", JSON.stringify(Files));
  //   localStorage.setItem("localFiles", JSON.stringify(files));
  // }, [files]);

  // useEffect(() => {
  //   localStorage.setItem("darkmode", JSON.stringify(darkmode));
  // }, [darkmode]);

  // useEffect(() => {
  //   localStorage.setItem("current", JSON.stringify(current));
  // }, [current]);

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
