import { useState } from "react";
import PropTypes from "prop-types";
import './ProductCard.css';


// id, title, price, description, category, img

// need to write a card that displays info and receives the above from the ShopPage as props. in addition to the info need to have a increment/decrement button for quantity and a 'add to cart' button

// will receive array of product objects with above data and need to return display for all those things

function ProductCard({pic, name, price, id, addToCart}) {
    //track state of increment and decrement buttons
    const [quantity, setQuantity] = useState(0);

    function handleChange(step) {
        step ? setQuantity(quantity + 1) : setQuantity(quantity - 1);
    }

    return (
        <div className="product-card" id={`product-${id}`}>
            <img 
            className="product-card__image"
            src={pic}
            alt={name} />
            <div className="product-card__content">
            <h3 className="product-card__title">{name}</h3>
            <p className="product-card__price">{price}</p>
            </div>
            <div className="product-card__actions">
            <div className="product-card__quantity">
            <button
                className="product-card__quantity-button"
                onClick={() => handleChange(false)}
                >-</button>
            <input
                className="product-card__quantity-input"
                type="number"
                id={id}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                min={1}
                step={1}
                pattern="[0-9]*"
                placeholder="1" 
                />
            <button
                className="product-card__quantity-button"
                onClick={() => handleChange(true)}
            >
                +
            </button>
            </div>
                <button
                    className="product-card__add-button"
                    onClick={() => addToCart(id, quantity, { name, price, pic })}
                >Add to cart</button>
            </div>
        </div>
    )

}

ProductCard.PropTypes = {
    pic: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    addToCart: PropTypes.func.isRequired,
};


export default ProductCard;
