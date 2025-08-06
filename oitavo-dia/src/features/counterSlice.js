import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 10,
};

const countSlicer = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incrementar: (state) => {
            state.value += 1;
        },
        decrementar: (state) => {
            state.value -= 1;
        }
    }
});

export const { incrementar, decrementar } = countSlicer.actions;
export default countSlicer.reducer;