import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addCard, updateCard } from './store/cardSlice'; // Certifique-se de que o caminho está correto
import './index.css';
import { CardRightSide, CardLeftSide } from "./components"; // Certifique-se de que os componentes estão no caminho certo
