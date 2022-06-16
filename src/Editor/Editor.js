import React, { useState } from "react";
import "./Editor.scss";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Editor = (props) => {
  const darkmode = props.darkmode;
  const menu = props.menu;
  const current = props.current;
  const files = props.files;
  const setFiles = props.setFiles;

  const [show, setShow] = useState(false);

  const changeMarkdown = (e) => {
    e.preventDefault();
    const filesCopy = [...files];
    const markdownInput = document.getElementById("markdownarea").value;
    filesCopy[current].content = markdownInput;
    setFiles(filesCopy);
  };

  return (
    <main className={darkmode ? "editor dark" : "editor"}>
      <div className={!show ? "markdown active" : "markdown"}>
        <div className="top">
          <h2>Markdown</h2>
          <button onClick={() => setShow((c) => (c = true))}>
            <img src="assets/icon-show-preview.svg" alt="show" />
          </button>
        </div>
        <textarea
          value={files[current].content}
          onChange={(e) => changeMarkdown(e)}
          id="markdownarea"
          data-gramm="false"
          data-gramm_editor="false"
          data-enable-grammarly="false"
        />
      </div>
      <div
        className={!show ? "preview" : "preview active"}
        id={menu && show ? "previewMenu" : "preview"}
      >
        <div className="top">
          <h2>Preview</h2>
          <button onClick={() => setShow((c) => !c)}>
            <img
              src={
                show
                  ? "assets/icon-hide-preview.svg"
                  : "assets/icon-show-preview.svg"
              }
              alt="show"
            />
          </button>
        </div>
        <ReactMarkdown
          children={files[current].content}
          remarkPlugins={[remarkGfm]}
          className="previewText"
        />
      </div>
    </main>
  );
};

export default Editor;
