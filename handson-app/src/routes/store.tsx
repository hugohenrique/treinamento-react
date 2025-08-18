import { Outlet } from 'react-router-dom';
import StoreCartPage from '../pages/StoreCartPage';
import StoreProductsPage from '../pages/StoreProductsPage';

const Layout = () => <div><Outlet/></div>;

export default {
  path: '/store',
  element: <Layout/>,
  children: [
    {
      index: true,
      element: <StoreProductsPage/>
    },
    {
      path: 'cart',
      element: <StoreCartPage/>
    }
  ]
};
