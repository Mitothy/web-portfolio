import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
    const [navActive, setNavActive] = useState(false);
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem('darkMode');
        return saved !== null ? saved === 'true' : true;
    });

    const toggleNav = () => {
        setNavActive(!navActive);
    };

    const closeMenu = () => {
        setNavActive(false);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        // Apply dark mode class to body
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    useEffect(() => {
        // Close menu on initial load if screen is small
        if (window.innerWidth <= 1200) {
            closeMenu();
        }

        // Handle resize events
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu();
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <nav className={`navbar ${navActive ? "active" : ""}`} role="navigation" aria-label="Main navigation">
            <div>
                <a
                    href="https://github.com/Mitothy?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="navbar--logo-text"
                >
                    @timothyjoshua_tan
                </a>
            </div>
            <button
                className={`nav__hamburger ${navActive ? "active" : ""}`}
                onClick={toggleNav}
                aria-label="Toggle navigation menu"
                aria-expanded={navActive}
            >
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
            </button>
            <div className={`navbar--items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <Link
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="heroSection"
                            className="navbar--content"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="MyPortfolio"
                            className="navbar--content"
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="AboutMe"
                            className="navbar--content"
                        >
                            About Me
                        </Link>
                    </li>
                    {/* Changed part */}
                    <li>
                        <a
                            href="https://www.instagram.com/timothyjoshua_tan/"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeMenu}
                            className="navbar--content"
                        >
                            Contact Me
                        </a>
                    </li>
                    <li className="theme-toggle-container">
                        <button
                            className="navbar--theme-toggle"
                            onClick={toggleDarkMode}
                            aria-label="Toggle dark mode"
                        >
                            <span className={`toggle-option ${!darkMode ? 'active' : ''}`}>L</span>
                            <span className={`toggle-option ${darkMode ? 'active' : ''}`}>D</span>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
