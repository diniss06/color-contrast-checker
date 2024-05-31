// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './cardSlice'; // Certifique-se de que o caminho está correto

const store = configureStore({
  reducer: {
    cards: cardReducer,
  },
});

export default store;
