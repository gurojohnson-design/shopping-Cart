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

            <a
                className="home-page__social-link"
                href="https://github.com/gurojohnson-design"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
            >
                <svg
                    className="home-page__github-icon"
                    viewBox="0 0 24 24"
                    role="img"
                    aria-hidden="true"
                    focusable="false"
                >
                    <path d="M12 0.5C5.65 0.5 0.5 5.65 0.5 12c0 5.09 3.29 9.39 7.86 10.92 0.58 0.1 0.79-0.25 0.79-0.56 0-0.28-0.01-1.02-0.02-2-3.2 0.7-3.88-1.54-3.88-1.54-0.52-1.33-1.28-1.68-1.28-1.68-1.05-0.72 0.08-0.7 0.08-0.7 1.16 0.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36 0.96 0.1-0.75 0.4-1.25 0.73-1.54-2.55-0.29-5.23-1.27-5.23-5.66 0-1.25 0.45-2.27 1.18-3.07-0.12-0.29-0.51-1.46 0.11-3.03 0 0 0.97-0.31 3.16 1.17 0.92-0.25 1.9-0.38 2.88-0.39 0.98 0.01 1.96 0.14 2.88 0.39 2.19-1.48 3.15-1.17 3.15-1.17 0.63 1.57 0.23 2.74 0.11 3.03 0.74 0.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.37-5.25 5.65 0.41 0.36 0.78 1.06 0.78 2.14 0 1.54-0.01 2.79-0.01 3.17 0 0.31 0.21 0.67 0.79 0.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35 0.5 12 0.5Z" />
                </svg>
            </a>

        </div>
    )
}


export default HomePage;
