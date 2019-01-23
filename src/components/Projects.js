import React, { Component } from 'react';
import { Consumer } from '../context'
import Project from './Project';
import styled from 'styled-components'


class Projects extends Component {
    render() {
        return (
            <ProjectsWrapper>
                <h3>Projects</h3>
                <div className="row">
                    <Consumer>
                        {(value) => {
                            return value.projects.map(project => {
                                return <Project key={project.id} project={project} />
                            })
                        }}
                    </Consumer>
                </div>
            </ProjectsWrapper>
        );
    }
}

const ProjectsWrapper = styled.div`
    .row{
        margin-top: 70px;
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
`


export default Projects;