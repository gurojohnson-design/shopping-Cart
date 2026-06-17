import { useState } from "react";



// id, title, price, description, category, img

// need to write a card that displays info and receives the above from the ShopPage as props. in addition to the info need to have a increment/decrement button for quantity and a 'add to cart' button

// more on this later

// will receive array of product objects with above data and need to return display for all those things

function ProductCard(pic, name, price, id, description) {
    //track state of increment and decrement buttons
    const [quantity, setQuantity] = useState(0);

    function handleChange(step) {
        step ? setQuantity(quantity + 1) : setQuantity(quantity - 1);
    }

    function sendToCart(num) {
        if (num > 0) {
            return num
        }
    }

    return (
        <div>
            <img 
            src={pic}
            alt={description} >product pic goes here</img>
            <h3>{name}</h3>
            <p>{price}</p>
            <button
                onClick={handleChange(false)}
                >-</button>
            <input
                type="number"
                value={quantity}
                onChange={handleChange}
                min={0}
                step={1}
                pattern="[0-9]*"
                placeholder="" 
                />
            <button
                onClick={handleChange(true)}
            >
                +
            </button>
                <button
                    onClick={sendToCart({quantity})}
                >Add to cart</button>
        </div>
    )

}

export default ProductCard;