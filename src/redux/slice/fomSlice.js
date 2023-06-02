import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    cardCount: 1
}
export const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        incrementCardCount: (state) => {
            state.cardCount += 1;
        },
    }
})


export const { incrementCardCount } = formSlice.actions;
export default formSlice.reducer