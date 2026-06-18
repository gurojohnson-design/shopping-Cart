import PropTypes from "prop-types";
import './CartItem.css';


function CartItem({ item, updateQuantity }) {

    return (

                <div className="cart-item" id={`cart-item-${item.id}`}>
                    <img
                    className="cart-item__image"
                    src={item.pic}
                    alt={item.name}
                    />
                    <div className="cart-item__content">
                    <h3 className="cart-item__title">{item.name}</h3>
                    <p className="cart-item__price">{item.price}</p>
                    </div>
                    <div className="cart-item__actions">
                    <div className="cart-item__quantity">
                    <button
                    className="cart-item__quantity-button"
                    onClick={() => updateQuantity(item.id, (item.quantity - 1))}
                    >-</button>
                    <input
                    className="cart-item__quantity-input"
                    type="number"
                    id={item.id}
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                    min={0}
                    step={1}
                    pattern="[0-9]*"
                    placeholder={item.quantity}
                    />
                    <button
                    className="cart-item__quantity-button"
                    onClick={() => updateQuantity(item.id, (item.quantity + 1))}
                    >+</button>
                    </div>
                    <button
                    className="cart-item__remove-button"
                    onClick={() => updateQuantity(item.id, 0)}
                    >remove item</button>
                    </div>
                </div>
            )
        }



CartItem.PropTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        pic: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
    }).isRequired,    
    updateQuantity: PropTypes.func.isRequired,
};
export default CartItem;
