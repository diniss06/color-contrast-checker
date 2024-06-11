// src/store/cardSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Card {
  textColor: string;
  backgroundColor: string;
  result: number;
}

interface CardsState {
  cards: Card[];
  numCards: number;
  averageContrast: number;
}

const initialState: CardsState = {
  cards: [
    { textColor: '#FFFFFF', backgroundColor: '#003461', result: 0 },
  ],
  numCards: 0,
  averageContrast: 0,
};

const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setNumCards(state, action: PayloadAction<number>) {
      state.numCards = action.payload;
    },
    updateCard(state, action: PayloadAction<{ index: number; card: Card }>) {
      const { index, card } = action.payload;
      state.cards[index] = card;
    },
    calculateAverageContrast(state, action: PayloadAction<number>) {
      state.averageContrast = action.payload;
    },
  },
});

export const { setNumCards, updateCard, calculateAverageContrast } = cardSlice.actions;
export default cardSlice.reducer;
