import React from "react";
import Markdown from "./EditorComponents/Markdown";
import Preview from "./EditorComponents/Preview";
import { useSelector } from "react-redux";

const Editor = () => {
  const darkmode = useSelector((state) => state.darkmode.darkmode);

  return (
    <main className={darkmode ? "editor dark" : "editor"}>
      <Markdown />
      <Preview />
    </main>
  );
};

export default Editor;
