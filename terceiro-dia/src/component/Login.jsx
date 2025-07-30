import React, { useState } from 'react';
import { useUsuario } from './context/UsuarioContext';

export default function Login() {
  const { usuario, login, logout } = useUsuario();
  const [nome, setNome] = useState('');

  if (usuario) {
    return (
      <div>
        <p>Bem vindo, {usuario}</p>
        <button onClick={logout}>Fazer logout</button>
      </div>
    );
  }

  const onSubmit = (e) => {
    e.preventDefault();
    login(nome);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Seu nome <br />
        <input type="text" value={nome} onChange={e => setNome(e.target.value)}
          placeholder="Informe seu nome"/>
        <button type="submit">Fazer login</button>
        </label>
    </form>
  );
}
