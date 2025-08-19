import { ShoppingCart } from 'lucide-react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectedCartItems } from '../features/cart/reducer';

export default function CartIcon() {
  const count = useSelector(selectedCartItems).reduce((sum, i) => sum + i.quantity, 0);
  return (
    <Link to="/store/cart">
      <ShoppingCart className="w-4 h-4"/>
      {count > 0 && (
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-white text-xs">
          {count}
        </span>
      )}
    </Link>
  );
}
