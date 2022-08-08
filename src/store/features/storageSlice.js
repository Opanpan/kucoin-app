import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const storageSlice = createSlice({
  name: 'storage',
  initialState,
  reducers: {
    addItem: (state, data) => {
      state.items.push(data.payload);
    },
  },
});

export const { addItem } = storageSlice.actions;

export default storageSlice.reducer;
