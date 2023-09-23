import { configureStore } from "@reduxjs/toolkit";
import darkmodeReducer from "./darkmodeSlice";
import showDeleteReducer from "./showDeleteSlice";
import showMarkdownReducer from "./showMarkdownSlice";
import filesReducer from "./filesSlice";

export default configureStore({
  reducer: {
    darkmode: darkmodeReducer,
    showDelete: showDeleteReducer,
    showMarkdown: showMarkdownReducer,
    files: filesReducer,
  },
});
