import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const obterProdutos = createAsyncThunk(
    'produto/obterProdutos',
    async () => {
        const resposta = await fetch('https://fakestoreapi.com/products');
        return await resposta.json();
    }
);

const produtoSlice = createSlice({
    name: 'produto',
    initialState: {
        itens: [],
        loading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            obterProdutos.pending,
            (state) => {
                state.loading = true;
            }
        ).addCase(
            obterProdutos.fulfilled,
            (state, action) => {
                state.itens = action.payload;
                state.loading = false;
            }
        );
    },
});

export default produtoSlice.reducer;