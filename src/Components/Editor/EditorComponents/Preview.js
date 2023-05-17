import React from "react";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import { useSelector, useDispatch } from "react-redux";
import { setShowMarkdown } from "../../../Redux/showMarkdownSlice";

const Preview = () => {
  const dispatch = useDispatch();
  const files = useSelector((state) => state.files.files);
  const current = useSelector((state) => state.files.current);
  const show = useSelector((state) => state.showMarkdown.showMarkdown);

  return (
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
  );
};

export default Preview;
