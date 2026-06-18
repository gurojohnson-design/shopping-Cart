import { Link } from "react-router-dom";
import propTypes from "prop-types";
import './Navbar.css';

// setup navbar to render... well, the navbar and link to relevant pages

function Navbar({ cartCount }) {
    return (
        <nav className="navbar" id="site-navbar">
            <h1 className="navbar__brand"><Link className="navbar__brand-link" to='/'>Home</Link></h1>
            <ul className="navbar__links" id="primary-navigation">
                <li className="navbar__item"><Link className="navbar__link" to='/shop'>Shop</Link> </li>
                <li className="navbar__item">
                    <Link className="navbar__link navbar__cart-link" to='/cart'>
                        Cart <span className="navbar__cart-count" id="cart-count">{cartCount}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

Navbar.propTypes = {
    cartCount: propTypes.number.isRequired,
};

export default Navbar;
