import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProjectState } from "@/types/redux";

const initialState: ProjectState = {
  selectedServiceId: null,
  selectedPillarIndex: 0,
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setSelectedService: (state, action: PayloadAction<string | null>) => {
      state.selectedServiceId = action.payload;
    },
    setSelectedPillarIndex: (state, action: PayloadAction<number>) => {
      state.selectedPillarIndex = action.payload;
    },
  },
});

export const { setSelectedService, setSelectedPillarIndex } = projectSlice.actions;
export default projectSlice.reducer;
