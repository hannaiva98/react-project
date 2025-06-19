import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface Meal {
  id: string;
  name: string;
  price?: number;
  description?: string;
}

interface MealsState {
  data: Meal[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: MealsState = {
  data: null,
  loading: false,
  error: null,
};

// thunk для асинхронного запроса
export const fetchMeals = createAsyncThunk(
  "meals/fetchMeals",
  async () => {
    const response = await fetch("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals");
    if (!response.ok) {
      throw new Error("Ошибка при загрузке данных");
    }
    const data: Meal[] = await response.json();
    return data;
  }
);

const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeals.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.data = null;
      })
      .addCase(fetchMeals.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchMeals.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Неизвестная ошибка";
      });
  },
});

export default mealsSlice.reducer;