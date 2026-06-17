import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';
import './styles/App.css';
import { useState, useCallback } from 'react';

function App() {
// setup router to be passed down to all children pages
  function Layout() {
    return (
      <>
        <Navbar cartCount={cart.reduce((total, item) => total + item.quantity, 0)}/>
        <Outlet />
      </>
    );
  }


// track cart state and handle adding items to cart
  const [cart, setCart] = useState([]);

  // refactored with useCallback to make it through rerenders
  const addToCart = useCallback((id, quantity) => {
    if (quantity <= 0) return;
    
    if (cart.some(obj => obj.id === id)) {
      setCart(cart.map(item => 
        item.id === id? {...item, quantity: item.quantity + quantity}
        : item
      ));
    } else {
      setCart([...cart, {id, quantity}]);
    }
  }, [cart]);

// pass addToCart down to the shop page
// refactored with useMemo to persist through rerenders
const router = useMemo(() => createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'shop', element: <ShopPage onAddToCart={addToCart} /> },
      { path: 'cart', element: <CartPage /> },
    ],
  },
]), [addToCart]);


  return <RouterProvider router={router} />
}

export default App
