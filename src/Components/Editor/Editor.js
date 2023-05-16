import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setShowMarkdown } from "../../Redux/showMarkdownSlice";
import { setFiles } from "../../Redux/filesSlice";
import $ from "jquery";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Editor = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.showMarkdown.showMarkdown);
  const darkmode = useSelector((state) => state.darkmode.darkmode);
  const files = useSelector((state) => state.files.files);
  const current = useSelector((state) => state.files.current);

  const changeMarkdown = (e) => {
    e.preventDefault();
    const filesCopy = JSON.parse(JSON.stringify(files));
    filesCopy[current].content = $("#markdownarea").val();

    dispatch(setFiles(filesCopy));
  };

  return (
    <main className={darkmode ? "editor dark" : "editor"}>
      <div className={!show ? "markdown active" : "markdown"}>
        <div className="top">
          <h2>Markdown</h2>
          <button onClick={() => dispatch(setShowMarkdown())}>
            <img src="assets/icon-show-preview.svg" alt="show" />
          </button>
        </div>
        <label className="sr-only" htmlFor="markdownarea">
          Markdown
        </label>
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
        id={show ? "previewMenu" : "preview"}
      >
        <div className="top">
          <h2>Preview</h2>
          <button onClick={() => dispatch(setShowMarkdown())}>
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
