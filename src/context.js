import React, { Component, createContext } from 'react';
import { projects } from './data';
import { articles } from './data';

const ProjectContext = createContext();
const { Consumer, Provider } = ProjectContext;


class ProjectProvider extends Component {
    state = {
        projects: projects,
        articles: articles,
    }
    render() {
        return (
            <Provider value={{ ...this.state }}>
                {this.props.children}
            </Provider>
        );
    }
}

export { ProjectProvider, Consumer };
