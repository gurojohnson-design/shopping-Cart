import { Link } from "react-router-dom";
import '../styles/home-page.css';

function HomePage() {
    return (
        // let's throw something generic content in here to fill the void
        <div>
            <h2>Welcome to the Home Page of my store!</h2>
            <p>This isn't a real store just yet but has definitely been some good practice with React!</p>
            <p>Check out my Github and other socials below!</p>
            <Link to='/shop'>Get Shopping</Link>

        {
        //some type of footer with links to Github etc. will go here 
        }
        <p>** links to socials will go here **</p>

        </div>
    )
}


export default HomePage;