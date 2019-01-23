import React, { Component } from 'react';
import headerImage from '../images/headerImage.png'
import styled from 'styled-components'

class About extends Component {
    render() { 
        return ( 
            <AboutPage className="row">
                <div className="col-sm-12">
                    <h3> About </h3>
                </div>
                <div className="col-sm-12 col-md-4 imageCircle">
                    <img src={headerImage} alt="Shajia in her graduation gown" className="rounded-circle"/>
                </div>
              
                <div className="col-sm-12 col-md-8">
                    <p>  I'm a front end web developer, and I've been creating interactive data-driven websites professionally for over two years now. 
                        <span> And still love every minute of it.</span>
                    </p>
                    <p> These are couple of tools you'll find me working with: </p>
                        <ul>
                            <li>JavaScript</li>
                            <li>HTML5 & CSS3</li>
                            <li>React & Redux</li>
                            <li>React-Native</li>
                            <li>Python</li>
                        </ul>

                    <p> </p>
                </div>
            </AboutPage>
         );
    }
}

const AboutPage = styled.div`
.row{
    margin-top: 200px;
}

.rounded-circle{
    max-width:100%;
    max-height:100%;
    border: 10px solid #df38c3;
    transition: 2s all ease;
    animation: colorChange 3s ease infinite;
}

&:hover{
    .rounded-circle{
        transform:rotate(360deg);
    }
}

div:nth-child(1){
    margin-top:20px;
    margin-bottom:20px;

}
h3{
    font-family:'Kalam', cursive;
    font-weight:bolder;
    color: var(--mainPink);
    text-transform: uppercase;
    text-align: center;
    margin-top: 20px;
    font-size: 3.4rem;
}

p, li{
    font-size: 1.6rem;
    font-family: 'Caveat';
}

p span{
    font-weight: bold;
    color: var(--mainPink);
}

@keyframes colorChange {
  0% {
    border-color: #df38c3;
  }

  50% {
    border-color:#ece93b;
  }

  100% {
    border-color:  rgb(34, 158, 142);
  }
}

@media (max-width: 600px) {
    .imageCircle{
        margin-bottom: 20px;
    }
}
`
 
export default About;