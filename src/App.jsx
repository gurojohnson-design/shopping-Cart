import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';
import './styles/App.css';
import { useState, useCallback } from 'react';
import { element } from 'prop-types';

// need to refactor pretty heavily to get navbar to not refresh webpage when items are added to cart


// pull layout and router out of App() to stop multiple mountings
function Layout({ cart, addToCart}) {
  const cartCount = cart.reduce((total, item ) => total + item.quantity, 0);
  
  return (
    <>
      <Navbar cartCount={cartCount} />
      <Outlet context={{ addToCart }} />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutWrapper />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'shop', element: <ShopPage /> },
      { path: 'cart', element: <CartPage />},
    ],
  },
]);

// wrap Layout to pass down comps i need
function LayoutWrapper() {
  const [cart, setCart] = useState([]);

  const addToCart = useCallback((id, quantity) => {
    if (quantity <= 0) return;
    setCart(prev => {
      if (prev.some(obj => obj.id === id)) {
        return prev.map(item =>
          item.id === id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { id, quantity }];
    });
  }, []);

  return <Layout cart={cart} addToCart={addToCart} />;
}

function App() {
  
  return <RouterProvider router={router} />;

}



export default App
