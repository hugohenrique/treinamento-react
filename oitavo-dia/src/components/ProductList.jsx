import React from 'react';
import ProductItem from './ProductItem';

export function ProductList() {
    const products = [
        {
            id: 10,
            name: 'Apple Magic Mouse 2',
            price: 100
        },
        {
            id: 20,
            name: 'Fone JBL',
            price: 50
        }
    ];
    return (
        <div>
            {products.map(product => <ProductItem key={product.id} product={product}/>)}
        </div>
    );
}