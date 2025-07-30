import './App.css'
/*
import { TemaProvider } from './component/TemaContext';
import Saudacao from './component/Saudacao';
import AlternarTema from './component/AlternarTema';
*/

import { UsuarioProvider } from './component/context/UsuarioContext';
import Login from './component/Login';

function App() {
  return (
    <>
      <UsuarioProvider>
        <Login />
      </UsuarioProvider>
      {/* <TemaProvider>
        <AlternarTema />
        <Saudacao nome="João" />
      </TemaProvider> */}
    </>
  )
}

export default App
