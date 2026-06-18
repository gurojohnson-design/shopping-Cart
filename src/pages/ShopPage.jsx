import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard/ProductCard"
import { useOutletContext } from "react-router-dom";
import '../styles/shop-page.css';




function ShopPage() {
    const { addToCart } = useOutletContext();
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

    if (loading) return <p className="shop-page__status" id="shop-loading">Loading...</p>
    if (error) return <p className="shop-page__status" id="shop-error">A network error was encountered</p>;



    return (
        <div className="shop-page" id="shop-page">
            <ul className="shop-page__products" id="product-list">
                {products.map((product) => (

                    <ProductCard key={product.id} pic={product.image} name={product.title} price={product.price} id={product.id} addToCart={addToCart} />
                ))}
            </ul>


            <p className="shop-page__footer-note">This is the shop page</p>
        </div>
    )
}

export default ShopPage;
