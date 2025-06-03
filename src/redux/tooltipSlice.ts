import { createSlice } from "@reduxjs/toolkit";

interface TooltipState {
  isHovered: boolean;
}

const initialState: TooltipState = {
  isHovered: false,
};

const tooltipSlice = createSlice({
  name: "tooltip",
  initialState,
  reducers: {
    showTooltip: (state) => {
      state.isHovered = true;
    },
    hideTooltip: (state) => {
      state.isHovered = false;
    },
  },
});

export const { showTooltip, hideTooltip } = tooltipSlice.actions;
export default tooltipSlice.reducer;