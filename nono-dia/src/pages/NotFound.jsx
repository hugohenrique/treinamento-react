import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div>
            <p>Página não encontrada</p>
            <Link to="/">
                <small>Voltar a página inicial</small>
            </Link>
        </div>
    );
}