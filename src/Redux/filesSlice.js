import { createSlice } from "@reduxjs/toolkit";
import Files from "../Files";

const files =
  localStorage.getItem("files") !== null
    ? JSON.parse(localStorage.getItem("files"))
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
    addNewFile: (state, action) => {
      state.files = [...state.files, action.payload];
      setFilesToLocalStorage(state.files, state.current);
    },
    deleteFiles: (state) => {
      state.files = state.files.filter((_, index) => index !== state.current);
      setFilesToLocalStorage(state.files, state.current);
    },
    setCurrent: (state, action) => {
      state.current = action.payload;
      setFilesToLocalStorage(state.files, state.current);
    },
  },
});

export const { setFiles, addNewFile, deleteFiles, setCurrent } =
  filesSlice.actions;
export default filesSlice.reducer;
