import $ from "jquery";
import { useState } from "react";
import {type RootState} from "../../lib/types";
import { useSelector, useDispatch } from "react-redux";
import { setFiles } from "../../Redux/filesSlice";
import { setShowDelete } from "../../Redux/showDeleteSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const HeaderRight = () => {
  const dispatch = useDispatch();
  const [saved, setSaved] = useState(false);
  const files = useSelector((state: RootState) => state.files.files);
  const current = useSelector((state: RootState) => state.files.current);

  const saveDocument = () => {
    // Make a copy of the current files and update state
    const filesCopy = JSON.parse(JSON.stringify(files));
    filesCopy[current].name = $("#titleInput").val();
    filesCopy[current].content = $("#markdownarea").val();
    dispatch(setFiles(filesCopy));

    // Apply changes to saved state to initiate
    setSaved((c) => (c = true));

    setTimeout(() => {
      setSaved((c) => (c = false));
    }, 1250);

    saveTextToFile();
  };

  const saveTextToFile = () => {
    const text = files[current].content;
    const filename = files[current].name;

    const anchor = document.createElement("a");
    const blob = new Blob([text], { type: "text/plain" });
    anchor.download = filename;
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target = "_blank";
    anchor.style.display = "none";
    document.body.appendChild(anchor);

    anchor.click();

    document.body.removeChild(anchor);
  };

  return (
    <div className="rightContainer">
      <button className="trash" onClick={() => dispatch(setShowDelete())}>
        <img src="/assets/icon-delete.svg" alt="delete" />
      </button>
      <button className="save" onClick={saveDocument}>
        {!saved ? (
          <img src="/assets/icon-save.svg" alt="save" />
        ) : (
          <FontAwesomeIcon icon={faCheck} className="check" />
        )}
        {saved ? "Saved" : "Download"}
      </button>
    </div>
  );
};

export default HeaderRight;
