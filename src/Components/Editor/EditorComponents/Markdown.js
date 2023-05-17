import React from "react";
import $ from "jquery";
import { useSelector, useDispatch } from "react-redux";
import { setShowMarkdown } from "../../../Redux/showMarkdownSlice";
import { setFiles } from "../../../Redux/filesSlice";

const Markdown = () => {
  const dispatch = useDispatch();
  const files = useSelector((state) => state.files.files);
  const current = useSelector((state) => state.files.current);
  const show = useSelector((state) => state.showMarkdown.showMarkdown);

  const changeMarkdown = async (e) => {
    e.preventDefault();
    const filesCopy = JSON.parse(JSON.stringify(files));
    filesCopy[current].content = $("#markdownarea").val();

    dispatch(setFiles(filesCopy));
  };

  return (
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
  );
};

export default Markdown;
