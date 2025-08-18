import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CartItem = {
  productId: number;
  quantity: number;
};

interface CartState {
  items: CartItem[]
};

const initialState: CartState = {
  items: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const item = state.items.find(i => i.productId === id);
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ productId: id, quantity: 1 });
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const item = state.items.find(i => i.productId === id);
      if (!item) {
        return;
      }
      item.quantity -= 1;

      if (item.quantity <= 0) {
        state.items = state.items.filter(i => i.productId !== id);
      }
    },
    clear: (state) => {
      state.items = [];
    },
  }
});

export const { add, remove, clear } = cartSlice.actions;
export const selectedCartItems = (state: { cart: CartState }) => 
  state.cart.items;
export const selectedCartTotal = (state: { cart: CartState }) => 
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0);

export default cartSlice.reducer;