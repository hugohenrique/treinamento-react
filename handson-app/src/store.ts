import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { baseApi } from './api/base';
import cartReducer from './features/cart/reducer';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer, cart: cartReducer
  },
  middleware: (gdm) => gdm().concat(baseApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);