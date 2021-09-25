import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse ml-auto" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="navbar-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/blogs" className="nav-link">Blogs</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;