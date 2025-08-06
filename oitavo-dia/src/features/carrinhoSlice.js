import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    itens: []
};

const carrinhoSlicer = createSlice({
    name: 'carrinho',
    initialState,
    reducers: {
        adicionar: (state, action) => {
            const product = action.payload;
            const existing = state.itens.find(item => item.id === product.id);

            if (existing) {
                existing.qtd += 1;
            } else {
                state.itens.push({ ...product, qtd: 1 })
            }
        },
        retirarCarrinho: (state, action) => {
            state.itens = state.itens.filter(item => item.id !== action.payload);
        },
        limparCarrinho: (state) => {
            state.itens = [];
        }
    }
});

export const { adicionar, retirarCarrinho, limparCarrinho } = carrinhoSlicer.actions;
export default carrinhoSlicer.reducer;