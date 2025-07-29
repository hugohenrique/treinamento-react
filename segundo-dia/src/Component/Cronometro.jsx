import React, { useEffect, useState, useRef } from 'react';

function Cronometro() {
  const [contador, setContador] = useState(0);
  const intervaloRef = useRef(null);

  const iniciar = () => {
    // se existe e porque foi iniciado
    if (intervaloRef.current !== null) {
      return;
    }
    console.log('Cronometro iniciado');
    // no intervalo de 1s, vai incrementar o contador
    intervaloRef.current = setInterval(() => {
      setContador((valorAnterior) => valorAnterior + 1);
    }, 1000);
  };

  const parar = () => {
    console.log('Cronometro pausado');
    clearInterval(intervaloRef.current);
    intervaloRef.current = null;
  };

  useEffect(() => {
    // Cleanup/limpeza do componente
    return () => clearInterval(intervaloRef.current);
  }, []);

  return (
    <div>
      <h4>Cronometro</h4>
      <h1>{contador}</h1>
      <br />
      <button onClick={iniciar} style={{ background: 'green', marginRight: 10 }}>Começar</button>
      <button onClick={parar} style={{ background: 'red', color: 'white' }}>Parar</button>
    </div>
  );
}

export default Cronometro;