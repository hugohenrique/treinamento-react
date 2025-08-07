import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, logout } from '../reducers/authReducer';

export default function Login() {
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const auth = useSelector((state) => state.auth);

    const handleLogin = () => {
        if (!username.trim()) {
            return;
        }

        const token = 'fake-token-' + Date.now();
        dispatch(login({ username, token }));
        setUsername('');
        navigate('/carrinho');
    };

    return (
        <div className="space-y-12 border-b border-white/10 pb-12">
            {auth.user ? (
                <>
                    <p>
                        Bem vindo, <strong>{auth.user}</strong>
                        <button className="btn-logout" onClick={() => dispatch(logout())}>sair</button>
                    </p>
                </>
            ) : (
                <>
                    <label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Digite seu usuário"
                            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                        />
                    </label>
                    <button onClick={handleLogin}>Entrar</button>
                </>
            )}
        </div>
    );
}