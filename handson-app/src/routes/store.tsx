import StoreCartPage from '../pages/StoreCartPage';
import StoreProductsPage from '../pages/StoreProductsPage';
import StoreLayout from '../components/StoreLayout';
import CheckoutPage from '../pages/CheckoutPage';

export default {
  path: '/store',
  element: <StoreLayout/>,
  children: [
    {
      index: true,
      element: <StoreProductsPage/>
    },
    {
      path: 'cart',
      element: <StoreCartPage/>
    },
    {
      path: 'checkout',
      element: <CheckoutPage/>
    }
  ]
};
