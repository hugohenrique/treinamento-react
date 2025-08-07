import { useSelector } from 'react-redux';
import { Routes, Route, BrowserRouter, Navigate, useLocation } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import NotFound from './pages/NotFound';
import ProdutoDetalhe from './pages/ProdutoDetalhe';
import Carrinho from './pages/Carrinho';
import Login from './pages/Login';
import Checkout from './pages/Checkout';

function PrivateRoute({ children }) {
  const location = useLocation();
  const auth = useSelector((state) => state.auth);

  if (auth.user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} />
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produtos/:id" element={<ProdutoDetalhe />} />
        <Route path="/carrinho" element={<PrivateRoute><Carrinho /></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
