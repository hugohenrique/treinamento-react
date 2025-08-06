import { useSelector } from 'react-redux';
import './App.css';
import { ProductList } from './components/ProductList';
import Carrinho from './components/Carrinho';
import Login from './components/Login';

function App() {
  const auth = useSelector(state => state.auth);
  return (
    <>
      <Login/>
      {auth.user ? (
        <div style={{ display: 'flex', gap: '40px' }}>
          <Carrinho/>
          <ProductList/>
        </div>
      ) : (
        <p>Faça o login para acessar os produtos e o carrinho de compra</p>
      )}
    </>
  )
}

export default App;
