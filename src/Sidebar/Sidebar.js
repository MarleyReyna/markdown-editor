import React from "react";
import "./Sidebar.scss";

const Sidebar = (props) => {
  const darkmode = props.darkmode;
  const setdarkMode = props.setdarkMode;
  const menu = props.menu;
  const files = props.files;
  const setFiles = props.setFiles;
  const setCurrent = props.setCurrent;

  const createDocument = () => {
    let utc = new Date();
    let date =
      utc.getMonth() + 1 + "-" + utc.getDate() + "-" + utc.getFullYear();
    const filesCopy = [...files];
    const newDoc = {
      createdAt: date,
      name: "untitled-document.md",
      content: "",
    };
    filesCopy.push(newDoc);
    setCurrent(filesCopy.indexOf(newDoc));
    setFiles(filesCopy);
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
    <section className={!menu ? "sideMenu" : "sideMenu active"}>
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
                <button onClick={() => setCurrent(index)}>
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
        <button onClick={() => setdarkMode((c) => !c)}>
          <div className="circle" />
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
