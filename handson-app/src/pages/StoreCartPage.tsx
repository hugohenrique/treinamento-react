import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { remove, clear, selectedCartItems } from '../features/cart/reducer';
import { useGetProductsQuery } from '../features/products/api';
import formatMoney from '../formatMoney';

export default function StoreCartPage() {
  const items = useSelector(selectedCartItems);
  const dispatch = useDispatch();
  const { data: products = [] } = useGetProductsQuery({});
  const total = items.reduce((sum, item) => {
    const product = products.find(p => p.id === item.productId);
    return sum + (product?.price || 0) * item.quantity;
  }, 0);

  return (
    <div className="card">
      <div className='card-header flex justify-between items-center'>
        <h1 className='text-xl font-bold'>Carrinho</h1>
        <button className='btn' onClick={() => dispatch(clear())}>Limpar</button>
      </div>
      <div className="card-body">
        {!items.length && <p className="text-sm text-gray-500">Carrinho vazio</p>}
        {items.map(item => {
          const product = products.find(p => p.id === item.productId);
          return (
            <div className="flex items-center gap-2 mb-2" key={item.productId}>
              <span className="flex-1">{product?.name || `Produto ${item.productId}`}</span>
              <span>{item.quantity}</span>
              {/* button pra add */}
            </div>
          );
        })}
        {!!items.length && <>
          <p className="mt-4">Total: {formatMoney(total)}</p>
          <Link className="btn btn-primary mt-4" to="/store/checkout">Finalizar compra</Link>
        </>}
      </div>
    </div>
  );
}
