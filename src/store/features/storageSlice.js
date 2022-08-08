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
  },
});

export const { addItem } = storageSlice.actions;

export default storageSlice.reducer;
