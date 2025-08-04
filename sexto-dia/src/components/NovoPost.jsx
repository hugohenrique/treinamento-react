import React, { useState } from 'react';

export default function NovoPost() {
    const [titulo, setTitulo] = useState('');
    const [conteudo, setConteudo] = useState('');
    const [notificacao, setNotificacao] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const sent = await fetch(
                'https://jsonplaceholder.typicode.com/posts',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ titulo: titulo, conteudo: conteudo })
                }
            );
            if (!sent.ok) {
                throw new Error('Ocorreu algum erro ao criar o post');
            }
            setNotificacao('Post foi criado com sucesso!');
        } catch (e) {
            setNotificacao('Ocorreu algum erro ao criar o post');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {notificacao && (<p>{notificacao}</p>)}
            <label>
                Título<br/>
                <input onChange={(e) => setTitulo(e.target.value)} />
            </label>
            <br/>
            <label>
                Conteúdo<br/>
                <textarea onChange={(e) => setConteudo(e.target.value)}></textarea>
            </label>
            <br />
            <button type="submit">Novo post</button>
        </form>
    );
}