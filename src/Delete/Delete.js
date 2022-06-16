import React, { useRef, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import "./Delete.scss";

const Delete = (props) => {
  const darkmode = props.darkmode;
  const files = props.files;
  const setFiles = props.setFiles;
  const current = props.current;
  const setCurrent = props.setCurrent;
  const showDelete = props.showDelete;
  const setShowDelete = props.setShowDelete;

  const styleProps = useSpring({
    opacity: showDelete ? 1 : 0,
  });

  const deleteFile = () => {
    if (files.length === 1) {
      setShowDelete((c) => (c = false));
      return;
    }

    const filesCopy = [...files];
    filesCopy.splice(current, 1);
    setShowDelete((c) => (c = false));

    if (current === files.length - 1) {
      setCurrent((c) => c - 1);
    }

    setFiles(() => {
      return filesCopy;
    });
  };

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
