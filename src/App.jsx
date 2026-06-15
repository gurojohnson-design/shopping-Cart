import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';
import './styles/App.css';

// setup router to be passed down to all children pages
  function Layout() {
    return (
      <>
        <Navbar cartCount={0}/>
        <Outlet />
      </>
    );
  }

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'shop', element: <ShopPage /> },
      { path: 'cart', element: <CartPage /> },
    ],
  },
]);



function App() {

  return <RouterProvider router={router} />;
}

export default App
