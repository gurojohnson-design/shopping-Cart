import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';
import './styles/App.css';
import { useState } from 'react';

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
  const [cart, setCart] = useState([]);

  function addToCart(id, quantity) {
    if (quantity <= 0) return;
    
    if (cart.some(obj => obj.id === id)) {
      setCart(cart.map(item => 
        item.id === id? {...item, quantity: item.quantity + quantity}
        : item
      ));
    } else {
      setCart([...cart, {id, quantity}]);
    }
  }



  return <RouterProvider router={router} />;
}

export default App
