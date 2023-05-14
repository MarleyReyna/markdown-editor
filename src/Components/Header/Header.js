import React, { useState } from "react";
import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";

const Header = ({ darkmode, files, setFiles, current, setShowDelete }) => {
  const [saved, setSaved] = useState(false);

  const submitTitle = () => {
    const filesCopy = [...files];
    filesCopy[current].name = $("#titleInput").val();
    setFiles(filesCopy);
  };

  const saveDocument = () => {
    // Make a copy of the current files and update state
    const filesCopy = [...files];
    filesCopy[current].name = $("#titleInput").val();
    filesCopy[current].content = $("#markdownarea").val();
    setFiles(filesCopy);

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
          <p>Document Name</p>
          <input
            id="titleInput"
            value={files[current].name}
            onChange={submitTitle}
          />
        </form>
      </div>
      <div className="rightContainer">
        <button
          className="trash"
          onClick={() => setShowDelete((c) => (c = true))}
        >
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

export const showSideMenu = () => {
  $(".sideMenu").toggleClass("active");
  $(".main-section").toggleClass("menu");
};
