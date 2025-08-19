import { Link, NavLink, Outlet } from 'react-router-dom';
import CartIcon from './CartIcon';

export default function StoreLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="h-[var(--header-height)] border-b bg-white/95 backdrop-blur border-gray-200">
        <Link className="font-semibold text-gray-900" to="/store">Loja</Link>
        <nav className="flex items-center gap-4">
          <NavLink to="/store" end className={({ isActive }) => 'btn ' + (isActive ? 'btn-primary' : '')}>
            Produtos
            <CartIcon />
          </NavLink>
        </nav>
      </header>
      <main className="flex-1 container-narrow py-6">
        <Outlet />
      </main>
    </div>
  );
}
