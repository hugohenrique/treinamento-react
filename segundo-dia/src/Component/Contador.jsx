import React, { useState, useEffect } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);
  const [assinatura, setAssinatura] = useState('lorem');

  useEffect(() => {
    console.log('Houve alteração em algum dos estados');
  });

  useEffect(() => {
    console.log('O contador atual é: ', contador);
  }, [contador]);

  useEffect(() => {
    console.log('A nova assinatura agora é', assinatura);
  }, [assinatura]);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <br/>
      <button onClick={() => setAssinatura(new Date().toISOString())}>Fazer nova assinatura</button>
    </div>
  );
}

export default Contador;