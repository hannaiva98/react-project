import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BackgroundState {
  image: string;
}

const initialState: BackgroundState = {
  image: "/images/mainfigure.png",
};

const backgroundSlice = createSlice({
  name: "background",
  initialState,
  reducers: {
    setBackground: (state, action: PayloadAction<string>) => {
      state.image = action.payload;
    },
  },
});

export const { setBackground } = backgroundSlice.actions;
export default backgroundSlice.reducer;
