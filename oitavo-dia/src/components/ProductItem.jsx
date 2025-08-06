import React from 'react';
import { useDispatch } from 'react-redux';
import { adicionar } from '../features/carrinhoSlice';

export default function ProductItem({ product }) {
    const dispatch = useDispatch();
    return (
        <div className="product-item">
            <p><strong>{product.name}</strong></p>
            <p>R$ {product.price}</p>
            <button onClick={() => dispatch(adicionar(product))}>adicionar no carrinho</button>
        </div>
    );
}