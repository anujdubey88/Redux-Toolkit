import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    cards: [
        { id: nanoid(), title: "Card 1", price: 100000 }]
}

export const CardSlice = createSlice({
    name: 'cards',
    initialState: initialState,
    reducers: {
        addCard: (state, action) => {
            let cardExists = false;

            state.cards = state.cards.map((card) => {
                if (card.title === action.payload.title) {
                    cardExists = true;
                    return { ...card, count: card.count + 1 };
                }
                return card;
            });

            if (!cardExists) {
                state.cards.push({
                    id: nanoid(),
                    title: action.payload.title,
                    price: action.payload.price,
                    count: 1
                });
            }
            console.log(state.cards)
        },
        removeCard: (state, action) => {
            state.cards = state.cards.filter(card => card.title !== action.payload.title);
        }
    }
});

export const { addCard, removeCard } = CardSlice.actions;

export default CardSlice.reducer;
