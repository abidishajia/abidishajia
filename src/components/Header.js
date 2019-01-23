import React, { Component } from 'react';
import '../App.css';
import styled from 'styled-components'


class Header extends Component {
    render() { 
        return ( 
            <HeaderPage>
                <div className="main">
                    <div className="row">
                        <div className="title-name col-sm-12 col-md-12 mx-auto">
                            <span> SHAJIA ABIDI</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="profession-header col-sm-12 col-md-12  mx-auto">
                            <h3> Front-End Web Developer</h3>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-md-12  mx-auto">
                            <h5 className="tagline"> I build things for the web mainly using JavaScript.</h5>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-sm-2 col-md-2">
                            <span>
                                <a href="https://www.linkedin.com/in/abidishajia/"> 
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </span>
                        </div>

                        <div className="col-sm-2 col-md-2">
                            <span>
                                <a href="https://github.com/abidishajia"> 
                                    <i className="fab fa-github"></i>  
                                </a> 
                            </span>
                        </div>

                        <div className="col-sm-2 col-md-2">
                            <span>
                                <a href="mailto:abidishajia@gmail.com"> 
                                    <i className="far fa-envelope-open"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </HeaderPage>
         );
    }
}

const HeaderPage = styled.div`
i{
    color: #40a4a2;
    font-size: 48px;
}

.row:nth-child(4), .row:nth-child(3){
    margin-top: 20px;
}
`
 
export default Header;