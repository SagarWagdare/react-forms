import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = {

    cardCount: 1,
    form: {
        title: "",
        description: "",
        cards: [
            {
                id: uuidv4(),
                question: "",
                type: "",
                required: false
            },
        ],
    },
}
export const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        incrementCardCount: (state) => {
            state.cardCount += 1;
            const newCard = {
                id: uuidv4(),
                question: "",
                type: "",
                required: false,
            };
            state.form.cards.push(newCard);
        },
        addTitle: (state, action) => {
            state.form.title = action.payload
        },
        addDescription: (state, action) => {
            state.form.description = action.payload
        },

        addQuestion: (state, action) => {
            const { cardId, question, type, required } = action.payload;

            const updatedCards = state.form.cards.map((card, index) => {
                if (index === cardId) {
                    return {
                        ...card,
                        id: uuidv4(),
                        question: question,
                        type: type,
                        required: required
                    };
                }
                return card;
            });

            return {
                ...state,
                form: {
                    ...state.form,
                    cards: updatedCards,
                },
            };
        },
        addRequired: (state, action) => {
            state.form.required = action.payload
        }








    }
})


export const { incrementCardCount,
    setInputValue,
    removeInputValue,
    addQuestion, addTitle, addDescription, addRequired } = formSlice.actions;
export default formSlice.reducer