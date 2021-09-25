import React, { Fragment } from 'react';
import '../App.css';
import Projects from './Projects';
import Header from './Header';

const Home = () => {

    return (
        <Fragment>
            <Header />
            <Projects />
        </Fragment>
    );
}

export default Home;