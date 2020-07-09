import React from 'react';
import logo from './logo.svg';
import { Route, Switch, withRouter, Redirect} from "react-router-dom"
// import {Navbar} from 'react-bootstrap'
import './App.css';
import Home from './components/Home';
import About from './components/About'
import ProjectsContainer from './containers/ProjectsContainer';
import PhotoCarousel from './components/PhotoCarousel'

function App() {
  return (
    <div className='app'> 
        <Home />
        <About />
        <PhotoCarousel/>
        <ProjectsContainer/>
    </div>
  );
}

export default App;
