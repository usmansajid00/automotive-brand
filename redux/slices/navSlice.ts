import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NavState } from "@/types/redux";

const initialState: NavState = {
  isMenuOpen: false,
  activeSection: "hero",
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMenuOpen = action.payload;
    },
    setActiveSection: (state, action: PayloadAction<string>) => {
      state.activeSection = action.payload;
    },
  },
});

export const { toggleMenu, setMenuOpen, setActiveSection } = navSlice.actions;
export default navSlice.reducer;
