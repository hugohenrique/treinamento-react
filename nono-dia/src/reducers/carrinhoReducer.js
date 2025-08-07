import { createSlice } from '@reduxjs/toolkit';

const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState: {
        itens: [],
    },
    reducers: {
        adicionar: (state, action) => {
            const product = action.payload;
            const existing = state.itens.find(item => item.id === product.id);

            console.log(product);

            if (existing) {
                existing.qtd += 1;
            } else {
                state.itens.push({ ...product, qtd: 1 });
            }
        },
        retirarProduto: (state, action) => {
            state.itens = state.itens.filter(item => item.id !== action.payload);
        },
        limparCarrinho: (state) => {
            state.itens = [];
        }
    }
});

export const { adicionar, retirarProduto, limparCarrinho } = carrinhoSlice.actions;

export default carrinhoSlice.reducer;