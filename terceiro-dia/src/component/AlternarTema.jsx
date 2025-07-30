import { useTema } from './TemaContext';

function AlternarTema() {
  const { tema, alterarTema } = useTema();

  return (
    <button className={tema} onClick={alterarTema}>
      Alterar tema (Atual: {tema})
    </button>
  );
}

export default AlternarTema;