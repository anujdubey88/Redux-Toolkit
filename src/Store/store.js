import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../Feature/Todo/TodoSlice'
import counterReducer from '../Feature/Counter/CounterSlice'
import cardReducer from '../Feature/AddCard/AddCardSlice'

export const store = configureStore({
    reducer : {
        counter : counterReducer,
        todo : todoReducer,
        card : cardReducer,
    },
});