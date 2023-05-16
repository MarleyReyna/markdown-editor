import React, { useState } from "react";
import $ from "jquery";
import { useSelector, useDispatch } from "react-redux";
import { setShowDelete } from "../../Redux/showDeleteSlice";
import { setFiles } from "../../Redux/filesSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [saved, setSaved] = useState(false);
  const dispatch = useDispatch();
  const darkmode = useSelector((state) => state.darkmode.darkmode);
  const files = useSelector((state) => state.files.files);
  const current = useSelector((state) => state.files.current);

  const submitTitle = () => {
    const filesCopy = JSON.parse(JSON.stringify(files));
    filesCopy[current].name = $("#titleInput").val();
    dispatch(setFiles(filesCopy));
  };

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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <header className={darkmode ? "header dark" : "header"}>
      <div className="leftContainer">
        <button onClick={showSideMenu}>
          <img src="/assets/icon-menu.svg" alt="menu" />
        </button>
        <img src="/assets/logo.svg" alt="Markdown" className="logo" />
        <div className="seperator" />
        <img src="/assets/icon-document.svg" alt="document" />
        <form
          className="file-name"
          onChange={submitTitle}
          onSubmit={handleSubmit}
        >
          <label htmlFor="titleInput">Document Name</label>
          <input
            id="titleInput"
            name="titleInput"
            type="text"
            value={files[current].name}
            onChange={submitTitle}
          />
        </form>
      </div>
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
          {saved ? "Saved" : "Save Changes"}
        </button>
      </div>
    </header>
  );
};

export default Header;

const showSideMenu = () => {
  $(".sideMenu").toggleClass("active");
  $(".main-section").toggleClass("menu");
};
