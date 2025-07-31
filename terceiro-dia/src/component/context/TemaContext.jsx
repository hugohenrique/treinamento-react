import React, { createContext, useContext, useState, useEffect } from 'react';

const TemaContext = createContext();

export function TemaProvider({ children }) {
  const [tema, setTema] = useState('claro');

  const alterarTema = () => {
    setTema(t => (t === 'claro' ? 'escuro' : 'claro'));
  };

  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(tema);
  }, [tema]);

  return (
    <TemaContext.Provider value={{ tema, alterarTema }}>
      {children}
    </TemaContext.Provider>
  );
}

export function useTema() {
  return useContext(TemaContext);
};
