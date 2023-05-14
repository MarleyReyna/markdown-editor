import { createSlice } from "@reduxjs/toolkit";

export const showDeleteSlice = createSlice({
  name: "showDelete",
  initialState: {
    showDelete: false,
  },
  reducers: {
    setShowDelete: (state) => {
      state.showDelete = !state.showDelete;
    },
    setShowDeleteFalse: (state) => {
      state.showDelete = false;
    },
  },
});

export const { setShowDelete, setShowDeleteFalse } = showDeleteSlice.actions;
export default showDeleteSlice.reducer;
