import Files from "../data/Files";
import { createSlice } from "@reduxjs/toolkit";
import { type FilesType, FileType } from "../lib/types";

const files =
  localStorage.getItem("files") !== null
    ? JSON.parse(localStorage.getItem("files") || "")
    : [...Files];
const current =
  localStorage.getItem("current") !== null
    ? JSON.parse(localStorage.getItem("current") || "")
    : 1;

const setFilesToLocalStorage = (files: FilesType, current: number) => {
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
    // FIX THIS IF IT CRASHES
    deleteFiles: (state, action) => {
      state.files = state.files.filter((file: FileType) => file.id !== action.payload);
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
