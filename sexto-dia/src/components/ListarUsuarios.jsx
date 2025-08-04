import React, { useEffect, useState } from 'react';
import './style.css';

const ListarUsuarios = () => {
    // 1. criar um estado para armazenar todos os usuarios carregados via API
    // 2. criar um estado para controlar a requisicao
    // 3. criar um estado para gerenciar o erro, caso aconteca

    const [usuarios, setUsuarios] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        async function carregar() {
            try {
                const resposta = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!resposta.ok) {
                    setCarregando(false);
                    throw new Error('Erro ao consultar os usuários');
                }

                setTimeout(async () => {
                    const body = await resposta.json();
                    setUsuarios(body);
                    setCarregando(false);
                }, 4000);
            } catch (e) {
                setErro(e);
            } finally {
                // setCarregando(false);
            }
        }

        carregar();
    }, []);

    return (
        <div>
            <h4>Lista de usuários do nosso App</h4>
            {carregando && (<p className={`${carregando ? 'carregando' : '' }`}>Carregando! Por favor, aguarde!</p>)}
            {erro && (<p className={`${erro ? 'erro' : '' }`}>Ops! Infelizmente ocorreu um erro.</p>)}
            <ul>
                {usuarios.map((usuario) => <li key={usuario.id}>{usuario.name}</li>)}
            </ul>
        </div>
    );
};

export default ListarUsuarios;