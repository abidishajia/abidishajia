import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo.png';

class NavBar extends Component {
    render() { 
        return ( 
            <nav className="navbar navbar-light navbar-expand-lg">
            <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand" width="40" height="40"/>
            </Link>
            
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">Open</button>

            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav">
                    <li className="navbar-item">
                        <Link to="/about" className="nav-link">About Me</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/projects" className="nav-link">Projects</Link>
                    </li>
                </ul>
            </div>
        </nav>
         );
    }
}
 
export default NavBar;