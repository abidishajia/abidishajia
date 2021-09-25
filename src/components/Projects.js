import React from 'react';
import { Consumer } from '../context'
import Project from './Project';
import '../styles/Project.css';

const Projects = () => {

    return (
        <div className="projectsWrapper">
            <h4>Projects</h4>
            <div className="row">
                <Consumer>
                    {(value) => {
                        return value.projects.map(project => {
                            return <Project key={project.title} project={project} />
                        })
                    }}
                </Consumer>
            </div>
        </div>
    );

}


export default Projects;