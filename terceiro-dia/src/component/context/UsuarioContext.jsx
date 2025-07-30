import React, { createContext, useContext, useState } from 'react';

//1. criar o contexto (a referencia)
const UsuarioContext = createContext();

// 2. cria o ambiente de compartilhamento do contexto
export function UsuarioProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  function login(nome) {
    setUsuario(nome);
  }

  function logout() {
    setUsuario(null);
  }

  return (
    <UsuarioContext.Provider value={{ usuario, login, logout }}>
      {children}
    </UsuarioContext.Provider>
  );
}

// 3. torna esse contexto acessível "publicamente"
export function useUsuario() {
  return useContext(UsuarioContext);
};