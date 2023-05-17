import React from "react";
import $ from "jquery";
import { useSelector, useDispatch } from "react-redux";
import { setFiles } from "../../../Redux/filesSlice";

const showSideMenu = () => {
  $(".sideMenu").toggleClass("active");
  $(".main-section").toggleClass("menu");
};

const handleSubmit = (e) => {
  e.preventDefault();
};

const HeaderLeft = () => {
  const dispatch = useDispatch();
  const files = useSelector((state) => state.files.files);
  const current = useSelector((state) => state.files.current);

  const submitTitle = () => {
    const filesCopy = JSON.parse(JSON.stringify(files));
    filesCopy[current].name = $("#titleInput").val();
    dispatch(setFiles(filesCopy));
  };

  return (
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
  );
};

export default HeaderLeft;
