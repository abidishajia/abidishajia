import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon my-toggler"></span>

            </button>

            {/* <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#collapsingNavbar2">
        <span class="navbar-toggler-icon my-toggler"></span>
    </button> */}

            <div className="collapse navbar-collapse ml-auto" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="navbar-item">
                        <Link to="/abidishajia" className="nav-link">Home</Link>
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