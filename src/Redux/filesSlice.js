import { createSlice } from "@reduxjs/toolkit";
import Files from "../Files";

const files =
  localStorage.getItem("localFiles") !== null
    ? JSON.parse(localStorage.getItem("localFiles"))
    : [...Files];
const current =
  localStorage.getItem("current") !== null
    ? JSON.parse(localStorage.getItem("current"))
    : 1;

const setFilesToLocalStorage = (files, current) => {
  localStorage.setItem("files", JSON.stringify(files));
  localStorage.setItem("current", JSON.stringify(current));
};

export const filesSlice = createSlice({
  name: "files",
  initialState: {
    files: files,
    current: current,
  },
  reducers: {
    setFiles: (state, action) => {
      state.files = action.payload;
      setFilesToLocalStorage(state.files, state.current);
    },
    setCurrent: (state, action) => {
      state.current = action.payload;
      setFilesToLocalStorage(state.files, state.current);
    },
  },
});

export const { setFiles, setCurrent } = filesSlice.actions;
export default filesSlice.reducer;
