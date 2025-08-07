import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Carrinho() {
    const itens = useSelector(state => state.carrinho.itens);
    return (
        <div>
            <h3>Carrinho de compras</h3>
            {itens.length == 0 ? (
                <>
                    <p>Seu carrinho está vazio.</p>
                    <Link to="/produtos">Volte a página de produtos</Link>
                </>
            ) : (
                <ul>
                    {itens.map((item, i) => (
                        <li key={i}>
                            {item.title} - R$ {item.price}
                        </li>
                    ))}
                </ul>
            )}
            <p>
                <Link to="/produtos">Voltar para a lista de produtos</Link>
                <br />
                <Link to="/checkout">finalizar ao carrinho</Link>
            </p>
        </div>
    );
}