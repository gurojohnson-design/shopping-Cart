import { useState } from "react";


function CartItem({ item, updateQuantity }) {

    return (

                <div>
                    <img
                    src={item.pic}
                    alt={item.name}
                    />
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                    <button
                    onClick={() => updateQuantity(item.id, (item.quantity - 1))}
                    >-</button>
                    <input
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
                    onClick={() => updateQuantity(item.id, (item.quantity + 1))}
                    >+</button>
                    <button
                    onClick={() => updateQuantity(item.id, 0)}
                    >remove item</button>
                </div>
            )
        }

export default CartItem;