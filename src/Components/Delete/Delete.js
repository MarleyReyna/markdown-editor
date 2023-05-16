import React, { useRef, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { useSelector, useDispatch } from "react-redux";
import { setShowDelete, setShowDeleteFalse } from "../../Redux/showDeleteSlice";
import { deleteFiles, setCurrent } from "../../Redux/filesSlice";

const Delete = () => {
  const dispatch = useDispatch();
  const darkmode = useSelector((state) => state.darkmode.darkmode);
  const showDelete = useSelector((state) => state.showDelete.showDelete);
  const files = useSelector((state) => state.files.files);
  const current = useSelector((state) => state.files.current);

  const styleProps = useSpring({
    opacity: showDelete ? 1 : 0,
  });

  const deleteFile = () => {
    //  Preventing the user from deleting a file if only one exists
    if (files.length === 1) {
      dispatch(setShowDelete());
      return;
    }

    // Removes current file
    dispatch(deleteFiles(files[current].id));

    // Helper state to change styling(could just use jquery)
    dispatch(setShowDelete());

    // Sets current file to the previous file
    if (current === files.length - 1) {
      dispatch(setCurrent(current - 1));
    }
  };

  // Sets showDelete to false if area outide modal is clicked
  let deleteRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!deleteRef.current?.contains(e.target)) {
        dispatch(setShowDeleteFalse());
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
