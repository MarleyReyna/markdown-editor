import "./assets/App.scss";
import "./assets/Components.scss";
import React, { Suspense } from "react";
import Editor from "./Pages/Editor/Editor";
import Header from "./Components/Header/Header";
import { useSelector } from "react-redux";
import { type RootState } from "./lib/types";

const Sidebar = React.lazy(() => import("./Components/Sidebar/Sidebar"));
const Delete = React.lazy(() => import("./Components/Delete"));

function App() {
  const darkmode = useSelector((state: RootState) => state.darkmode.darkmode);
  const showDelete = useSelector((state: RootState) => state.showDelete.showDelete);

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
      <main className="main-section">
        <Header />
        <Editor />
      </main>
    </div>
  );
}

export default App;
