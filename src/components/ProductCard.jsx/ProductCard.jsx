import { useState } from "react";



// id, title, price, description, category, img

// need to write a card that displays info and receives the above from the ShopPage as props. in addition to the info need to have a increment/decrement button for quantity and a 'add to cart' button

// will receive array of product objects with above data and need to return display for all those things

function ProductCard({pic, name, price, id, description, addToCart}) {
    //track state of increment and decrement buttons
    const [quantity, setQuantity] = useState(0);

    function handleChange(step) {
        step ? setQuantity(quantity + 1) : setQuantity(quantity - 1);
    }

    return (
        <div>
            <img 
            src={pic}
            alt={name} />
            <h3>{name}</h3>
            <p>{price}</p>
            <button
                onClick={() => handleChange(false)}
                >-</button>
            <input
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
                onClick={() => handleChange(true)}
            >
                +
            </button>
                <button
                    onClick={() => addToCart(id, quantity, { name, price, pic })}
                >Add to cart</button>
        </div>
    )

}

export default ProductCard;