import { useRef, useEffect } from "react";
import {type RootState} from "../lib/types";
import { useSelector, useDispatch } from "react-redux";
import { setShowDelete, setShowDeleteFalse } from "../Redux/showDeleteSlice";
import { deleteFiles, setCurrent } from "../Redux/filesSlice";

const Delete = () => {
  const dispatch = useDispatch();
  let deleteRef = useRef<HTMLDivElement>(null);
  const darkmode = useSelector((state: RootState) => state.darkmode.darkmode);
  const showDelete = useSelector((state: RootState) => state.showDelete.showDelete);
  const files = useSelector((state: RootState) => state.files.files);
  const current = useSelector((state: RootState) => state.files.current);

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
  useEffect(() => {
    let handler = (e: MouseEvent) => {
      if (deleteRef.current && !deleteRef.current.contains(e.target as Node)) {
        dispatch(setShowDeleteFalse());
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div
      className={showDelete ? "delete active" : "delete"}
      id={darkmode ? "deleteDark" : "delete"}
      ref={deleteRef}
    >
      <h1>Delete this document</h1>
      <p>
        Are you sure you want to delete the 'welcome.md' document and its
        contents? This action cannot be reversed.
      </p>
      <button onClick={deleteFile} tabIndex={1}>
        Confirm and Delete
      </button>
    </div>
  );
};

export default Delete;
