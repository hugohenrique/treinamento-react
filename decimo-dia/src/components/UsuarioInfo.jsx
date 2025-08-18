import { useEffect, useState, } from 'react';

function UsuarioInfo() {
    const [usuario, setUsuario] = useState('');

    useEffect(() => {
        fetch('/api/usuarios')
            .then(resposta => resposta.json())
            .then(data => setUsuario(data.name));
    }, []);

    return <div>Usuário: {usuario}</div>
}

export default UsuarioInfo;