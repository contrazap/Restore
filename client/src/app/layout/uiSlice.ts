import { createSlice } from "@reduxjs/toolkit";

const getInitialDarkMode = () => {
  const storedDarkMode = localStorage.getItem("darkMode");
  return storedDarkMode ? JSON.parse(storedDarkMode) : true;
};

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isLoading: false,
    isDarkMode: getInitialDarkMode(),
  },
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
    toggleDarkMode: (state) => {
      const darkMode = !state.isDarkMode;
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
      state.isDarkMode = darkMode;
    },
  },
});

export const { startLoading, stopLoading, toggleDarkMode } = uiSlice.actions;
