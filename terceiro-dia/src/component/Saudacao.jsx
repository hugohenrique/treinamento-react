import { useState } from 'react';
import { useTema } from './TemaContext';

function Saudacao({ nome }) {
  const { tema, alterarTema } = useTema();
  const [hora, setHora] = useState(new Date().getHours());

  let mensagem = 'Ola';

  if (hora < 12) {
    mensagem = 'Bom dia';
  } else if (hora < 18) {
    mensagem = 'Boa tarde';
  }

  return (
    <p className={tema}>{mensagem}, {nome}</p>
  );
}

export default Saudacao;