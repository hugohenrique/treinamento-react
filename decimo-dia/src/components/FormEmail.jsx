import { useState } from 'react';

function FormEmail({ onEnviar }) {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!/\S+@\S.+\S+/.test(email)) {
            console.warn('Email inválido');
            return;
        }

        onEnviar(email);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <p>
                <button type="submit">Enviar</button>
            </p>
        </form>
    );
}

export default FormEmail;