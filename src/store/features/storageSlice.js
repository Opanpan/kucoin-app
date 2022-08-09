import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalCreatedItem: 0,
  isUpdate: false,
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
    updateItem: (state, data) => {
      let index = data.payload.id - 1;
      state.items.splice(index, 1, data.payload);
    },
    setUpdate: (state, data) => {
      state.isUpdate = data.payload;
    },
  },
});

export const { addItem, deleteItem, updateItem, setUpdate } =
  storageSlice.actions;

export default storageSlice.reducer;
