import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { router } from './App';
import './index.css';
import AuthProvider from './contexts/AuthContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={router}/>
      </AuthProvider>
    </Provider>
  </StrictMode>,
);
