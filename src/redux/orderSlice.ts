import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type OrderItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

const initialState: OrderItem[] = [];

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addToOrder: (state, action: PayloadAction<Omit<OrderItem, "quantity">>) => {
      const existing = state.find(item => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromOrder: (state, action: PayloadAction<string>) => {
      return state.filter(item => item.id !== action.payload);
    },
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.find(i => i.id === action.payload.id);
      if (item && action.payload.quantity >= 1) {
        item.quantity = action.payload.quantity;
      }
    },
    clearOrders: () => []
  }
});

export const { addToOrder, removeFromOrder, updateQuantity, clearOrders } = orderSlice.actions;
export default orderSlice.reducer;