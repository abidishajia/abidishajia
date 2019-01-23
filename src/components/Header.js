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
                            <h5 className="tagline"> I build pages for the web.</h5>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-2 col-2">
                            <span>
                                <a href="https://www.linkedin.com/in/abidishajia/"> 
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </span>
                        </div>

                        <div className="col-md-2 col-2">
                            <span>
                                <a href="https://github.com/abidishajia"> 
                                    <i className="fab fa-github"></i>  
                                </a> 
                            </span>
                        </div>

                        <div className="col-md-2 col-2">
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

@media (max-width: 600px) {
    i{
        font-size: 32px;
    }
    .tagline{
        font-size: 0.9rem;
    }
    .row:nth-child(3){
        margin-top:10px;
    }
    .title-name{
        animation-name: none !important;
        color: #bbb930;
        font-weight: 700;
    }
  }
`
 
export default Header;