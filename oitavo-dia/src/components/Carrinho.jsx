import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { retirarCarrinho, limparCarrinho } from '../features/carrinhoSlice';

export default function Carrinho() {
    const itens = useSelector(state => state.carrinho.itens);
    const dispatch = useDispatch();
    return (
        <div className="carrinho-container">
            <h4>Carrinho</h4>
            {itens.length === 0 ? <p>Seu carrinho está vazio</p> : (
                <>
                    <ul>
                        {itens.map(item => (
                            <li key={item.id}>
                                {item.name} - {item.qtd} (QTD) - R$ {item.price} (R$ {item.price * item.qtd})
                                <button className="btn-remove-item" onClick={() => dispatch(retirarCarrinho(item.id))}>remover</button>
                            </li>
                        ))}
                    </ul>
                    <button onClick={() => dispatch(limparCarrinho())}>limpar carrinho</button>
                </>
            )}
        </div>
    );
}