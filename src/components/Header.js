import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <div className="main">
            <div>
                <div className="row">
                    <div className="title-name col-sm-12 col-md-12 mx-auto">
                        <span> SHAJIA ABIDI</span>
                    </div>
                </div>
                <div className="row">
                    <div className="profession-header col-sm-12 col-md-12  mx-auto">
                        <h3> Full Stack Web Developer</h3>
                    </div>
                </div>

                <div className="row socials">
                    <div className="col-md-12 col-12">
                        <span>
                            <a href="https://www.linkedin.com/in/abidishajia/" className="socialIcons">
                                <i role="button" aria-label="link to shajia's LinkedIn profile" className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://github.com/abidishajia" className="socialIcons">
                                <i role="button" aria-label="link to shajia's Github profile" className="fab fa-github"></i>
                            </a>
                            <a href="mailto:abidishajia@gmail.com" className="socialIcons">
                                <i role="button" aria-label="link to email shajia on her gmail id" className="far fa-envelope-open"></i>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Header;