import { createSlice } from "@reduxjs/toolkit";

const darkmode =
  localStorage.getItem("darkmode") !== null
    ? JSON.parse(localStorage.getItem("darkmode") || "")
    : false;

const setDarkModeToLocalStorage = (darkmode: boolean) => {
  localStorage.setItem("darkmode", JSON.stringify(darkmode));
};

export const darkmodeSlice = createSlice({
  name: "darkmode",
  initialState: {
    darkmode: darkmode,
  },
  reducers: {
    setDarkmode: (state) => {
      state.darkmode = !state.darkmode;
      setDarkModeToLocalStorage(state.darkmode);
    },
  },
});

export const { setDarkmode } = darkmodeSlice.actions;

export default darkmodeSlice.reducer;
