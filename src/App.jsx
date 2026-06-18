import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';
import './styles/App.css';
import { useState, useCallback } from 'react';

// need to refactor pretty heavily to get navbar to not refresh webpage when items are added to cart


// pull layout and router out of App() to stop multiple mountings
function Layout({ cart, addToCart, updateQuantity}) {
  const cartCount = cart.reduce((total, item ) => total + item.quantity, 0);
  
  return (
    <>
      <Navbar cartCount={cartCount} />
      <Outlet context={{ addToCart, updateQuantity, cart }} />
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

  const addToCart = useCallback((id, quantity, productInfo) => {
    if (quantity <= 0) return;
    setCart(prev => {
      if (prev.some(obj => obj.id === id)) {
        return prev.map(item =>
          item.id === id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { ...productInfo, id, quantity }];
    });
  }, []);

  const updateQuantity = useCallback((id, newQuantity) => {
    if (newQuantity === 0) {
      setCart(prev => prev.filter(item => item.id !== id))
    } else {
      setCart(prev =>
      prev.map(item => item.id === id ? { ...item, quantity: newQuantity} : item)
      )
      
    }
  }, []);
  
    

  return <Layout cart={cart} addToCart={addToCart} updateQuantity={updateQuantity} />;
}

function App() {
  
  return <RouterProvider router={router} />;

}



export default App
