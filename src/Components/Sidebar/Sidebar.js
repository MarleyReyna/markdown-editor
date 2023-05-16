import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNewFile, setCurrent } from "../../Redux/filesSlice";
import { setDarkmode } from "../../Redux/darkmodeSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const files = useSelector((state) => state.files.files);
  const darkmode = useSelector((state) => state.darkmode.darkmode);

  const createDocument = () => {
    // Create new file object
    let utc = new Date();
    let date =
      utc.getMonth() + 1 + "-" + utc.getDate() + "-" + utc.getFullYear();

    const newDoc = {
      createdAt: date,
      name: "untitled-document.md",
      content: "",
    };

    // Sets current index to new file and appends it to the end
    dispatch(setCurrent(files.length));
    dispatch(addNewFile(newDoc));
  };

  const getDate = (c) => {
    let date = c.split("-");
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return date[1] + " " + months[parseInt(date[0]) - 1] + " " + date[2];
  };

  return (
    <section className="sideMenu">
      <div className="topSide">
        <img src="/assets/logo.svg" alt="Markdown" className="sideLogo" />
        <h1>My documents</h1>
        <button className="addDoc" onClick={createDocument}>
          + New Document
        </button>
        <ul>
          {files.map((item, index) => {
            return (
              <li key={index}>
                <img src="/assets/icon-document.svg" alt="document" />
                <button onClick={() => dispatch(setCurrent(index))}>
                  <span>{getDate(item.createdAt)}</span>
                  {item.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={darkmode ? "darkContainer active" : "darkContainer"}>
        <img
          src="/assets/icon-dark-mode.svg"
          className="moon"
          alt="dark mode"
        />
        <button className="darkToggle" onClick={() => dispatch(setDarkmode())}>
          <div className="circle" />
          Toggle Darkmode
        </button>
        <img
          src="/assets/icon-light-mode.svg"
          className="sun"
          alt="light mode"
        />
      </div>
    </section>
  );
};

export default Sidebar;
