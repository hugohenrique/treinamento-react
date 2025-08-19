import { createBrowserRouter } from 'react-router-dom';
import store from './routes/store';
import LoginPage from './pages/LoginPage/Page';
import board from './routes/board';

const NotFound = () => (<div>Página não encontrada</div>);

const routerConfig = [
  {
    path: '*',
    element: <NotFound/>
  },
  {
    path: '/login',
    element: <LoginPage/>
  }
];

routerConfig.push(store);
routerConfig.push(board);

export const router = createBrowserRouter(routerConfig);

function App() {
  return (
    <></>
  )
}

export default App
