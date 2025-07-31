import './App.css'

import { UsuarioProvider, useUsuario } from './component/context/UsuarioContext';
import { TemaProvider } from './component/context/TemaContext';
import AlternarTema from './component/AlternarTema';
import Login from './component/Login';

const SaudacaoComTema = () => {
  const { usuario } = useUsuario();
  const nome = usuario ? usuario : 'visitante';
  return (
    <p>Bem vindo(a), {nome}</p>
  );
};

function App() {
  return (
    <TemaProvider>
      <UsuarioProvider>
        <div>
          <AlternarTema />
          <Login />
          <SaudacaoComTema />
        </div>
      </UsuarioProvider>
    </TemaProvider>
  )
}

export default App
