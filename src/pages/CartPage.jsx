import { useOutletContext, Link } from "react-router-dom";
import CartItem from "../components/CartItem/CartItem";
import '../styles/cart-page.css';


//updateQuantity, cart


function CartPage() {
    const { cart, updateQuantity} = useOutletContext();


    if(cart.length === 0) {
        return (
            <div className="cart-page cart-page--empty" id="cart-page">
            <h2 className="cart-page__heading">Nothing to see here.</h2>
            <p className="cart-page__empty-copy"><Link className="cart-page__shop-link" to='/shop' >Get shopping!</Link></p>
            </div>
        )
    } else {
        return (
            <div className="cart-page" id="cart-page">
                <ul className="cart-page__items" id="cart-items">
                    {cart.map((product) => (
                        <CartItem key={product.id} item={product} updateQuantity={updateQuantity} />
                    ))}
                </ul>
            </div>
        )
    }
}

export default CartPage;
