import React from 'react';
import logo from './logo.svg';
import { Route, Switch, withRouter, Redirect} from "react-router-dom"
// import {Navbar} from 'react-bootstrap'
import './App.css';
import HomeContainer from './containers/HomeContainer';
import About from './containers/About'

function App() {
  return (
    <div className='app'> 
        <HomeContainer />
        <About />
    </div>
  );
}

export default App;
