// store/cardSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cardSlice = createSlice({
  name: 'cards',
  initialState: [],
  reducers: {
    addCard: (state, action) => {
      state.push(action.payload);
    },
    updateCard: (state, action) => {
      const { index, card } = action.payload;
      state[index] = card;
    },
  },
});

export const { addCard, updateCard } = cardSlice.actions;
export default cardSlice.reducer;
