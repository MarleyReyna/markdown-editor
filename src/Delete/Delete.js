import React, { useRef, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import "./Delete.scss";

const Delete = ({
  darkmode,
  files,
  setFiles,
  current,
  setCurrent,
  showDelete,
  setShowDelete,
}) => {
  const styleProps = useSpring({
    opacity: showDelete ? 1 : 0,
  });

  const deleteFile = () => {
    //  Preventing the user from deleting a file if only one exists
    if (files.length === 1) {
      setShowDelete((c) => (c = false));
      return;
    }

    // Removes current file
    setFiles((files) => {
      return files.filter((_, index) => {
        return index !== current;
      });
    });

    // Helper state to change styling(could just use jquery)
    setShowDelete((c) => (c = false));

    // Sets current file to the previous file
    if (current === files.length - 1) {
      setCurrent((c) => c - 1);
    }
  };

  // Sets showDelete to false if area outide modal is clicked
  let deleteRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!deleteRef.current?.contains(e.target)) {
        setShowDelete(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <animated.section
      className={showDelete ? "delete active" : "delete"}
      id={darkmode ? "deleteDark" : "delete"}
      ref={deleteRef}
      style={styleProps}
    >
      <h1>Delete this document</h1>
      <p>
        Are you sure you want to delete the 'welcome.md' document and its
        contents? This action cannot be reversed.
      </p>
      <button onClick={deleteFile} tabIndex="1">
        Confirm and Delete
      </button>
    </animated.section>
  );
};

export default Delete;
