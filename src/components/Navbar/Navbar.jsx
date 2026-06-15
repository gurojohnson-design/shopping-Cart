import { Link } from "react-router-dom";
import propTypes from "prop-types";
import './Navbar.css';

// setup navbar to render... well, the navbar and link to relevant pages

function Navbar({ cartCount }) {
    return (
        <nav>
            <h1><Link to='/'>Home</Link></h1>
            <ul>
                <li><Link to='/shop'>Shop</Link> </li>
                <li><Link to='/cart'>Cart ({cartCount})</Link></li>
            </ul>
        </nav>
    );
}

Navbar.propTypes = {
    cartCount: propTypes.number.isRequired,
};

export default Navbar;