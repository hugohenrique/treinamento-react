import { useDispatch } from 'react-redux';
import { useGetProductsQuery } from '../features/products/api';
import { add } from '../features/cart/reducer';
import formatMoney from '../formatMoney';

export default function StoreProductsPage() {
  const { data = [], isLoading } = useGetProductsQuery({});
  const dispatch = useDispatch();

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {data.map(product => (
        <div key={product.id} className="card">
          <div className="card-header">
            <h3 className="card-title">{product.name}</h3>
          </div>
          <div className="card-body space-y-2">
            <p>{formatMoney(product.price)}</p>
            <button
              className={`btn w-full btn-primary ${product.stock === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={() => dispatch(add(product.id))}
              disabled={product.stock === 0}>
              {product.stock === 0 ? 'Sem estoque' : 'Adicionar ao carrinho'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}