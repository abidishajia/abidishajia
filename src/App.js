import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar';
import {Switch, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="container">
          <NavBar/>
          <Switch>
            <Route exact path="/abidishajia" component={Header} /> 
            <Route exact path="/about" component={About} /> 
            <Route exact path="/projects" component={Projects} /> 
          </Switch>
      </div>
    );
  }
}

export default App;
