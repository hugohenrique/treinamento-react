import React, { useState } from 'react';

export default function RecarregarUsuario() {
    const [usuarios, setUsuarios] = useState([]);

    const recarregar = async () => {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await resposta.json();
        setUsuarios(data);
    };

    return (
        <div>
            <button onClick={recarregar}>
                Carregar base de usuários
            </button>
            <ul>
                {usuarios.map((usuario) => <li key={usuario.id}>{usuario.name}</li>)}
            </ul>
        </div>
    );
}