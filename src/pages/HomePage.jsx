import { Link } from "react-router-dom";
import '../styles/home-page.css';

function HomePage() {
    return (
        // let's throw something generic content in here to fill the void
        <div className="home-page" id="home-page">
            <h2 className="home-page__heading">Welcome to the Home Page of my store!</h2>
            <p className="home-page__copy">This isn't a real store just yet but has definitely been some good practice with React!</p>
            <p className="home-page__copy">Check out my Github and other socials below!</p>
            <Link className="home-page__cta" id="shop-cta" to='/shop'>Get Shopping</Link>

        {
        //some type of footer with links to Github etc. will go here 
        }
        <p className="home-page__social-placeholder">** links to socials will go here **</p>

        </div>
    )
}


export default HomePage;
