import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import mainImage from "../components/MainContent/img/IMAGE (5).png";
import logoStars from "../components/MainContent/img/trustpilot-logo copy.png";

interface MainContentState {
  firstBlockText: string;
  secondBlockText: string;
  buttonDisabled: boolean;
  rating: string;
  reviews: string;
  mainImage: string;
  logoStars: string;
}

const initialState: MainContentState = {
  firstBlockText: "Beautiful food & takeaway, delivered to your door.",
  secondBlockText:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
  buttonDisabled: true,
  rating: "4.8 out of 5",
  reviews: "based on 2000+ reviews",
  mainImage: mainImage,
  logoStars: logoStars,
};

const mainContentSlice = createSlice({
  name: "mainContent",
  initialState,
  reducers: {
    toggleButton: (state, action: PayloadAction<boolean>) => {
      state.buttonDisabled = action.payload;
    },
  },
});

export const { toggleButton } = mainContentSlice.actions;
export default mainContentSlice.reducer;
