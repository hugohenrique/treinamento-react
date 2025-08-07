import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { adicionar } from '../reducers/carrinhoReducer';

export default function ProdutoDetalhe() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const produto = useSelector(state => state.produto.itens.find(item => item.id == id));

    const adicionarProduto = (produto) => {
        dispatch(adicionar(produto));
        navigate('/carrinho');
    };

    return (
        <div className="p-4 space-y-4">
            <h3>{produto.title}</h3>
            <img src={produto.image} alt={produto.title} width={140} />
            <p>{produto.description}</p>
            <strong>R$ {produto.price}</strong>
            <p>
                <button onClick={() => adicionarProduto(produto)}>comprar esse produto</button>
            </p>
            <br/>
            <p>
                <Link to="/produtos">Voltar a lista de produtos</Link>
            </p>
        </div>
    );
}
