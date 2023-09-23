import $ from "jquery";
import {type RootState} from "../../lib/types"
import { useSelector, useDispatch } from "react-redux";
import { setShowMarkdown } from "../../Redux/showMarkdownSlice";
import { setFiles } from "../../Redux/filesSlice";

const Markdown = () => {
  const dispatch = useDispatch();
  const files = useSelector((state: RootState) => state.files.files);
  const current = useSelector((state: RootState) => state.files.current);
  const show = useSelector((state: RootState) => state.showMarkdown.showMarkdown);

  // Make async if this crashes?
  const changeMarkdown = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
        onChange={changeMarkdown}
        id="markdownarea"
        data-gramm="false"
        data-gramm_editor="false"
        data-enable-grammarly="false"
      />
    </div>
  );
};

export default Markdown;
