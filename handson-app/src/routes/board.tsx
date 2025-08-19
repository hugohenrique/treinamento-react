import { Outlet, Link } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute';
import { Layout } from '../components/Layout';
import DashboardPage from '../pages/DashboardPage';
import ProductsPage from '../pages/ProductsPage';

export default {
  path: '/',
  element: (
    <ProtectedRoute>
      <Layout>
        <Outlet/>
      </Layout>
    </ProtectedRoute>
  ),
  handle: { crumb: () => <Link to="/">Dashboard</Link> },
  children: [
    { index: true, element: <DashboardPage /> },
    { path: '/products', element: <ProductsPage/> }
  ]
};