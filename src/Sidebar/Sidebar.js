import React from "react";
import "./Sidebar.scss";

const Sidebar = ({ darkmode, setdarkMode, files, setFiles, setCurrent }) => {
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
    setCurrent(files.length);
    setFiles((file) => [...file, newDoc]);
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
