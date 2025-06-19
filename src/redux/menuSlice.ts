import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface MenuItem {
  id: string;
  category: string;
  meal: string;
  price: number;
  img: string;
  instructions: string;
  count: number;
}

interface MenuState {
  items: MenuItem[];
  loading: boolean;
  error: string | null;
  cartCount: number;
}

const initialState: MenuState = {
  items: [],
  loading: false,
  error: null,
  cartCount: 0,
};


export const fetchMenuItems = createAsyncThunk(
  "menu/fetchMenuItems",
  async () => {
    const response = await fetch(
      "https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals"
    );
    if (!response.ok) {
      throw new Error("Ошибка при получении данных с API");
    }
    const data: Omit<MenuItem, "count">[] = await response.json();

    return data.map((item) => ({ ...item, count: 0 }));
  }
);

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<string>) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        item.count += 1;
        state.cartCount = state.items.reduce((sum, i) => sum + i.count, 0);
      }
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenuItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMenuItems.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchMenuItems.rejected, (state, action) => {
        state.error = action.error.message || "Ошибка загрузки меню";
        state.loading = false;
      });
  },
});

export const { addToCart } = menuSlice.actions;
export default menuSlice.reducer;