import './App.css';
import ProductList from './components/ProductList';

// carregar produtos de JSON
const produtos = [
  {
    id: 1,
    nome: 'Mouse',
    valor: 100
  },
  {
    id: 2,
    nome: 'Teclado',
    valor: 200
  },
  {
    id: 3,
    nome: 'Monitor',
    valor: 600
  }
];

function App() {
  return (
    <>
      <div>
        <h1>Catálogo</h1>
        <ProductList produtos={produtos} />
      </div>
    </>
  )
}

export default App
