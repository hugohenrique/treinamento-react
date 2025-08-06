import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../features/authSlice';

export default function Login() {
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    const handleLogin = () => {
        if (!username.trim()) {
            return;
        }

        const token = 'fake-token-' + Date.now();
        dispatch(login({ username, token }));
        setUsername('');
    };

    return (
        <div style={{ marginBottom: '20px' }}>
            {auth.user ? (
                <>
                    <p>Bem vindo, {auth.user}</p>
                    <button onClick={() => dispatch(logout())}>sair</button>
                </>
            ) : (
                <>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Digite seu usuário"
                    />
                    <button onClick={handleLogin}>Entrar</button>
                </>
            )}
        </div>
    );
}