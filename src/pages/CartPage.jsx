import { useOutletContext, Link } from "react-router-dom";
import CartItem from "../components/CartItem/CartItem";


//updateQuantity, cart


function CartPage() {
    const { cart, updateQuantity} = useOutletContext();


    if(cart.length === 0) {
        return (
            <>
            <h2>Nothing to see here.</h2>
            <p><Link to='/shop' >Get shopping!</Link></p>
            </>
        )
    } else {
        return (
            <div>
                <ul>
                    {cart.map((product) => (
                        <CartItem key={product.id} item={product} updateQuantity={updateQuantity} />
                    ))}
                </ul>
            </div>
        )
    }
}

export default CartPage;