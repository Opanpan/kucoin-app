import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalCreatedItem: 0,
};

export const storageSlice = createSlice({
  name: 'storage',
  initialState,
  reducers: {
    addItem: (state, data) => {
      data.payload.id = state.totalCreatedItem + 1;
      state.totalCreatedItem += 1;
      state.items.push(data.payload);
    },
    deleteItem: (state, data) => {
      let index = 0;
      state.items.forEach((el, i) =>
        el.id === data.payload ? (index = i) : 0
      );
      state.items.splice(index, 1);
    },
  },
});

export const { addItem, deleteItem } = storageSlice.actions;

export default storageSlice.reducer;
