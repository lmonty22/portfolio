import React from 'react';
import logo from './logo.svg';
import { Route, Switch, withRouter, Redirect} from "react-router-dom"
// import {Navbar} from 'react-bootstrap'
import './App.css';
import Home from './containers/Home';
import About from './components/About'
import ProjectsContainer from './containers/ProjectsContainer';
import PhotoCarousel from './components/PhotoCarousel'
import BlogContainer from './containers/BlogContainer'
import Contact from './components/Contact'
import NavBar from './components/NavBar'




function App() {
  return (
    <div className='app'> 
    <NavBar/>
    <Switch>

        <Route exact path='/' render={Home} />
        <Route exact path='/about' render={About} />
        <Route exact path='/blog' render={BlogContainer} /> 
        <Route exact path='/projects' render={ProjectsContainer}/>
        <Route exact path='/contact' render={Contact} />
  </Switch>
    </div>
  );
}

export default App;
