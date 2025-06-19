import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isLoggedIn: boolean;
  email: string | null;
}

const initialState: AuthState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
  email: localStorage.getItem("email"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
  state.isLoggedIn = true;
  state.email = action.payload;
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("email", action.payload);
},
logout: (state) => {
  state.isLoggedIn = false;
  state.email = null;
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("email");
},
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;