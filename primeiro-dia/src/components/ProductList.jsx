import React from 'react';
import ProductCard from './ProductCard';
import Alert from './Alert';

const ProductList = (props) => (
  <div>
    {props.produtos.map((item) => (
      <div key={item.id}>
        <ProductCard produto={item} />
        <br />
      </div>
    ))}
    <br />
    <Alert mensagem="Últimas unidades!" />
  </div>
);

export default ProductList;