import React from 'react';
import formatarValor from '../formatarValor';

const ProductCard = (props) => (
  <div>
    <strong>{props.produto.nome}</strong>
    <br/>
    {formatarValor(props.produto.valor)}
    <br/>
    <button onClick={() => alert(`Produto: ${props.produto.nome}`)}>Ver detalhes</button>
  </div>
);

export default ProductCard;