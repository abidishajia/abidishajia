import React from 'react';
import Home from './components/Home';
import Blogs from './components/Blogs';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import NavBar from './components/NavBar';
import { Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="container-fluid">
      <NavBar />
      <Switch>
        <Route exact path="/abidishajia" component={Home} />
        <Route exact path="/blogs" component={Blogs} />
      </Switch>
    </div>
  );
}

export default App;
