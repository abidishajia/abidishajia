import React, { Component } from 'react';
import styled from 'styled-components';

class Project extends Component {

    render() { 
        const {id, title, description, link, tags} = this.props.project;
        return ( 
            <ProjectWrapper className="col-sm-12 col-md-6 col-lg-4">
                <div className="card">
                    <div className="img-container p-5" onClick={() => console.log(`You clicked me ${id}`)}>
                       <p>{description}</p>
                       <span> <a href={link}>View Code </a> </span>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <h6 className="project-title"> {title} </h6>
                        <span>
                            {tags.includes('React') ? <i class="fab fa-react"/> : ""}
                        </span>

                        <span>
                            {tags.includes('HTML') ? <i class="fab fa-html5"/> : ""}
                        </span>

                        <span>
                            {tags.includes('JS') ? <i class="fab fa-js"/> : ""}
                        </span>

                        <span>
                            {tags.includes('CSS') ? <i class="fab fa-css3" />: ""}
                        </span>
       
                    </div>
                </div>
            </ProjectWrapper>
         );
    }
}
 
export default Project;


const ProjectWrapper = styled.div`
.card{
    border-color: var(--mainSeaGreen);
    transition: all 0.3s linear;
    margin-bottom: 50px;
}

.card-footer{
    background: var(--mainSeaGreen);
    border-top: transparent;
    transition: all 0.3s linear;
}

&:hover{
    .card{
        border: 0.04rem solid rgba(0,0,0,0.4);
        box-shadow: 2px 2px 2px 5px 0 rgba(0,0,0,0.2);
        transform: scale(1.05); 

    }
    .card-footer{
        background: rgb(23, 112, 100);
    }
}
.project-title{
    font-family: 'Kalam', cursive;
    font-weight: bold;
    color: #eecc3a;
    text-transform: uppercase;
}

i{
    color: var(--mainDark);
    font-size: 1.2rem;
}

p, span a{
    font-family: 'Caveat';
    font-size: 1.4rem;
}
`
