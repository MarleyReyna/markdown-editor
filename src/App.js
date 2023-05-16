import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import Header from "./Components/Header/Header";
import Editor from "./Components/Editor/Editor";
import "./App.scss";
import "./Components/Components.scss";

const Sidebar = React.lazy(() => import("./Components/Sidebar/Sidebar"));
const Delete = React.lazy(() => import("./Components/Delete/Delete"));

function App() {
  const darkmode = useSelector((state) => state.darkmode.darkmode);
  const showDelete = useSelector((state) => state.showDelete.showDelete);

  return (
    <div
      className={showDelete ? "App deleteShown" : "App"}
      id={darkmode ? "darkModeApp" : "App"}
    >
      <Suspense fallback={null}>
        <Sidebar />
      </Suspense>
      <Suspense fallback={null}>
        <Delete />
      </Suspense>
      <section className="main-section">
        <Header />
        <Editor />
      </section>
    </div>
  );
}

export default App;
