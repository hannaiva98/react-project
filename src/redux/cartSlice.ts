import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  meal: string;
  price: number;
  img: string;
  count: number;
}

interface CartState {
  items: CartItem[];
  count: number;
}

const initialState: CartState = {
  items: [],
  count: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Omit<CartItem, 'count'>>) => {
      const existing = state.items.find(item => item.id === action.payload.id);
      if (existing) {
        existing.count += 1;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.count += 1;
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.count -= state.items[index].count;
        state.items.splice(index, 1);
      }
    },
    updateItemCount: (state, action: PayloadAction<{ id: string; count: number }>) => {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) {
        const diff = action.payload.count - item.count;
        item.count = action.payload.count;
        state.count += diff;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.count = 0;
    }
  },
});

export const { addItem, removeItem, updateItemCount, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
