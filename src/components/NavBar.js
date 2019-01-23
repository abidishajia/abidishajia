import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo.png';
import styled from 'styled-components'

class NavBar extends Component {
    render() { 
        return ( 
            <nav className="navbar navbar-light navbar-expand-lg">
            <Link to="/abidishajia">
                    <img src={logo} alt="store" className="navbar-brand" width="40" height="40"/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <NavLinks className="collapse navbar-collapse ml-auto" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="navbar-item">
                        <Link to="/projects" className="nav-link">Projects</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/about" className="nav-link">About Me</Link>
                    </li>
                </ul>
            </NavLinks>
        </nav>
         );
    }
}

const NavLinks = styled.div`
    li{
        font-family:'Kalam', cursive !important;
        color: var(--mainSeaGreen) !important;
    }

`
 
export default NavBar;