import { createSlice } from "@reduxjs/toolkit";

export const showMarkdownSlice = createSlice({
  name: "showMarkdown",
  initialState: {
    showMarkdown: false,
  },
  reducers: {
    setShowMarkdown: (state) => {
      state.showMarkdown = !state.showMarkdown;
    },
  },
});

export const { setShowMarkdown } = showMarkdownSlice.actions;
export default showMarkdownSlice.reducer;
