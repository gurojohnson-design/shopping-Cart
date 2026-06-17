import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard.jsx/ProductCard";

function ShopPage({onAddToCart}) {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((response) => {
            if (response.status >= 400) {
                throw new Error('server error');
            }
            return response.json();
        })
        .then((response) => setProducts(response))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Loading...</p>
    if (error) return <p>A network error was encountered</p>;



    return (
        <div>
            <ul>
                {products.map((product) => (

                    <ProductCard key={product.id} pic={product.image} name={product.title} price={product.price} id={product.id} description={product.description} onAddToCart={onAddToCart} />
                ))}
            </ul>



            <p>This is the shop page</p>
        </div>
    )
}

export default ShopPage;