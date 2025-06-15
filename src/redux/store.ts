import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import footerReducer from './footerSlice';
import authReducer from './authSlice';
import backgroundReducer from './backgroundSlice';
import mainContentReducer from "./mainContentSlice";
import mealsReducer from './mealsSlice';  
import menuReducer from "./menuSlice";
import tooltipReducer from "./tooltipSlice";
import orderReducer from './orderSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    footer: footerReducer,
    auth: authReducer,
    background: backgroundReducer,
    mainContent: mainContentReducer,
    meals: mealsReducer,
    menu: menuReducer,
    tooltip: tooltipReducer,
    orders: orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
