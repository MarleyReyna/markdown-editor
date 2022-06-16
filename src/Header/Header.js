import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";

const Header = (props) => {
  const darkmode = props.darkmode;
  const setMenu = props.setMenu;
  const files = props.files;
  const setFiles = props.setFiles;
  const current = props.current;
  const setShowDelete = props.setShowDelete;

  const [saved, setSaved] = useState(false);

  const submitTitle = () => {
    const filesCopy = [...files];
    const titleInput = document.getElementById("titleInput").value;
    filesCopy[current].name = titleInput;
    setFiles(filesCopy);
  };

  const saveDocument = () => {
    setSaved(true);
    const filesCopy = [...files];
    const titleInput = document.getElementById("titleInput").value;
    const markdownInput = document.getElementById("markdownarea").value;
    filesCopy[current].name = titleInput;
    filesCopy[current].content = markdownInput;
    setFiles(filesCopy);
    setTimeout(() => {
      setSaved(false);
    }, 1250);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <header className={darkmode ? "header dark" : "header"}>
      <div className="leftContainer">
        <button onClick={() => setMenu((c) => !c)}>
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
