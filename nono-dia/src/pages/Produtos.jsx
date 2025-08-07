import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { obterProdutos } from '../reducers/produtoReducer';
import { Link } from 'react-router-dom';

export default function Produtos() {
    const dispatch = useDispatch();

    const { itens, loading } = useSelector(state => state.produto);

    useEffect(() => {
        dispatch(obterProdutos());
    }, [dispatch]);

    return (
        <div>
            <h4>Produtos</h4>
            {loading ? <p>Carregando</p> : (
                <ul>
                    {itens.map(item => (
                        <li key={item.id}>
                            <Link to={`/produtos/${item.id}`}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
