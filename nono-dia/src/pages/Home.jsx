import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <h3>Bem vindo</h3>
            <Link to="/produtos">Visualizar todos os produtos</Link>
        </div>
    );
}
